let name = "Helin";
let age = 22;
let favoriteColor = "blue";

console.log(name, age, favoriteColor);

let a = 12;
let b = 10;
console.log("Sum", a + b);
console.log("Differene", a - b);
console.log("Product", a * b);
console.log("Qoutient", a / b);

let st = "helin";
console.log(st.length);
console.log(st.toUpperCase());
console.log(st + " Younis");
console.log("*************Challenge number 1*****************");

let celsius = 25;
let fehrenheit = celsius * (9 / 5) + 32;
let celsius2 = ((fehrenheit - 32) * 5) / 9;
console.log("Tempreture in Fehranite", fehrenheit);
console.log("Tmpreture in Celius", celsius2);

console.log("*************Challenge number 2*****************");

let aa = 5;
let bb = 6;
console.log("a =", aa);
console.log("b =", bb);
aa = aa + bb;
bb = aa - bb;
aa = aa - bb;
console.log("a =", aa);
console.log("b =", bb);

console.log("*************Challenge number 3*****************");

let word = ""; //prompt("Input a word to know if it is palindrome or nott.")
let wordreverse = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordreverse += word[i];
}
if (word == wordreverse) {
  console.log(true);
} else {
  console.log(false);
}

console.log("*************Challenge number 4 *****************");
let num1 = ""; //prompt("Input first number:");
let num2 = ""; //prompt("Input seconde number:");
let num3 = ""; //prompt("Input third number:");

if (num1 > num2) {
  if (num1 > num3) {
    console.log("Largest number is:", num1, "First number");
  } else {
    console.log("Largest number is:", num3, "Third number");
  }
} else {
  if (num2 > num3) {
    console.log("Largest number is:", num2, "Seconde number");
  } else {
    console.log("Largest number is:", num3, "Third number");
  }
}

console.log("*************Challenge number 5 *****************");
let numb = ""; //prompt("Input a number to reverse it:");
let reverseNumbb = "";

for (let i = numb.length - 1; i >= 0; i--) {
  reverseNumbb += numb[i];
}

console.log(reverseNumbb);

console.log("*************Challenge number 6 *****************");

for (let sNum = 1; sNum <= 50; sNum++) {
  if (sNum % 3 === 0 && sNum % 5 === 0) {
    console.log("FizzBuzz");
  } else if (sNum % 5 === 0) {
    console.log("Buzz");
  } else if (sNum % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(sNum);
  }
}

//console.log("*************Challenge number 7  Failed*****************");

// let a1=prompt("Input a");
// let b1=prompt("Input b");
// let c1=prompt("Input c");

// let d=Math.pow(b1,2)-(4*a1*c1);
// if(d>0){

// }else if(d==0){
// console.log("Roots =",d);

// }else{
//     console.log("Roots are Complex");

// }

//console.log("*************Challenge number 8 *****************");

// let amount = prompt("Input Amount: ");
// let number = amount;
// let num100 = 0;
// let num50 = 0;
// let num20 = 0;
// let num10 = 0;
// let num5 = 0;
// let num01 = 0;

// while (amount != 0) {
//   if (amount - 100 >= 0) {
//     amount -= 100;
//     num100 += 1;
//     continue;
//   }
//   if (amount - 50 >= 0) {
//     amount -= 50;
//     num50 += 1;
//     continue;
//   }
//    if (amount - 20 >= 0) {
//     amount -= 20;
//     num20 += 1;
//     continue;
//   }
//    if (amount - 10 >= 0) {
//     amount -= 10;
//     num10 += 1;
//     continue;
//   }
//    if (amount - 5 >= 0) {
//     amount -= 5;
//     num5 += 1;
//     continue;
//   }
//    if (amount - 1 >= 0) {
//     amount -= 1;
//     num01 += 1;
//     continue;
//   }
// }
// console.log(
//   "The " +
//     number +
//     " Contain " +
//     num100 +
//     " $100, " +
//     num50 +
//     " $50, " +
//     num20 +
//     " $20, " +
//     num10 +
//     " $10, " +
//     num5 +
//     " $5, " +
//     num01 +
//     " $1 "
// );

console.log("*************Challenge number 9 *****************");

let chek = -11; //prompt("Input Number");
let positive = null;
let odd = null;
let numi = 1;
let numm = 1;

if (chek > 0) {
  positive = "Positive";
} else {
  positive = "Negative";
}

if (chek % 2 == 0) {
  odd = "Even";
} else {
  odd = "Odd";
}

