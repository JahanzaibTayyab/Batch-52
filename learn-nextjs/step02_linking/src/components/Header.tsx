import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-gray-200 p-3 gap-5">
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/setting">Setting</Link>
      <Link href="/blog">Blog</Link>
      <a href="/blog">Blog</a>
    </div>
  );
}

export default Header;
