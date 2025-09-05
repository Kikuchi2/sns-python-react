// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from "/vite.svg";
import './App.css'
import { PostCard } from './components/PostCard'


const posts = [
  {
    id: "1",
    title: "初めての台北旅行メモ（九份・夜市）",
    body:
      "今週の旅ログ。九份は夕暮れ〜夜がいちばん雰囲気良かった。士林夜市の胡椒餅が優勝。次は十分でランタンを…",
    author: { name: "guest_user" },
    createdAt: "2025-09-01T12:00:00+09:00",
    tags: ["旅行", "台湾"],
    imageUrl: "https://picsum.photos/seed/taipei/600/400",
    likes: 12,
    comments: 3,
  },
  {
    id: "2",
    title: "MacBook Air（M4）充電器は海外対応？",
    body:
      "入力100–240V対応なので変圧器は不要。コンセント形状だけ現地に合わせて変換プラグでOKというメモ。",
    author: { name: "guest_user" },
    createdAt: "2025-09-02T09:30:00+09:00",
    tags: ["ガジェット", "旅行準備"],
    imageUrl: "https://picsum.photos/seed/adapter/600/400",
    likes: 8,
    comments: 1,
  },
  {
    id: "3",
    title: "iPhone 16 Pro と Canon G7X の作例ざっくり比較",
    body:
      "日中はiPhoneの計算写真が強い。室内や望遠はやはりセンサーサイズが物を言う。旅行はiPhone単体でも十分かも。",
    author: { name: "guest_user" },
    createdAt: "2025-09-02T21:10:00+09:00",
    tags: ["カメラ", "写真"],
    imageUrl: "https://picsum.photos/seed/iphonevsg7x/600/400",
    likes: 15,
    comments: 4,
  },
  {
    id: "4",
    title: "Vite のホットリロードが急に動いた理由メモ",
    body:
      "依存関係をdependenciesに移したのがトリガー。開発サーバの解決順とimportパスが影響していたっぽい、再現手順あり。",
    author: { name: "guest_user" },
    createdAt: "2025-09-03T10:05:00+09:00",
    tags: ["フロントエンド", "Vite", "HMR"],
    imageUrl: "https://picsum.photos/seed/vitehmr/600/400",
    likes: 6,
    comments: 2,
  },
  {
    id: "5",
    title: "Django × React 構成メモ（SPA配信＆API）",
    body:
      "静的配信はNginx、APIはDjango REST Framework。index.html→必要データのみAPIから取得、の一般的構成で落ち着いた。",
    author: { name: "guest_user" },
    createdAt: "2025-09-03T18:40:00+09:00",
    tags: ["Django", "React", "設計"],
    imageUrl: "https://picsum.photos/seed/djangoreact/600/400",
    likes: 9,
    comments: 1,
  },
  {
    id: "6",
    title: "台湾・香港・ソウル：プラグ形状と変換まとめ",
    body:
      "台湾A型、香港G型、韓国は基本C/SE。電圧は100–240V対応の機器なら変圧器不要。マルチ変換プラグを一本化。",
    author: { name: "guest_user" },
    createdAt: "2025-09-04T07:20:00+09:00",
    tags: ["旅行準備", "電源"],
    imageUrl: "https://picsum.photos/seed/plugmap/600/400",
    likes: 11,
    comments: 2,
  },
  {
    id: "7",
    title: "Airalo eSIM を出国前に動作確認するチェック",
    body:
      "モバイル通信プランに表示→回線有効化は現地でON。APN自動設定・ローミングON・優先回線の切替を手順化しておく。",
    author: { name: "guest_user" },
    createdAt: "2025-09-04T12:15:00+09:00",
    tags: ["eSIM", "モバイル"],
    imageUrl: "https://picsum.photos/seed/airalo/600/400",
    likes: 7,
    comments: 0,
  },
  {
    id: "8",
    title: "AWS SAA 勉強ログ Day 1",
    body:
      "VPC/サブネット/IGWの基礎をUdemyで復習。用語は略さず日本語で説明できるように要点をメモ化。",
    author: { name: "guest_user" },
    createdAt: "2025-09-04T22:00:00+09:00",
    tags: ["AWS", "学習"],
    imageUrl: "https://picsum.photos/seed/awsday1/600/400",
    likes: 5,
    comments: 1,
  },
  {
    id: "9",
    title: "ランニング3日目：つま先が痛い問題",
    body:
      "サイズは合っているがトゥボックスが狭いかも。ワイドモデル試す＆着地の癖を動画で確認予定。",
    author: { name: "guest_user" },
    createdAt: "2025-09-05T06:45:00+09:00",
    tags: ["ランニング", "健康"],
    // 画像なしパターンのUI確認
    likes: 4,
    comments: 0,
  },
  {
    id: "10",
    title: "Notionで海外旅行チェックリスト公開",
    body:
      "台湾/香港/韓国の持ち物・事前手続き・当日導線をテンプレに。オンラインチェックインの締切も項目化。",
    author: { name: "guest_user" },
    createdAt: "2025-09-05T13:10:00+09:00",
    tags: ["Notion", "テンプレート", "旅行"],
    imageUrl: "https://picsum.photos/seed/notiontravel/600/400",
    likes: 13,
    comments: 5,
  },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-8 space-y-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </main>
  );
}

export default App
