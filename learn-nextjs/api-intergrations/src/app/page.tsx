import Link from "next/link";
export default function Home() {
  return (
    <main className="p-10">
      <div className="font-bold text-lg">API Integration</div>
      <div className="px-5 py-3 flex gap-5">
        <Link href="/server_static">server_static</Link>
        <Link href="/data_server_dynamic">data_server_dynamic</Link>
      </div>
    </main>
  );
}
