//////////////////////////ARRAYS

//Indexes Start with zero
const names = ["red", "green", "blue", 5666];

//Arrays are iterable
for (const el of names) {
  // red green blue 5666
  console.log(el);
}

//Total number of index
for (const el in names) {
  console.log(el);                  // 0 1 2 3
}

//////////////////////METHOD OF ARRAYS

//Array
const items = [
  { name: "john", age: 20 },
  { name: "mark", age: 24 },
  { name: "joe", age: 30 },
  { name: "smith", age: 35 },
  { name: "jonas", age: 60 },
  { name: "sara", age: 45 },
];

//PUSH METHOD
//(it is used to add something at the "last" of array)

items.push({ name: "zumar" });
console.log(items);

//POP METHOD
//(it is used to remove something from the "last" of array)

items.pop();
console.log(items);

//FILTER METHOD
//(it is used to return filter element/objects.)

const filteredItems = items.filter((item) => {
  return item.age <= 30;
});

console.log(filteredItems); // filtered array

//MAP METHOD
//(map func allocates memory and stores return values.)

const mapItems = items.map((item) => {
  return item.name;
});

console.log(mapItems); // [ 'john', 'mark', 'joe', 'smith', 'jonas', 'sara' ]

//FIND METHOD
//(it is used to find the specific value.)

const findItem = items.find((item) => {
  return item.name === "joe";
});

console.log(findItem); // { name: 'joe', age: 30 }

//forEach METHOD
//(forEach METHOD throws away return values.)

items.forEach((item) => {
  console.log(item.name); // john mark joe smith jonas sara
});

//SOME METHOD
//(it checks if any of the elements in an array return true the entire array is true.)

const ageIsLessThan30 = items.some((item) => {
  return item.age < 30;
});

console.log(ageIsLessThan30); //ture

//EVERY METHOD
//(it checks if all the elements of the array falls under the condition then it return true otherwise it returns false.)

const ageIsGreaterThan20 = items.every((item) => {
  return item.age >= 18;
});

console.log(ageIsGreaterThan20); //true

//REDUCE METHOD
//(it is used to add all age values in array)

const sumOfAge = items.reduce((currAge, item) => {
  return item.age + currAge;
}, 0);

console.log(sumOfAge);

//reduceRight METHOD
//(reduces the array to a single value ( right-to-left / reverse ))

const sumOfAgeReverse = items.reduceRight((currAge, item) => {
  return item.name + currAge;
}, 0);

console.log(sumOfAgeReverse);

//INCLUDE METHOD
//(it checks whether an array contains a specified element.)

const numbers = [1, 2, 3, 4, 5];

const findVal = numbers.includes(4);
console.log(findVal);       //ture

//SPLICE METHOD
//(it is used to delete the values )

const fruits = ["banana", "apple", "mango", "cherry", "strawberry"];

fruits.splice(1, 3); //delete 3 values starting from index 1
console.log(fruits);        // [ 'banana', 'strawberry' ]

//CONCATENATE METHOD
//(used to combine to arrays)

const students = ["sara", "mayra", "amna"];
const positions = [1, 2, 3];

const students_positions = students.concat(positions);
console.log(students_positions);             // [ 'sara', 'mayra', 'amna', 1, 2, 3 ]

//FILL METHOD
//(it fills all the values that is given in the fill method)

const colors = ["red", "green", "black"];
const fillColor = colors.fill("blue");
console.log(fillColor);                 // [ 'blue', 'blue', 'blue' ]

//FROM METHOD
//(it is used to create an array of single_charachters)

var myArr = Array.from("zumarsaeed");
console.log(myArr);                //['z', 'u', 'm', 'a','r', 's', 'a', 'e','e', 'd']

//findIndex METHOD
//(Returns the index of the first element in an array that pass a test )

const marks = [45, 50, 38, 56, 78];

function findIndexOfMarks(mark) {
  //function findIndexOfMarks
  return mark > 50;
}

const index = marks.findIndex(findIndexOfMarks);
console.log(index);                // 3 (index)

//IndexOf METHOD
//(search and return the specific value's position.)

