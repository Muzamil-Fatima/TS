interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

const user1: User = { name: "Ali", age: 25 };
console.log(user1);
