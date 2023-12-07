// Question #7 (Optional)
//กำหนดชุดข้อมูลคะแนนสอบของนักเรียนให้อยู่ในรูปแบบ Array ของ Object
const students = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 48 },
  { name: "Eve", score: 65 },
];

//เขียน Function calculateAverageScore ที่ Return คะแนนเฉลี่ยของนักเรียนทุกคนในชุดข้อมูลที่กำหนดให้
function calculateAverageScore(students) {
  if (students.length === 0) {
    return 0;
  }
  let totalScore = 0;
  for (const student of students) {
    totalScore += student.score;
  }
  const averageScore = totalScore / students.length;
  return averageScore;
}

// เขียน Function หาค่า คะะแนนสูงสุด ต่ำสุด Array

//หาค่าสูงสุด
function findHighestScorers(students) {
  if (students.length === 0) {
    return [];
  }
  let highestScore = students[0].score;
  let highestScorers = [students[0]];
  for (let i = 1; i < students.length; i++) {
    const currentScore = students[i].score;
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestScorers = [students[i]];
    } else if (currentScore === highestScore) {
      highestScorers.push(students[i]);
    }
  }
  return highestScorers;
}

// หาค่าต่ำสุด
function findLowestScorers(students) {
  if (students.length === 0) {
    return [];
  }
  let lowestScore = students[0].score;
  let lowestScorers = [students[0]];
  for (let i = 1; i < students.length; i++) {
    const currentScore = students[i].score;
    if (currentScore < lowestScore) {
      lowestScore = currentScore;
      lowestScorers = [students[i]];
    } else if (currentScore === lowestScore) {
      lowestScorers.push(students[i]);
    }
  }
  return lowestScorers;
}

// เขียน Function countPassedAndFailed ที่ Return ว่ามีจำนวนกี่คนที่ทำข้อสอบคะแนนผ่านมาตรฐาน และกี่คนที่คะแนนไม่ผ่านมาตรฐาน
function countPassedAndFailed(students) {
  if (students.length === 0) {
    return { passed: 0, failed: 0 };
  }
  let passedCount = 0;
  for (const student of students) {
    if (student.score >= 50) {
      passedCount++;
    }
  }
  const failedCount = students.length - passedCount;
  return { passed: passedCount, failed: failedCount };
}
//console
const averageScore = calculateAverageScore(students);
const highestScorers = findHighestScorers(students);
const lowestScorers = findLowestScorers(students);
const passedAndFailedCount = countPassedAndFailed(students);

console.log(`Average Score : ${averageScore}`);
console.log(highestScorers);
console.log(lowestScorers);
console.log(passedAndFailedCount);
