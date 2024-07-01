import Image from "next/image";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

const getBlogs = async () => {
  return client.fetch(`*[_type == "blog"]`);
};
export default async function Home() {
  const blogs = await getBlogs();
  console.log("🚀 ~ Home ~ blogs:", blogs);

  return (
    <main className="p-10">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-lg">Sanity Integration</h1>
      </div>
      <div className="flex gap-5">
        {blogs.map((blog: any) => (
          <div key={blog._id} className="border rounded-md shadow-lg p-5">
            <h1>{blog.Title}</h1>
            <p>{blog.description}</p>
            <Image
              src={urlForImage(blog.image)}
              width={200}
              height={200}
              alt="image"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
