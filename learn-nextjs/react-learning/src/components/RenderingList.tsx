import React from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
  { title: "Apple2", id: 4 },
  { title: "Apple3", id: 5 },
  { title: "Apple4", id: 6 },
  { title: "Apple5", id: 7 },
  { title: "Apple6", id: 8 },
];

function RenderingList() {
  return (
    <div className="p-5">
      RenderingList
      <div>
        {products.map((item) => {
          return (
            <div key={item.id} className="bg-green-100 mt-3">
              This is Title : {item.title} {item.id}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RenderingList;
