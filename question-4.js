// Question 4: Shipping Cost Calculator

//ให้เขียน Function calculateShippingCost
const calculateShippingCost = (orderTotal) =>
  // เริ่มเขียนโค้ดตรงนี้
  orderTotal >= 4000
    ? "Shipping is free."
    : orderTotal >= 2000
    ? "Shipping cost is 250 Baht."
    : "Shipping cost is 500 Baht.";

// นำ Function ไป Execute
const orderTotal1 = 4001;
const orderTotal2 = 2001;
const orderTotal3 = 1999;
console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Ship ping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3));

/* 
// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Ship ping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."
*/
