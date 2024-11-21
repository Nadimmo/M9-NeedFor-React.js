const obj = {
    property1: {
      property2: {
        property3: "value"
      }
    }
  };
  
  // Without optional chaining
  const value1 = obj.property1 && obj.property1.property2 && obj.property1.property2.property3;
  console.log(value1); // Output: "value"
  
  // With optional chaining
  const value2 = obj.property1?.property2?.property3;
  console.log(value2); // Output: "value"
  
  // Accessing a non-existent property
  const value3 = obj.property1?.property2?.nonExistentProperty;
  console.log(value3); // Output: undefined
  