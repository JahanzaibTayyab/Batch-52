import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <p className="font-bold">Online Class 7-April</p>
      <div className="flex gap-3 flex-col mt-5">
        <Link href={"/route-group"} className="text-blue-500 underline">
          Route Group
        </Link>
        <Link href={"/dynamic-routes"} className="text-green-500 underline">
          Dynamic Route
        </Link>
      </div>
    </main>
  );
}
