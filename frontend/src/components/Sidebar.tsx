import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const base =
    "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors";
  const inactive = "text-zinc-300 hover:bg-zinc-800/60";
  const active = "bg-zinc-800 text-white";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [base, isActive ? active : inactive].join(" ");

  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-zinc-800 bg-zinc-900/60 px-4 py-6 hidden md:block">
      <div className="mb-6 px-2 text-xl font-semibold">My SNS</div>
      <nav className="space-y-1">
        <NavLink to="/" className={linkClass} end>
          <span>🏠</span> <span>ホーム</span>
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          <span>🔐</span> <span>ログイン</span>
        </NavLink>
        <NavLink to="/settings/profile" className={linkClass}>
          <span>📝</span> <span>プロフ編集</span>
        </NavLink>
      </nav>
      <p className="mt-6 px-2 text-xs text-zinc-400">
        ※ スマホ表示では右上メニューから開く構成にするのも◎（後で実装可能）
      </p>
    </aside>
  );
}
