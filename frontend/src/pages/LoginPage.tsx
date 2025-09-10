export default function LoginPage() {

  return (
    <div className="mx-auto max-w-md px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold">ログイン</h1>
      <form className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-zinc-300">メール</label>
          <input
            type="email"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">パスワード</label>
          <input
            type="password"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium hover:bg-indigo-500"
        >
          ログイン
        </button>
      </form>
    </div>
  );
}
