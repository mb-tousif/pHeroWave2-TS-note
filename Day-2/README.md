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