import React, { ReactNode } from "react";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <div className="bg-slate-400 h-80 py-3 px-2">DashboardLayout</div>
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
