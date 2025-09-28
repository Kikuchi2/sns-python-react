import { useEffect, useState } from "react";
import { PostCard } from "../components/PostCard";
import { Post } from "@/components/types";

export default function HomeFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(false);

      const res = await fetch("/api/posts/", { credentials: "same-origin" });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      // postsA = await res.json(); // { count, next, previous, results: Post[] }
      setPosts(await res.json())
    })();
  }, [])
  
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-4">

      { isLoading && <h2>Loading...</h2> }

      { posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
