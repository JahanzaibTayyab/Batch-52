import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

const books = [
  {
    id: 1,
    name: "The Russian",
    type: "fiction",
    available: true,
  },
  {
    id: 2,
    name: "Just as I Am",
    type: "non-fiction",
    available: false,
  },
  {
    id: 3,
    name: "The Vanishing Half",
    type: "fiction",
    available: true,
  },
  {
    id: 4,
    name: "The Midnight Library",
    type: "fiction",
    available: true,
  },
  {
    id: 5,
    name: "Untamed",
    type: "non-fiction",
    available: true,
  },
  {
    id: 6,
    name: "Viscount Who Loved Me",
    type: "fiction",
    available: true,
  },
];

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify(books), {
    status: 200,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("🚀 ~ POST ~ body:", body.id);

  return new NextResponse(JSON.stringify(body), {
    status: 200,
  });
}
