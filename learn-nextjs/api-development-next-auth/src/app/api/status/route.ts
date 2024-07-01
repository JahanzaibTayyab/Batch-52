import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  console.log("🚀 ~ GET ~ request:", request);
  const response = {
    status: "OK",
  };
  return new NextResponse(JSON.stringify(response), {
    status: 200,
  });
}
