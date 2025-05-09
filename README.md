

1.What are some differences between interfaces and types in TypeScript?


TypeScript is becoming increasingly popular in web development today. It is a powerful type system built on top of JavaScript that helps developers make their code more specific and secure. Two important concepts in TypeScript are interface and type, which we use to define custom data types.

However, many new developers do not understand when to use interface and when to use type. In this blog, we will see the difference, usage and suitable examples between them in a very simple way.


Although the methods for declaring interfaces and types in TypeScript are different, the work is the same.

1.interface

interface Person {
  name: string;
  age: number;
}

Using extends on an interface allows you to easily take properties from multiple interfaces.


2.type

type Person = {
  name: string;
  age: number;
}

To inherit from a type, you need to use intersection (&).

The result is the same, but the syntax is different.


To remember it simply: 

if you only need an object structure, use interface. If you need a complex or advanced type structure (union, tuple, conditional), then use type.


________________________________________________________________________________________________________________________


2.Provide an example of using union and intersection types in TypeScript.


Union Type means — a variable or property can be any one of multiple types.

//-syntax

type MyType = string | number;

//-Example

function printId(id: string | number) {
  console.log("Your ID is: " + id);
}

printId(101);         
printId("A102");  

Here id can be string or number — either one.


Intersection Type means — one type must have all the properties of multiple types.

//-syntax

type A = { name: string };
type B = { age: number };

type C = A & B;


type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const user: Person = {
  name: "Abdullah",
  age: 25,
};


Here the Person type combines all the properties of the Name and Age types.

When to use which?

 If a variable can be any one of multiple types ➤ Union 
 If you need to combine multiple types to create a larger type ➤ Intersection
 

 Conclusion :

  Union and Intersection types in TypeScript give us a more flexible and powerful typing mechanism. If we understand the data structure and use these types properly, our code becomes much more readable and bug-free.

