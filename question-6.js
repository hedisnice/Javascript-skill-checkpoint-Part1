// Question #6: Calculating Total Price in User's Cart

const filterInStockProducts = (products) => {
  // เริ่มเขียนโค้ดตรงนี้
  const inStockProducts = [];
  //กรองสินค้าที่มี quantity มากกว่า 0
  for (const product of products) {
    if (product.quantity > 0) {
      inStockProducts.push(product);
    }
  }
  return inStockProducts;
};

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
