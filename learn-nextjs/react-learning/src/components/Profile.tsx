import Image from "next/image";
import image2 from "/public/images/image2.jpg";
console.log("🚀 ~ image2:", image2);
const user = {
  name: "Hedy Lamarr",
  imageUrl:
    "https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <div className="flex gap-5 flex-wrap">
        <div className="w-96 h-96 bg-slate-500">
          <Image
            className="object-fill w-full h-full"
            src={user.imageUrl}
            alt={"Photo of " + user.name}
            // style={{
            //   width: user.imageSize,
            //   height: user.imageSize,
            // }}
            width={500}
            height={500}
          />
        </div>
        <Image
          src={
            "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713484800&semt=sph"
          }
          alt="image"
          width={500}
          height={500}
        />
        <Image src="/image1.jpg" alt="f" width={300} height={300} />
        <Image src={image2} alt="image2" width={300} height={300} />
      </div>
    </>
  );
}
