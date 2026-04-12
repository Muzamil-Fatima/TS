let subs: number | string = "1M";
subs = 1000000;

let apiRequest: "pending" | "success" | "error" = "pending";
apiRequest = "success";

let airlineSeat: "aisle" | "window" | "middle" = "aisle";

airlineSeat = "window";

const orders = ["12", "20", "28", "30"];
let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "20") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
