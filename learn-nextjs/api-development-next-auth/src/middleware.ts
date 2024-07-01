import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middleware", request.nextUrl.pathname);
  const user = { id: 1, name: "Jahanzaib" };
  if (request.nextUrl.pathname.startsWith("/dash")) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.next();
    }
  }
}

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }
