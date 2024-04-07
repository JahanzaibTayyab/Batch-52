import React from "react";
import Link from "next/link";
function RouteGroup() {
  const routes = {
    login: "/login",
    register: "/register",
  };
  return (
    <div className="p-5">
      {` In the app directory, nested folders are normally mapped to URL paths.
      However, you can mark a folder as a Route Group to prevent the folder from
      being included in the route's URL path. This allows you to organize your
      route segments and project files into logical groups without affecting the
      URL path structure.`}

      <Link
        href="https://nextjs.org/docs/app/building-your-application/routing/route-groups"
        target="_blank"
        className="underline text-blue-900 font-bold"
      >
        Route Group
      </Link>
      <div className="flex flex-col gap-3 mt-5">
        <Link href={`/route-group${routes.login}`}>
          Login (http://localhost:3000/route-group/login)
        </Link>
        <Link href={`/route-group${routes.register}`}>
          Register (http://localhost:3000/route-group/register)
        </Link>
      </div>
    </div>
  );
}

export default RouteGroup;
