// 📌 What it does:
// The Prototype Pattern allows you to clone existing objects rather than building new ones from scratch.

// 👨‍🔧 Real-World Analogy:
// Think of using a template to create new documents — you copy and change the parts you want.

const carPrototype = {
  drive: function () {
    console.log(`${this.brand} is driving 🚗`);
  },
};

// const checkTwoNumbersPrototype = {
//   makeAction: function (firstNumber, secondNumber) {
//     if (this.sign == "+") {
//       console.log(
//         "The Sum of Those Numbers is" +
//           firstNumber +
//           " " +
//           this.sign +
//           " " +
//           secondNumber +
//           " = " +
//           firstNumber +
//           secondNumber
//       );
//     } else if (this.sign == "-") {
//       console.log(
//         "The SubStruction of Those Numbers is" +
//           firstNumber +
//           " " +
//           this.sign +
//           " " +
//           secondNumber +
//           " = " +
//           firstNumber -
//           secondNumber
//       );
//     } else if (this.sign == "*") {
//       console.log(
//         "The Multiplication of Those Numbers is" +
//           firstNumber +
//           +" " +
//           this.sign +
//           " " +
//           secondNumber +
//           " = " +
//           firstNumber * secondNumber
//       );
//     } else {
//       console.log("Please Check your Sign either +,-,*");
//     }
//   },
// };

function createCar(brand) {
  const car = Object.create(carPrototype);
  car.brand = brand;
  return car;
}

// function checkSign(sign) {
//   const agatebo = Object.create(checkTwoNumbersPrototype);
//   agatebo.sign = sign;
//   return agatebo;
// }
// Usage



//How to use it
const car1 = createCar("Toyota");
car1.drive(); // Output: Toyota is driving 🚗

const car2 = createCar("Tesla");
car2.drive(); // Output: Tesla is driving 🚗
const car3 = createCar("Move");
car3.drive();

// 👉 Object.create() helps clone the prototype object.