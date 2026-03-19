function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 10));
console.log(add(5, 5))
// optional parameter
function greet(name:string, greeting?:string): string{
    return `${greeting ?? "Hello"}, ${name}`;
}
console.log(greet("Muzamil"))
console.log(greet("Muzamil", "Hi"))