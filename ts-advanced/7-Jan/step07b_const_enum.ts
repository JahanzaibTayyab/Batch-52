const enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
let c: Color = Color.Green;

const enum Color1 {
  Red = 1,
  Green,
  Blue,
}
//let colorName: Color1 = Color1[2]; //Not allowed with const enums
//console.log(colorName);

const enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
let colorIndex = Color2["Blue"];
console.log(colorIndex);
