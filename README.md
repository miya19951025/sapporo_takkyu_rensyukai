# 札幌卓球練習会 ウェブサイト

札幌で一人で気軽に参加できる卓球練習会・大会のウェブサイトです。

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
```

ビルド後、`out` フォルダに静的ファイルが生成されます。

## GitHub Pagesへのデプロイ

このプロジェクトはGitHub Actionsを使用してGitHub Pagesに自動デプロイされます。

### デプロイの流れ

1. `main`または`master`ブランチにプッシュすると自動的にデプロイが開始されます
2. GitHub Actionsがビルドを実行し、`out`フォルダに静的ファイルを生成します
3. 生成されたファイルがGitHub Pagesにデプロイされます

### 手動デプロイ

GitHubリポジトリの「Actions」タブから「Deploy to GitHub Pages」ワークフローを手動で実行することもできます。

### カスタムドメイン

カスタムドメイン（www.tt-sapporo.com）を使用する場合、`CNAME`ファイルがリポジトリのルートに配置されています。

GitHubリポジトリの設定で、以下を確認してください：
- Settings → Pages → Custom domain に `www.tt-sapporo.com` が設定されていること
- DNS設定が正しく行われていること

## 開発

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# リンター実行
npm run lint
```

## ライセンス

Private