if (chek % 3 == 0 && chek % 5 == 0) {
  numi = 3;
  numm = 5;
} else if (chek % 3 == 0) {
  numi = 3;
} else if (chek % 5 == 0) {
  numm = 5;
}

console.log(positive + ", " + odd + ", Divided By " + numi + " and " + numm);

console.log("*************Challenge number 10 *****************");

let n = "5234";
let summ = 0;
for (let i = 0; i < n.length; i++) {
  summ += parseInt(n[i]);
}
console.log("Total Digits = " + n.length + ", Sum of Digits = " + summ);

console.log("*Day 2*");

let day = 6;
switch (day - 4) {
  case 1:
    console.log("Its Sunday");
    break;
  case 2:
    console.log("Its Monday");
    break;
  case 3:
    console.log("Its Tuesday");
    break;
  case 4:
    console.log("Its Wednsday");
    break;
  case 5:
    console.log("Its Therday");
    break;
  case 6:
    console.log("Its Friday");
    break;
  case 7:
    console.log("Its Saturday");
    break;
}

console.log("********************");

day > 2 ? (day += 1) : (day -= 1);

console.log("********************");

for (let i = 1; i <= 10; i++) {
  console.log(day + " * " + i + " = " + day * i);
}

console.log("********************");

let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);

console.log("********************");

let sumation = 0;
for (let i = 1; i <= 10; i++) {
  sumation += i;
}
console.log(sumation);

console.log("********************");

let grade = 78;

if (grade >= 90) {
  console.log("A");
} else if (grade <= 89 && grade >= 80) {
  console.log("B");
} else if (grade <= 79 && grade >= 70) {
  console.log("C");
} else if (grade <= 69 && grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

console.log("********************");

let wordd = "JavaScript";
let rev = "";
for (let i = wordd.length - 1; i >= 0; i--) {
  rev += wordd[i];
}
console.log(rev);

console.log("*Day 3*");

function FehreniteToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

console.log(FehreniteToCelsius(100) + " C");

console.log("********************");

function MaxNumber(numbers) {
  return Math.max(...numbers);
}
console.log("Maximam Number is: " + MaxNumber([1, 2, 3, 4, 5, 6, 7, 10]));

console.log("********************");

(function () {
  console.log(new Date());
})();

console.log("********Remove Dublicates from an Array************");
let numbers = [1, 2, 2, 2, 1, 10, 3, 4, 12, 5];

//First way
//const uniqArray= [...new Set()] new Set(numbers), this is the set not array. thats why we add [] to the code
// const uniqArray= Array.from(new Set(numbers)); this will do same thing as befor
//console.log(uniqArray);

//Seconde way
let uniqArr = numbers.filter((value, index) => {
  return numbers.indexOf(value) === index;
});

console.log(Array.prototype);

//Third way
function uniqElement(array) {
  let uniqArrr = [];
  array.forEach((value) => {
    if (!uniqArrr.includes(value)) {
      uniqArrr.push(value);
    }
  });
}

//Fourth way

function uniqElement(array) {
  return array.reduce((prev, current) => {
    if (!prev.includes(current)) {
      prev.push(current);
    }
    return prev;
  });
}

console.log("*******************");
function maxNumber(array) {
  return Math.max(...array);
}

console.log(maxNumber(numbers));

console.log("*******************");

function reverseArray(array) {
  let reversArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversArr.push(array[i]);
  }
  return reversArr;
}

console.log(reverseArray(numbers));

console.log("**********");

let a1 = ["d", "b", "c"];
let a2 = ["f", "e", "a"];

function merge(arr1, arr2) {
  return [...arr1, ...arr2].sort();
}
console.log(merge(a1, a2));

//************************ */
console.log("Day 4");
//1
function secondLaergestNumber(array) {
  array.sort((a, b) => b - a);
  return array[1];
}
console.log(secondLaergestNumber(numbers));

//2
function secondNumber(array) {
  let max = -Infinity,
    secondMax = -Infinity;

  for (let num of array) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}
console.log(secondNumber(numbers));

console.log("**********");

function mostFrequency(array) {
  let frequencyElement = 0;
  let most = 0;
  let mostValue;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        frequencyElement += 1;
      }
    }
    if (most < frequencyElement) {
      mostValue = array[i];
      most = frequencyElement;
    }
    frequencyElement = 0;
  }
  console.log(mostValue + " have most frequency in an array, " + most);
}

mostFrequency(numbers);

console.log("********************");

function sumRange(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 5));

console.log("**********");

