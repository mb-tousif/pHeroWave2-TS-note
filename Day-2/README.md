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
