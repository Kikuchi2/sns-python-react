import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomeFeed from "./pages/HomeFeed";
import LoginPage from "./pages/LoginPage";
import ProfileEditPage from "./pages/ProfileEditPage";

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
          <Route index element={<HomeFeed/>} />
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