const animals = ["tiger", "lion", "zebra", "cow"];
const indexOfAnimal = animals.indexOf("cow");      // 3 (index)
console.log(indexOfAnimal);

//isArray METHOD
//(checks if the given thing is array or not)

const checkIsArray = Array.isArray(animals);
console.log(checkIsArray);                 // true

//LENGTH METHOD
//(check the length of array.)

console.log(animals.length);             // 4

//LastIndexOF METHOD
//(gives the last position of value)

const vegetables = ["peas", "carrots", "garlic", "carrots", "carrots", "peas"];
const findLastIndexOfVeg = vegetables.lastIndexOf("peas");
console.log(findLastIndexOfVeg);             // 5

//copyWithIn METHOD
//(it copy values within array, length of the array remains the same )

const places = [
  "islamabad_0",
  "karachi_1",
  "lahore_2",
  "rawalpindi_3",
  "gujranwala_4",
  "faislabad_5",
  "multan_6",
];
const copiedArr = places.copyWithin(1, 3, 5); //copyWithin(targetIndex, start, end)

console.log(copiedArr); // [ 'islamabad_0','rawalpindi_3','gujranwala_4','rawalpindi_3','gujranwala_4','faislabad_5','multan_6']

//entries() METHOD
//(return key value pairs)

const resultEntries = places.entries();

for (const el of resultEntries) {
  console.log(el);
}

//RESULT : Entries()
// [ 0, 'islamabad_0' ]
// [ 1, 'rawalpindi_3' ]
// [ 2, 'gujranwala_4' ]
// [ 3, 'rawalpindi_3' ]
// [ 4, 'gujranwala_4' ]
// [ 5, 'faislabad_5' ]
// [ 6, 'multan_6' ]


//Join METHOD
//(returns array as a string)

const string = places.join();
console.log(string);               // islamabad_0,rawalpindi_3,gujranwala_4,rawalpindi_3,gujranwala_4,faislabad_5,multan_6

//ValueOF METHOD (return the whole array)

const makeupBrand = ["mac", "huda", "nude", "zero", "loreal"];

const valueOFResult = makeupBrand.valueOf();     
console.log(valueOFResult);                   // ['mac', 'huda', 'nude', 'zero', 'loreal']

//Shift METHOD
//(remove the first item of array)

const removeItem = makeupBrand.shift();
console.log(removeItem);                  //mac 

//Unshift METHOD
//(add the no.of items in array)

const addItems = makeupBrand.unshift("mabelline", "dior");

for (const el of makeupBrand) {
  console.log(el);                     // mabelline dior huda nude zero loreal
}

//Reverse METHOD
//(it reverse th whole array)

const numericalNumbers = [1, 3, 4, 2, 5];
const reverseNum = numericalNumbers.reverse();
console.log(reverseNum);                        // [ 5, 4, 3, 2, 1 ]

//toString METHOD
//(returns a string with all the array values, separated by commas.)

const words = ["1", "bee", "no"];
const stringWords = words.toString();                // 1,bee,no
console.log(stringWords);

//sort METHOD
//(sorts in ascending and descending order / in alphabetical order)

const sortNum = numericalNumbers.sort();               //[ 1, 2, 3, 4, 5 ]
console.log(sortNum);

const sortMakeupBrands = makeupBrand.sort();          //[ 'dior', 'huda', 'loreal', 'mabelline', 'nude', 'zero' ]
console.log(sortMakeupBrands);

//Slice METHOD
//(Selects a part of an array, and returns the new array.)

const fruitItems = ["apple", "lemon", "orange", "grapes", "mango"];

const citrusFruit = fruitItems.slice(1, 4);         // [ 'lemon', 'orange', 'grapes' ]
console.log(citrusFruit);

//KEYS METHOD
//(return the keys only)

// for objects
const obj = {
  name: "zumar",
  age: 20,
  semester: 4,
  subject: "JS",
  department: "CS",
};

const getObjKeys = Object.keys(obj);          // [ 'name', 'age', 'semester', 'subject', 'department' ]
console.log(getObjKeys);

//for Arrays

const arr = ["zumar", 20, "CS", "JS"];

const getArrKeys = arr.keys();                // 0 1 2 3
for (const el of getArrKeys) {
  console.log(el);
}
