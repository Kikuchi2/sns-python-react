import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeFeed from "./pages/HomeFeed";
import LoginPage from "./pages/LoginPage";
import ProfileEditPage from "./pages/ProfileEditPage";

// 既存の PostCard は HomeFeed 内で使います

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
];

function Shell() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[16rem_1fr]">
          <Sidebar />
          <main>
            {/* モバイル用の簡易ヘッダー（必要なら） */}
            <div className="block md:hidden border-b border-zinc-800 px-4 py-3">
              <div className="text-lg font-semibold">My SNS</div>
              <div className="text-xs text-zinc-400">
                メニューはPC表示でサイドにあります
              </div>
            </div>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<HomeFeed posts={posts} />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="settings">
            <Route path="profile" element={<ProfileEditPage />} />
          </Route>

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="px-4 py-10">
                <h1 className="text-2xl font-bold">ページが見つかりません</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
