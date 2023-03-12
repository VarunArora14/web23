let lname: string = "Arora";

const x: number = 2;


console.log("Hello World", x);

let upperName: string = lname.toUpperCase();
console.log(upperName);

let age: number;

let strNum: string = "10";
let p = parseInt(strNum);
// console.log(p); // NAN if not a number


let newTuple: [string, number, string];
let empList: number[];

empList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// empList.forEach(
//   (ele, idx, list) => {
//     console.log(list[idx]);

//   }
// )

const res = empList.filter((ele) => {
  return ele % 3 == 0; // 3 divisible numbers
})
console.log(res);

