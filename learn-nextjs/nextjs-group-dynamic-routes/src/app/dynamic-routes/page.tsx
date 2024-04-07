import Link from "next/link";
import React from "react";

function DynamicRoutes() {
  return (
    <div className="p-5">
      {`When you don't know the exact segment names ahead of time and want to
      create routes from dynamic data, you can use Dynamic Segments that are
      filled in at request time or prerendered at build time.`}
      <div className="py-5 ">
        <Link href="/dynamic-routes/blog" className="underline">
          Blog
        </Link>
      </div>
    </div>
  );
}

export default DynamicRoutes;
