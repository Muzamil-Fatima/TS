// Generics Allow functions or classes to work with any type while keeping type safety
function identity<T>(arg: T): T {
  return arg;
}
console.log(identity<number>(5));
console.log(identity<string>("Hello"));
