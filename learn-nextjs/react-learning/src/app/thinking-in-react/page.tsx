"use client";
import Input from "@/components/Input";
import { useState } from "react";
const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
const ThinkingInReact = () => {
  const [search, setSearch] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log("🚀 ~ ThinkingInReact ~ search:", search);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setSearch(event.target.value);
    // console.log("onChange", event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setEmail(event.target.value);
    // console.log("onChange", event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    setPassword(event.target.value);
    // console.log("onChange", event.target.value);
  };

  return (
    <div className="p-5">
      Thinking In React
      <Input
        placeholder="Search"
        value={search}
        onChange={onChange}
        name="search"
        type="input"
      />
      <Input
        type="email"
        placeholder="Search"
        value={email}
        onChange={onEmailChange}
        name="search"
      />
      <Input
        type="password"
        placeholder="Search"
        value={password}
        onChange={onPasswordChange}
        name="search"
      />
      <Input
        type="file"
        placeholder="Search"
        value={password}
        onChange={onPasswordChange}
        name="search"
      />
      <Input
        type="date"
        placeholder="Search"
        value={password}
        onChange={onPasswordChange}
        name="search"
      />
      <div>
        {data.map((item, index) => (
          <div key={index}>
            {item.category} {item.name} {item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThinkingInReact;