function primeNumber(num) {
  let primeState = false;
  if (num % num === 0 && num % 2 != 0) {
    primeState = true;
  }
  return primeState;
}
console.log("Prime numbers state is " + primeNumber(7));

console.log("**********");

function factorialNumber(num) {
  let fact = 1;
  for (let i = num; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

console.log(factorialNumber(5));

console.log("**********");
//firt way
// function fibonacciSequence(num){
// let n1=0;
// let n2=1;
// let sum=0;

// for(let i=num; i>1; i--){
//   sum=n1+n2;
//   n1=n2;
//   n2=sum;
// }
// return sum;
// }

//second way

function fibonacciSequence(num) {
  let array = [0, 1];
  let sum = 0;
  for (let i = num; i > 1; i--) {
    sum = array[array.length - 2] + array[array.length - 1];
    array.push(sum);
  }
  return array[array.length - 1];
}
console.log(fibonacciSequence(8));

console.log("**********************");

function seconMax(array) {
  (max = -Infinity), (secondMax = -Infinity);
  for (let num of array) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }
  return secondMax === -Infinity ? null : secondMax;
}

console.log(seconMax(numbers));

console.log("**********************");

function rotateArray(array, k) {
  for (let i = 1; i <= k; i++) {
    array.unshift(array[array.length - 1]);
    array.pop();
  }
  return array;
}

console.log(rotateArray([1, 2, 3, 4, 5], 3));

console.log("**********************");

function mergeSortedUnique(array1, array2) {
  return [...new Set([...array1, ...array2].sort((a, b) => a - b))];
}

console.log(mergeSortedUnique([1, 3, 5, 7], [2, 3, 4, 6, 7]));
console.log("******************************************");
console.log("***Day 5***");

let person = {
  name: "Helin",
  age: 22,
  city: "Kirkuk",
  life: function () {
    console.log(this.name + " lives in " + this.city);
  },
};

console.log(person.age);
console.log(person["name"]);

person.country = "Iraq";
console.log(person.country);

delete person.age;
person.life();

for (let key in person) {
  console.log(person[key]);
}
console.log("*************");

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log("*************");

function Student1(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

let student1 = new Student1("Helin", 22, [78, 89, 67]);
console.log(student1.name);

console.log("*************");

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.name + " say's " + this.sound);
  }
}

let dog = new Animal("Dog", "Woof");
dog.makeSound();

console.log("****** Challenges *******");

function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
  this.avergGrade = function () {
    let sum = 0;
    for (let i = 0; i < this.grade.length; i++) {
      sum += grade[i];
    }
    console.log(sum);
  };
}

let student2 = new Student("Akam", 30, [60, 70, 90]);
student2.avergGrade();

console.log("*************");

function isEmpty(obj) {
  let isEm = false;
  if (Object.keys(obj).length === 0) {
    isEm = true;
  }
  return isEm;
}

console.log(isEmpty({ name: "Helin" }));

console.log("*************");

//1
// function mergeObjects(obj1, obj2){
//   let mergObj={};
// for(let key in obj1){
// mergObj[key]=obj1[key];
// }
// for(let key in obj2){
//   mergObj[key]=obj2[key];
//   }
//   return mergObj;
// }

//2
// function mergeObjects(obj1,obj2){
// return {...obj1,...obj2};
// }

//3
function mergeObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
}
console.log(mergeObjects({ a: 1, b: 3 }, { b: 5, h: 30 }));

console.log("*************");

class BankAccount {
  constructor(amount) {
    this.amount = amount;
  }
  deposit(depositAmount) {
    this.amount += depositAmount;
  }
  withdraw(withdrawAmount) {
    this.amount -= withdrawAmount;
  }
  getBalance() {
    return this.amount;
  }
}

let account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());

console.log("*** Day 6 ***");

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(name);
}

greet("Helin", console.log);

// Function That Returns Another Function

function multiplyBy(fuctor) {
  return function (number) {
    return number * fuctor;
  };
}

let double = multiplyBy(2);
console.log(double(5));

// setTimeout()

console.log("Start");

// setTimeout(()=>
// console.log("This will print After"), 2000
// );

console.log("End");

console.log("***************");

function myMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
let aaa = [1, 2, 3, 4, 5];
let power = myMap(aaa, (num) => num ** 2);
console.log(power);
console.log("***************");

function filterOdd(array, callback) {
  let evenNumber = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) evenNumber.push(array[i]);
  }
  return evenNumber;
}

let even = filterOdd(aaa, (num) => num % 2 === 0);
console.log(even);
console.log("***************");

