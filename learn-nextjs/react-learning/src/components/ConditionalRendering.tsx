const object = {
  name: "fghjkl",
  city: "",
};

type ConditionalRendering = {
  role: string;
  age: number;
  isUser: boolean;
};
function ConditionalRendering({ role, age, isUser }: ConditionalRendering) {
  console.log("🚀 ~ ConditionalRendering ~ isUser:", isUser);
  console.log("🚀 ~ ConditionalRendering ~ age:", age);
  //   console.log("🚀 ~ ConditionalRendering ~ props:", props);
  //   const { role } = props;
  console.log("🚀 ~ ConditionalRendering ~ role:", role);
  const { name, city } = object;
  console.log(name);

  const user = {
    name: "Jahnzaib",
    role: "user",
  };

  return (
    <div>
      {user.role === "admin" ? (
        <div>Admin Panel</div>
      ) : user.role === "user" ? (
        <div>User Panel</div>
      ) : (
        <div>Login form</div>
      )}
      {role === "admin" && <div>Admin Props</div>}
    </div>
  );
}

export default ConditionalRendering;
