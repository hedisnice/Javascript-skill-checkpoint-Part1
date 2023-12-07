// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
//ให้อัปเดต Quantity ของ Apple จาก 100 ชิ้น เป็น 200 ชิ้น
inventory.apple.quantity = 200;
// เช็คค่า log ว่า Quantity ของ Apple เพิ่มขึ้นจาก 100 เป็น 200 หรือยังงง
console.log(inventory);
// เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.orange = { price: 20, quantity: 300 };
console.log(inventory);

//คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
const totalInventoryValue =
  inventory.apple.price * inventory.apple.quantity +
  inventory.banana.price * inventory.banana.quantity +
  inventory.orange.price * inventory.orange.quantity;

//ให้แสดงมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกแสดงออกมาทางหน้าจอ Console
console.log(`Total inventory value: ${totalInventoryValue} baht`);
