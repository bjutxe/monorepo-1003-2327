# My Monorepo Project

このプロジェクトは、RustとTypeScriptを使用したバックエンドとフロントエンドを含むMonorepoです。

## ディレクトリ構造

- `backend/` - Rustで記述されたAPIサーバー
- `frontend/` - TypeScriptで記述されたWebサーバー
- `docker-compose.yml` - コンテナオーケストレーションの設定
- `LICENSE.md` - ライセンス情報
- `README.md` - プロジェクトの概要

## セットアップ

### 前提条件

- DockerとDocker Composeがインストールされていること
- Node.jsとnpmがインストールされていること（ローカル開発の場合）

### Dockerを使用して起動

```bash
docker-compose up --build
```

### 動作確認

バックエンドは[http://localhost:8080]で、フロントエンドは[http://localhost:3000]でアクセスできます。
