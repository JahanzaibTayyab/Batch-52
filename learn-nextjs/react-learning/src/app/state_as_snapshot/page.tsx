"use client";
import Input from "@/components/Input";
import React, { useState } from "react";

type todo = {
  id: number;
  task: string;
  status: boolean;
};
function StateAsASnapShot() {
  //   const [isSent, setIsSent] = useState(false);
  //   const [message, setMessage] = useState("Hi!");
  //   console.log("🚀 ~ StateAsASnapShot ~ message:", message);
  //   if (isSent) {
  //     return <h1>Your message is on its way!</h1>;
  //   }

  //   const sendMessage = (message: string) => {
  //     alert(message);
  //   };

  //   return (
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         setIsSent(true);
  //         // sendMessage(message);
  //       }}
  //     >
  //       {/* {condation ? true : condation ? } */}
  //       <textarea
  //         placeholder="Message"
  //         value={message}
  //         onChange={(e) => setMessage(e.target.value)}
  //         className="h-12 border-zinc-100 border-2"
  //       />
  //       <button type="submit" className="bg-green-500 rounded-sm p-3">
  //         Send
  //       </button>
  //     </form>
  //   );
  const [number, setNumber] = useState(0);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 1,
      task: "This is my Task 1",
      status: false,
    },
  ]);
  //   console.log("🚀 ~ StateAsASnapShot ~ number:", number);
  // setTimeout(() => {
  console.log("🚀 ~ StateAsASnapShot ~ todos:", todos);
  //          alert(number);
  //        }, 5000);

  //   const todos = [
  //     {
  //       id: 1,
  //       task: "This is my Task 1",
  //       status: false,
  //     },
  //   ];

  const onChange = (e: any) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        task: todo,
        status: false,
      },
    ];
    setTodos(newTodos);
  };

  return (
    <div className="p-10">
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5); //25+5
          console.log("before render", number);
          //   alert(number);
          //   setTimeout(() => {
          //     console.log("inside setTimeout of function", number);
          //     alert(number);
          //   }, 3000);
          console.log("end of  function", number);
        }}
      >
        +5
      </button>
      <div className="p-5">Todo</div>
      <Input
        name="todo"
        value={todo}
        placeholder="Enter task"
        onChange={onChange}
      />
      <button
        className="bg-green-500 rounded-sm space-x-5 p-3 ml-5"
        onClick={addTodo}
      >
        Add Todo
      </button>
      <div>
        {todos.map((todo) => (
          <div>
            Title: {todo.task} status: {todo.status ? "True" : "False"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateAsASnapShot;
