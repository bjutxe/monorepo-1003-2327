FROM rust:1.81

WORKDIR /usr/src/app

# 依存関係ファイルを先にコピーしてキャッシュを利用
COPY Cargo.toml Cargo.lock ./
RUN cargo fetch

# ソースコード全体をコピー
COPY . .

# ビルドコマンド
RUN cargo build --release

# 実行コマンド
CMD ["cargo", "run", "--release"]
