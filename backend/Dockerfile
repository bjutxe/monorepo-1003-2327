FROM rust:latest

WORKDIR /usr/src/app

COPY Cargo.toml Cargo.lock ./
RUN cargo install --path .

COPY . .

CMD ["cargo", "run", "--release"]
