import { NextResponse } from "next/server";

export async function GET() {
  try {
    const post = await prisma.post.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
  }
}
