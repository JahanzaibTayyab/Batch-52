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

type paramType = {
  params: { bookId: string };
};
export async function GET(request: NextRequest, { params }: paramType) {
  const { bookId } = params;
  const searchParams = request.nextUrl.searchParams;

  console.log("🚀 ~ GET ~ bookId:", bookId);

  const book = books.find((book) => {
    return book.id == Number(bookId);
  });

  console.log("🚀 ~ GET ~ book:", book);

  if (book) {
    return new NextResponse(JSON.stringify(book), {
      status: 200,
    });
  } else {
    return new NextResponse(JSON.stringify({ message: "Book not found" }), {
      status: 404,
    });
  }
}

export async function PUT(request: NextRequest, { params }: paramType) {
  const { bookId } = params;
  const searchParams = request.nextUrl.searchParams;
  const body = await request.json();
  console.log("🚀 ~ POST ~ body:", body);
  console.log("🚀 ~ GET ~ bookId:", bookId);

  const book = books.find((book) => {
    return book.id == Number(bookId);
  });

  console.log("🚀 ~ GET ~ book:", book);

  if (book) {
    return new NextResponse(JSON.stringify(book), {
      status: 200,
    });
  } else {
    return new NextResponse(JSON.stringify({ message: "Book not found" }), {
      status: 404,
    });
  }
}
