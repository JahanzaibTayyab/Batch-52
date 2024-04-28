const data = ["a", "b", "c", "d"];
// for (let i = 0; i < data.length; i++) {
//   const value = data[i];
//   console.log(value);
// }
const newArray = data.map((item, index, fruitArray) =>
  console.log(`item :${item} , index:${index} , array : ${fruitArray}}`)
);

console.log("🚀 ~ newArray:", newArray);

// const newArray2 = data.map((item, index, fruitArray) => ({
//     const value= item*10
// }));
