Certainly! Here are the solutions for the 30 TypeScript coding practice questions:

**1. Variable and String:**

```typescript
let name: string = "John";
```

**2. Function for Adding Numbers:**

```typescript
function addNumbers(a: number, b: number): number {
  return a + b;
}
```

**3. Check Even or Odd:**

```typescript
function isEvenOrOdd(num: number): string {
  return num % 2 === 0 ? "Even" : "Odd";
}
```

**4. Concatenate Strings:**

```typescript
function concatenateStrings(str1: string, str2: string): string {
  return str1 + str2;
}
```

**5. Calculate Rectangle Area:**

```typescript
function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}
```

**6. Check Palindrome:**

```typescript
function isPalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
```

**7. Object for Book:**

```typescript
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
};
```

**8. Object for Book Function:**

```typescript
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  displayDetails: function () {
    console.log(`Title: ${this.title}, Author: ${this.author}`);
  },
};
```

**9. Object for Person:**

```typescript
const person = {
  name: "Alice",
  age: 25,
  address: "123 Main St",
};
```

**10. Array of Fruits:**

```typescript
const fruits: string[] = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

**11. Average of Numbers:**

```typescript
function averageOfNumbers(numbers: number[]): number {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}
```

**12. Concatenate Arrays:**

```typescript
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const concatenatedArray: number[] = array1.concat(array2);
```

**13. Filter Even Numbers:**

```typescript
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);
```

**14. Transform Array with Lengths:**

```typescript
const words: string[] = ["apple", "banana", "orange"];
const wordLengths: number[] = words.map((word) => word.length);
```

**15. Check Positive Numbers:**

```typescript
function areAllPositive(numbers: number[]): boolean {
  return numbers.every((num) => num > 0);
}
```

**16. For Loop:**

```typescript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**17. While Loop Countdown:**

```typescript
let count = 10;
while (count >= 1) {
  console.log(count);
  count--;
}
```

**18. Find Index of Element:**

```typescript
const array: number[] = [10, 20, 30, 40, 50];
const indexOfElement: number = array.indexOf(30);
```

**19. Callback with setTimeout:**

```typescript
function delayedMessage(callback: () => void): void {
  setTimeout(callback, 1000);
}

// Example usage
delayedMessage(() => {
  console.log("Delayed message");
});
```

**20. Callback Function:**

```typescript
function withCallback(value: number, callback: (result: number) => void): void {
  const result = value * 2;
  callback(result);
}

// Example usage
withCallback(5, (result) => {
  console.log(`Result: ${result}`);
});
```

**21. Promise with Delay:**

```typescript
function delayedPromise(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delayed promise resolved");
    }, 1000);
  });
}

// Example usage
delayedPromise().then((message) => {
  console.log(message);
});
```

**22. Chained Promises:**

```typescript
function sequentialPromises(): Promise<string> {
  return delayedPromise()
    .then((message1) => {
      console.log(message1);
      return delayedPromise();
    })
    .then((message2) => {
      console.log(message2);
      return "All promises resolved";
    });
}

// Example usage
sequentialPromises().then((finalMessage) => {
  console.log(finalMessage);
});
```

**23. Promise.all:**

```typescript
const promise1 = delayedPromise();
const promise2 = delayedPromise();

Promise.all([promise1, promise2]).then((messages) => {
  console.log(messages);
});
```

**24. Default Parameter:**

```typescript
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

// Example usage
const greeting = greet();
```

**25. Sort Objects by Property:**

```typescript
const objects: { name: string; age: number }[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

const sortedObjects = objects.sort((a, b) => a.age - b.age);
```

**26. Rest Parameter:**

```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Example usage
const result = sumNumbers(1, 2, 3, 4);
```

**27. Nested Loop Pattern:**

```typescript
for (let i = 1; i <= 5; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
```

**28. Second-Largest Number:**

```typescript
function secondLargest(numbers: number[]): number {
  const uniqueNumbers = Array.from(new Set(numbers));
  uniqueNumbers.sort((a, b) => b - a);
  return uniqueNumbers[1];
}

// Example usage
const numbers = [10, 5, 8, 12, 15, 5, 7];
const secondLargestNum = secondLargest(numbers);
```

**29. Leap Year Checker:**

```typescript
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Example usage
const isLeap = isLeapYear(2024);
```

**30. Simple Quiz Program:**

```typescript
class Question {
  constructor(public prompt: string, public answer: string) {}
}

const questions: Question[] = [
  new Question("What is 2 + 2?", "4"),
  new Question("Who is the capital of France?", "Paris"),
];
```
