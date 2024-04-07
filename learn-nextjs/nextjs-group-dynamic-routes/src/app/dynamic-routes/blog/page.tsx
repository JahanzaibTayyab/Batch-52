import { blogs } from "@/constant";
import Link from "next/link";
import React from "react";

function BlogPage() {
  return (
    <div>
      BlogPage
      <div className="flex gap-5 text-green-500">
        <Link href={`/dynamic-routes/blog/${blogs[0].id}`}>
          This is My Blog 1
        </Link>
        <Link href={`/dynamic-routes/blog/${blogs[1].id}`}>
          This is My Blog 2
        </Link>
        <Link href={`/dynamic-routes/blog/${blogs[2].id}`}>
          This is My Blog 3
        </Link>
        <Link href={`/dynamic-routes/blog/${blogs[3].id}`}>
          This is My Blog 4
        </Link>
        <Link href={`/dynamic-routes/blog/${blogs[4].id}`}>
          This is My Blog 5
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
