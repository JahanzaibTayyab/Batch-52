import React from "react";

const getData = async () => {
  const res = await fetch("https://api.quotable.io/random?tags=technology");
  if (res.ok) {
    return res.json();
  } else {
    return new Error("Something went wrong");
  }
};

async function ServerComponent() {
  const quote = await getData();
  console.log("🚀 ~ ServerComponent ~ content:", quote);

  console.log("ServerComponent");
  return (
    <div className="p-5">
      step02_fetching_data_server_static
      <div className="py-5">
        <div>{quote.content}</div>
      </div>
    </div>
  );
}

export default ServerComponent;
