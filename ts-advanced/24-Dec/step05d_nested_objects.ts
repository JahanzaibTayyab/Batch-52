type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  author: Author;
  name: string;
};

const myBook: Book = {
  author: {
    firstName: "Random",
    lastName: "Person",
  },
  name: "Book1",
};

console.log(myBook);
console.log("Book Name", myBook.name);
console.log("Book Author", myBook.author);
console.log("Book Author FirstName", myBook.author.firstName);
console.log("Book Author LastName", myBook.author.lastName);
console.log(
  `Book Author FullName ${myBook.author.firstName} ${myBook.author.lastName}`
);

console.log(
  "Book Author FullName" +
    " " +
    myBook.author.firstName +
    " " +
    myBook.author.lastName
);
