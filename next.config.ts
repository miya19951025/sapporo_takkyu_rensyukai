import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 静的エクスポートを有効化
  images: {
    unoptimized: true, // 静的エクスポート時は画像最適化を無効化
  },
  trailingSlash: true, // 末尾スラッシュを追加
  // GitHub Pages用の設定（カスタムドメイン使用時は不要な場合あり）
  // basePath: process.env.NODE_ENV === 'production' ? '/sapporo_takkyu_rensyukai' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/sapporo_takkyu_rensyukai' : '',
};

export default nextConfig;

