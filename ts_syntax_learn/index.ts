interface t1 {
  name: string;
  color: string;
}

// ? means optional

class User {
  name?: string;
  age?: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// object
const user = new User("saurav", 10);
type isMarried = true | false;

function printUser(user: User): void {
  console.log(`name: ${user.name}, age: ${user.age}`);
}

function printUser2({ name = "hola", age = 5 }: User): void {
  const res = name + ", " + age;
  console.log(res);
}

printUser2({}); // empty object as both values optional

const names: string[] = ["vaarun", "rohan", "yuvraj", "varun"];

// const ans = names.find((ele) => ele == "varun");
const ans = names.findIndex((ele) => ele == "varun");

// names.forEach((ele) => console.log(ele.toUpperCase()));

// console.log(ans);

class Employee {
  uname: string;
  id: number;
  admin: boolean;

  constructor(_id: number, _uname: string, _admin: boolean) {
    this.id = _id;
    this.admin = _admin;
    this.uname = _uname;
  }
  becomeAdmin() {
    this.admin = true;
  }
}

const emp = new Employee(1, "adani", false);
console.log(emp);
emp.becomeAdmin();
console.log(emp);
