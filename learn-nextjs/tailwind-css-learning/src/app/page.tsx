import Heading from "@/components/Heading";
import Sidebar from "@/views/Sidebar";

export default function Home() {
  return (
    <div>
      Tailwind Styling
      Styling not applied if the directory is not added in content in tailwind.config.ts */}
     <Sidebar />
      <br />
      {/* Component styling with Tailwind */}
      <Heading />
      <br />
      <h1 className="text-sky-800 text-5xl">
        Inline styling with tailwind css
      </h1>
      <br />
      <br />
      <h2>External Styling using class</h2>
      <p className="gradient text-xl p-5 text-white">
        🍔 Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <br />
      <p className="gradient text-xl bg-clip-text text-transparent p-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className="flex justify-evenly flex-wrap-reverse">
        <div className="quote">
          <span>- David J. Schwartz</span>
        </div>
        <div className="quote">
          <span>- Robin Sharma</span>
        </div>
        
        <div className="quote">
          <span>- Zig Ziglar</span>
        </div>
        <div className="quote">
          <span>- Zig Ziglar</span>
        </div>
        <div className="quote">
          <span>- Zig Ziglar</span>
        </div>
      </div>

    </div>
  );
}
