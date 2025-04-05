//build function that will take type as argument from the function and check that type and return it's contents
function AnimalFactory(type) {
  if (type === "dog") {
    return {
      type: "Dog",
      sound: () => console.log("Woof 🐶"),
    };
  } else if (type === "cat") {
    return {
      type: "Cat",
      sound: () => console.log("Meow 🐱"),
    };
  } else if (type === "hen") {
    return {
      type: "hen",
      sound: () => console.log("Kokoliko "),
    };
  } else {
    return {
      type: "Unknown",
      sound: () => console.log("... 🐾"),
    };
  }
}

// Usage
const myPet = AnimalFactory("dog");
const myPet2 = AnimalFactory("cat");
const myPet3 = AnimalFactory("hen");
myPet.sound(); // Output: Woof 🐶
myPet2.sound();
myPet3.sound();
//You don't need to know how the animal is built — just give the type!