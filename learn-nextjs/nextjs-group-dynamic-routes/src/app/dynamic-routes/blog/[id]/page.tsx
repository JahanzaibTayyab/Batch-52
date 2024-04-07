import { blogs } from "@/constant";
type BlogPageDetailType = {
  params: { id: string };
  searchParams: any;
};

const findBlogById = (id: number) => {
  const blog = blogs.find((item) => item.id == id);
  return blog;
};

export default function Page({ params, searchParams }: BlogPageDetailType) {
  console.log("🚀 ~ Page ~ searchParams:", searchParams);
  console.log("🚀 ~ Page ~ params:", params);
  const blog = findBlogById(+params.id);

  return (
    <div className="flex gap-3 flex-col p-5">
      React Server Component (params , searchParams)
      <div>Client Component (useParams , useSearchParams) </div> My Post:{" "}
      {params.id}
      <div>Blog Detail</div>
      <h1 className="font-bold">Title : {blog?.title}</h1>
      <p>{blog?.description}</p>
    </div>
  );
}
