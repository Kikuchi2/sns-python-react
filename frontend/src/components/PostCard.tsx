import React from "react";

type Post = {
  id: string;
  title: string;
  body: string;
  author: { name: string; avatarUrl?: string };
  createdAt: string | Date;
  tags?: string[];
  imageUrl?: string;
  likes?: number;
  comments?: number;
};

const clamp = (lines: number): React.CSSProperties => ({
  display: "-webkit-box",
  WebkitLineClamp: String(lines) as unknown as number,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});

export function PostCard({ post }: { post: Post }) {
  const created = new Date(post.createdAt);

  return (
    <article
      className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 transition
                 shadow-lg overflow-hidden"
      >
      <div className="flex flex-col md:flex-row">
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt=""
            className="h-44 w-full md:h-auto md:w-60 object-cover"
            loading="lazy"
          />
        )}

        <div className="flex-1 p-5">
          <header className="flex items-start gap-4 justify-between">
            <h3 className="text-lg font-semibold leading-tight" style={clamp(2)}>
              {post.title}
            </h3>
            <time
              className="shrink-0 text-xs text-zinc-400"
              dateTime={created.toISOString()}
              title={created.toLocaleString()}
            >
              {created.toLocaleDateString()}
            </time>
          </header>

          <div className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
            {post.author.avatarUrl ? (
              <img
                src={post.author.avatarUrl}
                alt=""
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <div className="h-6 w-6 rounded-full bg-zinc-700 grid place-items-center text-[10px]">
                {post.author.name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <span className="text-zinc-300">{post.author.name}</span>
          </div>

          <p className="mt-3 text-sm text-zinc-300" style={clamp(3)}>
            {post.body}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {(post.tags ?? []).map((t) => (
              <span
                key={t}
                className="rounded-full bg-zinc-800/80 px-2.5 py-1 text-xs text-zinc-200"
              >
                #{t}
              </span>
            ))}

            <div className="ml-auto flex items-center gap-4 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10z"
                    fill="currentColor"
                  />
                </svg>
                {post.likes ?? 0}
              </span>
              <span className="inline-flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z"
                    fill="currentColor"
                  />
                </svg>
                {post.comments ?? 0}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
