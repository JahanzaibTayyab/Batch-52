import Image from "next/image";
import { AboutPage } from "@/components/About";
import Profile from "@/components/Profile";
import ConditionalRendering from "@/components/ConditionalRendering";

export default function Home() {
  const user = {
    name: "Jahanzaib",
    city: "Lahore",
  };

  const abc = "ghjkl";

  function MyButton() {
    return <button className="bg-blue-500 rounded-sm p-2">I'm a button</button>;
  }

  function MyInput() {
    return <input className="bg-blue-500 rounded-sm p-2"></input>;
  }

  return (
    <div className="p-5">
      <p className="font-bold text-lg">React Basics</p>
      <p>
        React apps are made out of components. A component is a piece of the UI
        (user interface) that has its own logic and appearance. A component can
        be as small as a button, or as large as an entire page. React components
        are JavaScript functions that return markup
      </p>
      <div className="flex gap-1 py-5 justify-between">
        <div className="p-5">
          <MyButton />
        </div>
        <MyInput />
        <AboutPage />
        <p className="p-5 font-bold">User Detail</p>
        <p>{user.name}</p>
        <p>{user.city}</p>
      </div>
      <div className="py-5">
        Profile Component
        <Profile />
      </div>
      <div className="py-5">
        Conditional Rendering Component
        <ConditionalRendering role="user" isUser={true} age={25} />
      </div>
    </div>
  );
}
