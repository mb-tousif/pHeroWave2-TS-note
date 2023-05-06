# Object Oriented Programming (OOP) in TypeScript

``
    Prerequisites: OOP
``

## Object Oriented Programming (OOP)
<p>OOP stands for Object-Oriented Programming, which is a programming paradigm based on the concept of objects. Objects are instances of classes, which are templates or blueprints for creating objects with specific properties and methods.</p>
<p>OOP is a way of organizing and structuring code by modeling real-world entities or concepts as objects, and then using those objects to build complex software systems. It provides a way to write modular and reusable code, making it easier to maintain and extend software over time.</p>

#### Some key concepts of OOP include:
- <b>Encapsulation: <b>The idea of bundling data and methods that operate on that data within one unit, preventing access from outside that unit. 
- <b>Inheritance: <b>Objects can inherit properties and methods from other objects. In OOP, inheritance allows developers to create new classes based on existing ones, reducing the amount of redundant code.
- <b>Polymorphism: <b>The ability to use objects of different types in the same way, providing a more flexible and modular approach to programming.
- <b>Abstraction: <b>The idea of reducing complexity by hiding unnecessary details from the user.

<p>Overall, OOP provides a powerful way of modeling complex systems, allowing developers to write more modular and reusable code, and making it easier to maintain and extend software over time.</p>

### Some key concepts of OOP in TypeScript include:

- <b>Classes: </b>Classes are blueprints for creating objects with specific properties and methods. They allow developers to create reusable code and define the structure of objects.
- <b>Encapsulation: </b>TypeScript provides access modifiers such as public, private, and protected, which help enforce encapsulation and prevent unwanted access to object properties and methods.
- <b>Inheritance: </b>TypeScript allows for inheritance, where a child class can inherit properties and methods from a parent class, reducing the amount of redundant code.
- <b>Polymorphism: </b>TypeScript allows for polymorphism, where objects of different types can be used interchangeably, providing a more flexible and modular approach to programming.
- <b>Interfaces: </b>TypeScript provides interfaces, which define a contract for objects to follow, helping to ensure that objects conform to a certain structure or behavior.
<p>Overall, OOP in TypeScript allows for more structured and modular code, making it easier to build and maintain complex applications. The static typing system also provides additional safety checks and catches errors at compile time, rather than at runtime.</p>

## Type Guards in TypeScript
<p>Type guards are conditional statements that determine the type of a variable at runtime, allowing the developer to perform different operations based on that type. A type guard is usually expressed as a boolean expression that checks whether a variable is of a certain type.</p>

### Example:
```
    function isString(value: string | number): value is string {
      return typeof value === "string";
    }

    let myVar: string | number = "hello world";

    if (isString(myVar)) {
      // myVar is now narrowed to type string
      console.log(myVar.toUpperCase()); // "HELLO WORLD"
    } else {
      // myVar is now narrowed to type number
      console.log(myVar.toFixed(2)); // TypeError: myVar.toFixed is not a function
    }
```
<p>In this example, we have a variable myVar that can be of type string or number. we define a function isString that takes a variable value of type string | number and returns a boolean value indicating whether value is of type string. We then use this function as a type guard to narrow the type of myVar to either string or number.</p>

## Type Narrowing in TypeScript
<p>Type narrowing is the process of reducing the type of a variable based on information available at compile-time or runtime. Type narrowing is often used in conjunction with type guards to perform different operations on a variable based on its type.</p>

### Example:
```
    let myVar: string | number = "hello world";

    if (typeof myVar === "string") {
    // myVar is now narrowed to type string
    console.log(myVar.toUpperCase()); // "HELLO WORLD"
    } else {
    // myVar is now narrowed to type number
    console.log(myVar.toFixed(2)); // TypeError: myVar.toFixed is not a function
    }
```
<p>In this example, we have a variable myVar that can be of type string or number. we use the typeof operator to determine the type of myVar at runtime. If myVar is of type string, we call the toUpperCase method on it. If it is of type number, we call the toFixed method on it. Type narrowing is useful for catching errors at compile-time rather than at runtime, and for making code more readable and maintainable.</p>

## Access Modifiers in TypeScript
<p>In TypeScript, there are three access modifiers that can be used to control the visibility of class members (properties and methods) within a class hierarchy. These access modifiers are:</p>
- <b>Public: </b>Public members can be accessed from anywhere, both inside and outside of the class hierarchy.
- <b>Private: </b>Private members can only be accessed within the class where they are declared. They are not accessible from outside of the class hierarchy.
- <b>Protected: </b>Protected members can be accessed within the class where they are declared and any subclasses that inherit from the class. They are not accessible from outside of the class hierarchy.
<p>To specify an access modifier for a class member, you can prefix the member with the appropriate keyword (public, private, or protected) followed by a space.</p>

### Example:
```
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    getBalance() {
      console.log(`My Current Balance is : ${this._balance}`);
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  class StudentAccount extends BankAccount{
    test(){
      this.
    }
  }

  const myAccount = new BankAccount(444, "Persian", 20);
  myAccount.addDeposit(20);
  myAccount.getBalance();

  type Add = (a: number, b: number) => number;

  const add: Add = (a, b) => {
    return a + b;
  };

  // const sum = add(2, 3); // 5

  class Calculator {
    add(a: number, b: number): number {
      return a + b;
    }
  }

  const calculator = new Calculator();
  const sum = calculator.add(2, 3); // 5
```
<p>In this example, publicProperty is a public property that can be accessed from anywhere, privateProperty is a private property that can only be accessed within the Example class, and protectedProperty is a protected property that can be accessed within the Example class and any subclasses that inherit from it.</p>

## Getters and Setters in TypeScript
<p>In TypeScript, getters and setters are a way to provide controlled access to class properties. They allow you to define methods that get or set the values of class properties, while also enforcing any necessary logic or validation rules.</p>
<p>Getters and setters are defined using the get and set keywords, respectively, followed by the name of the property.</p>

### Example:
```
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    private getTestBalance(): number{
       return this._balance
    }

    get Test():number{
      return this.getTestBalance()
    }
    //getter
    get balance(): number {
      return this._balance;
    }
    // getBalance(): number {
    //   return this._balance;
    // }

    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }
    // addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }
  }

  class StudentAccount extends BankAccount {
    test() {
       this.
    }
  }

  const myAccount = new BankAccount(444, "Persian", 30);
  // myAccount.addDeposit(20);
  // myAccount.getBalance();
  // myAccount.getBalance();
  console.log(myAccount.balance);
  myAccount.deposit = 30;
  console.log(myAccount.balance);
```
<p></p>