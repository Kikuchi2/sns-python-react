export type Post = {
  id: string;
  title: string;
  body: string;
  author: { name: string };
  createdAt: string | Date;
  tags: string[];
  imageUrl?: string;
  likes?: number;
  comments?: number;
};