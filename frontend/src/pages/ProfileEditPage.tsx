export default function ProfileEditPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 space-y-6">
      <h1 className="text-2xl font-bold">プロフィール編集</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm text-zinc-300">表示名</label>
          <input
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="guest_user"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-zinc-300">自己紹介</label>
          <textarea
            rows={4}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="こんにちは！台北と写真が好き。"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium hover:bg-indigo-500">
          保存
        </button>
        <button className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-800">
          キャンセル
        </button>
      </div>
    </div>
  );
}
