// Question 3: User Authentication

function authenticateUser(username, password) {
  const validUsername = "user123";
  const validPassword = "securepass";

  // เริ่มเขียนโค้ดตรงนี้
  //ตรวจเช็คค่า  username และ passwords แล้ว return ค่าออกมา
  return username === validUsername && password === validPassword
    ? "Login successful."
    : "Login failed. Please check your username and password.";
}
// นำ Function ไป Execute
const result1 = authenticateUser("user123", "securepass");
console.log(result1);
const result2 = authenticateUser("abcdes", "123456");
console.log(result2);

/* // ตัวอย่างการใช้งาน
const username1 = "user123";
const password1 = "securepass";
const username2 = "guest";
const password2 = "password123"; 
console.log(authenticateUser(username1, password1)); // Login successful.
console.log(authenticateUser(username2, password2)); //Login failed. Please check your username and password.
*/
