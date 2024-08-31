import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request) {
  const res = await request.json();

  const { title, content } = res.formData;

  if (!title || !content) {
    return NextResponse.json(
      { error: "Title and content are required" },
      { status: 400 }
    );
  }

  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      author: {
        create: {
          name: "Muhammad Ahmad",
        },
      },
    },
  });

  return NextResponse.json({ result }, { status: 200 });
}
