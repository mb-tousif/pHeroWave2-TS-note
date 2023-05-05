# TypeScript Advance Concept

### What is Type Assertion?

<p>Type assertion is a Typescript technique that tells the compiler the variable type. Though type assertion doesn’t recreate code, typecasting does. You can tell the compiler not to infer the type of a value by using type assertion. To do type assertion, we can either use the “<>” operator or the “as” operator. Typecasting provides runtime support, whereas type assertion has no impact on runtime.</p>

### Example:

```
  let myGF: any;
  let myGF = "****" // This is where we need to use type assertion
  (myGF as string).length; // <string>myGF.length;
  // Here we can use the methods of string, as I asserted the type manually.

  interface IInfo {
   name: string,
   age: number
  }

  let myGfInfo = {} as IInfo // let myGfInfo = <IInfo>
  myGfInfo.name = "💀💀💀";
  myGfInfo.age = 20;

```

### Type Alias vs Interface
  * A type alias is a name for any type, you can actually use a type alias to give a name to any type at all, not just an object type. An interface may only be used to declare the shapes of objects, not rename primitives. Being concerned only with the structure and capabilities of types is why we call TypeScript a structurally typed type system.
  * One major difference between type aliases vs interfaces are that interfaces are open and type aliases are closed. This means you can extend an interface by declaring it multiple times, and will be treated as a single interface (with members of all declarations being merged). In the other case a type cannot be changed outside of its declaration.
  * They both support extending other interfaces and types. Type aliases do this via intersection types, while interfaces have a keyword.
  * Type aliases and interfaces can be combined into one type using unions or intersections, but cannot be combined into an interface.

### What is Generic in Typescript?
<p>Generic type is a way of defining a type or function that can work with multiple types without specifying the specific type upfront. It is defined using a type parameter represented by a placeholder name enclosed in the angle bracket syntax (<T>) to declare a type parameter. By using generics, you can write more flexible and reusable code that works with a variety of types, while maintaining type safety.</p>

### Example:
```
  function arrayLength<T>(arr: T[]): number {
    return arr.length;
  }
    // Generics in interface
  interface IDeveloper<T, U> {
    name: string;
    house: T;
    car: U;
  }

  const webDeveloper: IDeveloper<string, boolean> = {
    name: "Mark FB",
    house: "H-121, NY",
    car: false,
  };

  // Default value
  interface IFullStackDeveloper<T, U = null> {
    name: string;
    house: T;
    bike?: U;
  }

  interface IStatus {
    skill: string;
    salary: number;
  }

  // bike is optional
  const mernDeveloper: IFullStackDeveloper<IStatus, boolean> = {
    name: "Tousif",
    house: { skill: "Typescript", salary: 5090000 },
  };
```

### What is Generic Constraints in Typescript?
<p>Generic constraints in TypeScript allow you to restrict the types that can be used as type arguments in a generic type or function. By using a type constraint, you can specify the required properties, methods, interfaces, or classes that a type argument must satisfy in order to be used with the generic type or function. This helps ensure that your code is more robust and type-safe, and can prevent runtime errors caused by invalid types.</p>

### Example:
```
    function add<T extends number>(a: T, b: T): T {
      return a + b;
    }

    const result2 = add(3, 4); // returns 7
    const result3 = add(1, '2'); // error: Argument of type '"2"' is not assignable to    parameter of type 'number'

    // Another Example
    type MandatoryTypes = { name: string; age: number; salary: number };
    interface MandatoryInterface {
      name: string;
      age: number;
      salary: number;
    }

    const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
      const crush = "kate Winslet";
      const newData = { ...myInfo, crush };
      return newData;
    };

    type MyInFoType = {
      name: string;
      age: number;
      salary: number;
      other1: boolean;
      other2: null;
    };
    const myInfo = {
      name: "Persian",
      age: 100,
      salary: 100000000,
      other1: false,
      other2: null,
    };
    const result = addMeInMyCrushMind(myInfo);

```
#### Generic Constraints Using Key Of
<p><b>keyof</b> is an operator in TypeScript that returns a union type of all the keys of a given object type. When used in the context of generic constraints, keyof can be used to constrain the type argument to only accept keys that exist on a specific object type.</p>

#### Example:
```
  interface Person {
    name: string;
    age: number;
  }

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const person: Person = { name: "Alice", age: 30 };
  const name: string = getProperty(person, "name"); // returns "Alice"
  const age: number = getProperty(person, "age"); // returns 30
  const job = getProperty(person, "job"); 
  // error: Argument of type '"job"' is not assignable to parameter of type '"name" | "age"'
```
#### Explanation
<p>In the getProperty function, we have two type parameters: T and K. T is the type of the object that we want to get a property from, and K is the type of the property key that we want to retrieve.</p>
<p>By using the <b>keyof</b> operator with T, we are telling TypeScript that K must be a key that exists on the T object. This ensures that the function will only accept valid property keys for the given object type.</p>
<p>In the example, getProperty takes an object of type Person, which has two properties: name and age. We then call getProperty twice with valid keys, which returns the corresponding values from the person object. When we try to call getProperty with an invalid key, TypeScript raises an error, since job is not a valid key on the Person object.</p>

### Asynchronous programming in Typescript
<p>TypeScript has support for asynchronous programming through the use of promises, async/await syntax, and other related features.</p>

### Example:
```
// Mocking

// Json Place Holder

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
};

const getTodoData = async (): Promise<void> => {
  const result = await getTodo();
  console.log(result);
};

getTodoData();

const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data!");
    }
  });
};

const makePromiseBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data!");
    }
  });
};

interface DataType {
  data: string;
}

const makePromiseObject = (): Promise<DataType> => {
  return new Promise<DataType>((resolve, reject) => {
    const data: DataType = { data: "Data is fetched" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to feted data!");
    }
  });
};

const getPromiseDataObject = async (): Promise<DataType> => {
  const data = await makePromiseObject();
  return data;
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
  const data = await makePromiseBoolean();
  return data;
};

// Promise<string> Promise<boolean> Promise<objecct>

```

### Conditional Types in Typescript
<p>Conditional Types is a feature in TypeScript that allows you to create types that depend on other types. It provides a way to define a type based on a condition that is evaluated at compile-time. In conditional types, the type that is created depends on a condition that is expressed using the extends keyword.</p>

### Example:
```
  type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

    type Sheikh = {
  wife1: string;
  wife2: string;
};

  type A = keyof Sheikh; // 'wife1' | 'wife2'
  // 'wife3' extends 'wife1' | 'wife2
  type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;
  type CheckWife2 = CheckProperty<Sheikh, "girlfriend">;
  // check korbe ei Sheikh Type a wife3 ase kina ? true : false
  //Matha Kharap Example
  type Bandhubi = "Monika" | "Rachel" | "Pheobe";
  type RemoveBadhubi<T, K> = T extends K ? never : T;
  type CurrentBandhubi = RemoveBadhubi<Bandhubi, "Rachel">;
```