function sumByReduce(array) {
  let sum = array.reduce((total, num) => total + num, 0);
  return sum;
}
console.log(sumByReduce(aaa));

console.log("***************");
function longestString(array) {
  let longestString = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
}
console.log(longestString(["apple", "banana", "pineapple", "kiwi"])); // Output: "pineapple"

console.log("Day 7");

function creatCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getcount: function () {
      return count;
    },
  };
}

let counn = creatCounter();

counn.increment();
counn.decrement();

console.log("***************");

function creatUser(name, age) {
  let user = { name: name, age: age };
  return {
    getInfo: function () {
      return user.name + " is " + user.age + " years old";
    },
  };
}

let user = creatUser("Helin", 22);
console.log(user.getInfo());
console.log("***************");

function createMultiplier(number) {
  return function (multi) {
    return number * multi;
  };
}

let muli = createMultiplier(3);
console.log(muli(4));

console.log("***************");

function memorizedFactorial() {
  let obj = {};
  return function (number) {
    if (obj[number]) {
      console.log("Number Stored already....");
      return obj[number];
    } else {
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
      console.log("The result is " + result);
      obj[number] = result;
      return result;
    }
  };
}

let factory = memorizedFactorial();
console.log(factory(5));
console.log(factory(5));

// Day 7th Challenges
console.log("********************");

function createBankAccount(initialBalance) {
  let balance = 0;

  return {
    deposit: function (number) {
      balance += number;
    },
    withdraw: function (number) {
      balance -= number;
    },
    checkBalance: function () {
      return balance;
    },
  };
}

let userAccount = createBankAccount();
userAccount.deposit(50);
userAccount.withdraw(30);
console.log(userAccount.checkBalance());

console.log("********************");

function rateLimited(callback, time) {
  let excute = true;
  return function () {
    if (excute) {
      callback();
      excute = false;
      setTimeout(() => (excute = true), 2000);
    }
  };
}

let limitedLog = rateLimited(() => console.log("Function Excuted..!"), 2000);
// limitedLog();
// limitedLog();
//setTimeout(limitedLog,3000);

console.log("********************");

function createIDGenerator(prefix) {
  let i = 1;
  return function () {
    return prefix + i++;
  };
}

let userID = createIDGenerator("user_");
console.log(userID());
console.log(userID());
console.log(userID());
console.log("********************");

function createCountDown(start, callback) {
  return function () {
    for (let i = start; i > 0; i--) {
      // setTimeout(() => {
      //   console.log(i);
      //   if (i === 1) {
      //     callback(); // Calls the callback when countdown reaches 0
      //   }
      // }, (start - i) * 1000); // Adjust delay so 5 starts at 0 sec, 4 at 1 sec, etc.
    }
  };
}

let countt = createCountDown(5, () => console.log("Time's Up!"));
countt();
console.log("********************");

function runOnce(callback) {
  let runOne = true;

  return function () {
    if (runOne) {
      callback();
      runOne = false;
    }
  };
}

let init = runOnce(() => console.log("This runs only once!"));
init();
init();

console.log("********************");

function memoizedFibonacci() {
  let numberCal = {};

  return function (number) {
    if (numberCal[number]) {
      console.log("Number Already Cashed");
    } else {
      let array = [0, 1];
      for (let i = number; i > 1; i--) {
        array.push(array[array.length - 1 ]+ array[array.length - 2]);
      }
      numberCal[number] = array[array.length - 1];
    }
    return numberCal[number];
  };
}

let fib = memoizedFibonacci();
console.log(fib(10));
console.log(fib(15));
console.log(fib(10));

console.log("********************");

function multiply(a){
return function(b){
  return function(c){
    return a*b*c;
  }
}
}

console.log(multiply(1)(2)(5));

console.log("********************");

function createEventListener() {
  let events = {}; // Store event names and their callbacks

  return {
    on: function (event, callback) {
      if (!events[event]) {
        events[event] = []; // Initialize if event does not exist
      }
      events[event].push(callback); // Store callback
    },

    emit: function (event) {
      if (events[event]) {
        events[event].forEach(callback => callback()); // Call all listeners
      }
    }
  };
}

// Usage Example:
let eventHandler = createEventListener();

eventHandler.on("click", () => console.log("Click event triggered!"));
eventHandler.on("click", () => console.log("Another click listener!"));

eventHandler.on("hover", () => console.log("Hover event triggered!"));

eventHandler.emit("click"); 
eventHandler.emit("hover"); 
