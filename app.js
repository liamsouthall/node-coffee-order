const yargs = require("yargs");
const readline = require("readline");
const figlet = require("figlet");
const { addOrder, listOrders, removeOrder } = require("./inputs");

figlet("Coffee Order Form!!", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
  OrderFunction();
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let OrderFunction = () => {
  console.log("");
  rl.question("Do you want to add, remove, list or leave: ", function(command) {
    if (command == "add") {
      rl.question("Who's ordering coffee: ", function(name) {
        rl.question("What coffee: ", function(coffee) {
          rl.question("What size coffee: ", function(size) {
            console.log("Order Added");
            addOrder(name, coffee, size);
            OrderFunction();
          });
        });
      });
    } else if (command == "remove") {
      rl.question("Who's order do you want to remove: ", function(name) {
        console.log("Order Removed");
        removeOrder(name);
        OrderFunction();
      });
    } else if (command == "list") {
      console.log("fetching orders....");
      console.log("");
      listOrders();
      OrderFunction();
    } else if (command == "leave") {
      rl.close();
    } else {
      console.log("command not recognised");
      OrderFunction();
    }
  });
};
