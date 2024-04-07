import React, { ReactNode } from "react";

function RouteGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="bg-blue-400 h-80 py-3 px-2">Route Group Layout</div>
      <div>{children}</div>
    </div>
  );
}

export default RouteGroupLayout;
