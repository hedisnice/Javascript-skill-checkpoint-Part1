// Question 5: Calculating Total Price in User's Cart

// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = (cart) => {
  let totalPrice = 0;
  //คำนวณราคาสินค้ารวม ในตะกร้า
  for (const { price, quantity } of cart) {
    totalPrice += price * quantity;
  }
  return totalPrice;
};
// ตัวอย่างการใช้งาน
const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); //ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
