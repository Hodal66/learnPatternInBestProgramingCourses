function foodFuctoryFunction(fullName, typeOfFood) {
  if (typeOfFood === "rice") {
    return {
      typeOfFood: "Rice",
      myFoodProduct: () =>
        console.log(
          "Hello again " +fullName +" This is Your Product Food: " +typeOfFood
        ),
    };
  } else if (typeOfFood === "kawunga") {
    return {
      typeOfFood: "Kawunga",
      myFoodProduct: () =>
        console.log(
          "Hello again " + fullName + " This is Your Product Food: " +typeOfFood
        ),
    };
  } else {
    return {
      typeOfFood: "unKnown Food type",
      myFoodProduct: () =>
        console.log(
          "Hello again " +fullName +"Your Product Food is " +typeOfFood +" and is unKnown Food type in this factory"
        ),
    };
  }
}

const newFoodProductRequest_1 = foodFuctoryFunction("Muheto Hodal", "Umugati");
newFoodProductRequest_1.myFoodProduct();

const newFoodProductRequest_2 = foodFuctoryFunction("Umwiza Egeny", "rice");
newFoodProductRequest_2.myFoodProduct();
