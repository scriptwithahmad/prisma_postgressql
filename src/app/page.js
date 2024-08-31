import Link from "next/link";
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
    <main className="max-w-[700px] p-4 m-auto">
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-indigo-500 mt-2 mb-4">Feed</h1>
        <Link
          href={"/add-post"}
          className="border border-gray-700 rounded px-3 py-1 text-sm hover:bg-gray-950"
        >
          <button>Add Post</button>
        </Link>
      </section>
      <section className="flex flex-col gap-4">
        {posts.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}
