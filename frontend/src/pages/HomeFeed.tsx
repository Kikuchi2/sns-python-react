import { PostCard } from "../components/PostCard";

export type Post = {
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

export default function HomeFeed({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-4">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
