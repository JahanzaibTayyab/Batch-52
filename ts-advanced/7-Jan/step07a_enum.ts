enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
let c: Color = Color.Red;
console.log(c);

enum Color1 {
  Red = 1,
  Green,
  Yellow,
}
let colorName: string = Color1[5];
console.log(colorName);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex);
