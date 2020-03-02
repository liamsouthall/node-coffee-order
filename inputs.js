const fs = require("fs");
const addOrder = (name, coffee, size) => {
  const NewOrder = {
    Name: name,
    Coffee: coffee,
    Size: size
  };
  const allOrders = loadOrders();
  allOrders.push(NewOrder);
  saveOrders(allOrders);
};
const loadOrders = () => {
  try {
    const dataBuffer = fs.readFileSync("Orders.json");
    const OrderJson = dataBuffer.toString();
    return JSON.parse(OrderJson);
  } catch (error) {
    return [];
  }
};

const saveOrders = allOrders => {
  const OrderJson = JSON.stringify(allOrders);
  fs.writeFileSync("Orders.json", OrderJson);
};

const listOrders = () => {
  const allOrders = loadOrders();
  allOrders.map(order => {
    console.log(order);
  });
};

const removeOrder = orderToDelete => {
  const allOrders = loadOrders();

  const ordersToKeep = allOrders.filter(order => {
    return order.Name != orderToDelete;
  });

  saveOrders(ordersToKeep);
};

module.exports = {
  addOrder,
  listOrders,
  removeOrder
};
