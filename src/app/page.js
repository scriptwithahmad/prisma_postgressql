import prisma from "../../lib/prisma";
import Posts from "./components/Posts";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  // console.log({ posts });
  return (
    <main className="flex flex-col items-center gap-4">
      <h1>Feed</h1>
      {posts.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </main>
  );
}
