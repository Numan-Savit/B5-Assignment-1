"use strict";
// problem----------------------1
// function formatString(input: string, toUpper?: boolean): string {
//     let result : string;
//     if(toUpper === false){
//         result = input.toLowerCase();
//     }
//     else{
//         result = input.toUpperCase();
//     }
//     return result;
// }
// ____________________________________________________________________________________________________________________________
// problem---------------------2
// function filterByRating(items: { title: string; rating: number }[]) : { title: string; rating: number }[] {
//     const result: { title: string; rating: number }[] = [];
//     for (const item of items) {
//       if (item.rating >= 4.5) {
//         result.push(item);
//       }
//     }
//     return result;
//   }
//   const books = [
//     { title: "Book A", rating: 4.5 }, 
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 },
//   ];
// _______________________________________________________________________________________________________________________________
// problem_________________________3
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     let result: T[] = [];
//     for (let array of arrays) {
//       result = result.concat(array);
//     }
//     return result;
//   }
// _______________________________________________________________________________________________________________________________
// problem_________________________4
// class Vehicle {
//   private make: string;
//   private year: number;
//   constructor(make: string, year: number) {
//     this.make = make;
//     this.year = year;
//   }
//   getInfo(): string{
//     return `Make: ${this.make}, Year: ${this.year}`
//   }
// }
// class Car extends Vehicle {
//   private model: string;
//  constructor(make: string, year: number, model: string){
//    super(make, year);
//    this.model = model;
//  }
//  getModel(): string{
//    return `Model: ${this.model}`
//  }
// }
// _____________________________________________________________________________________________________________________________
// problem_________________________5
// function processValue(value: string | number): number{
//   if(typeof value === "string"){
//     return value.length;
//   }
//   else{
//     return value * 2;
//   }
// }
// ___________________________________________________________________________________________________________
// problem_________________________6
// interface Product{
//    name: string;
//    price: number;
// }
// function getMostExpensiveProduct(products: Product[]): Product | null{
//   if(products.length === 0){
//     return null;
//   }
//   let mostExpensive = products[0];
//   for(let i = 1; i < products.length; i++){
//     if(products[i].price > mostExpensive.price){
//       mostExpensive = products[i];
//     }
//   }
//   return mostExpensive;
// }
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 }
// ];
// _____________________________________________________________________________________________________________________________
// problem_________________________7
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    else {
        return "Weekday";
    }
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
// _______________________________________________________________________________________________________________________________
// problem_________________________8
// async function squareAsync(n: number): Promise<number> {
//   return new Promise((resolve, reject)=>{
//     if(n < 0){
//       reject(new Error("Number must be positive"));
//     }
//     setTimeout(() => {
//       resolve(n * n);
//     }, 1000);
//   });
// }
// squareAsync(4).then(console.log);        // Output after 1s: 16
