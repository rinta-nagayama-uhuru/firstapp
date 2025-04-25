# ベースとして使用するnode.jsのイメージを指定
FROM node:lts

# コンテナ内での作業ディレクトリを指定。以降のコマンド（命令）は、指定したディレクトリ内で実施される。
WORKDIR /app

# package.json および package-lock.json を先にコピー
COPY ./package*.json .

# npmをインストールし、必要な依存関係をインストールする。
RUN npm install -g nodemon

# 残りのアプリケーションファイルをコピー
COPY . .

# wait-for-it.shの実行権限を付与
RUN chmod +x wait-for-it.sh

# Prismaクライアントオブジェクトを生成
RUN npx prisma generate

# 3000番ポートを解放する
EXPOSE 3000

# コンテナが起動したときの起動コマンドを設定。
CMD ["/bin/sh", "-c", "/app/wait-for-it.sh db:5432 --timeout=30 && npx prisma migrate deploy && nodemon index.js"]