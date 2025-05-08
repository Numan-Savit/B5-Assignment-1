

function formatString(input: string, toUpper?: boolean): string {
    
    let result : string;

    if(toUpper === false){
        result = input.toLowerCase();
    }
    else{
        result = input.toUpperCase();
    }

    return result;
}






function filterByRating(items: { title: string; rating: number }[]) : { title: string; rating: number }[] {

    const result: { title: string; rating: number }[] = [];

    for (const item of items) {
      if (item.rating >= 4.5) {
        result.push(item);
      }
    }

    return result;

  }

  

  


function concatenateArrays<T>(...arrays: T[][]): T[] {

    let result: T[] = [];

    for (let array of arrays) {
      result = result.concat(array);
    }

    return result;

  }

  





class Vehicle {

  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string{
    return `Make: ${this.make}, Year: ${this.year}`
  }

}


class Car extends Vehicle {

  private model: string;

 constructor(make: string, year: number, model: string){

   super(make, year);
   this.model = model;

 }

 getModel(): string{
   return `Model: ${this.model}`
 }

}







function processValue(value: string | number): number{

  if(typeof value === "string"){
    return value.length;
  }
  else{
    return value * 2;
  }

}







interface Product{
   name: string;
   price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{

  if(products.length === 0){
    return null;
  }

  let mostExpensive = products[0];
  
  for(let i = 1; i < products.length; i++){
    if(products[i].price > mostExpensive.price){
      mostExpensive = products[i];
    }
  }

  return mostExpensive;
}






enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string{
  if(day === Day.Saturday || day === Day.Sunday){
    return "Weekend";
  }
  else{
    return "Weekday";
  }
}






async function squareAsync(n: number): Promise<number> {

  return new Promise((resolve, reject)=>{
    if(n < 0){
      reject(new Error("Number must be positive"));
    }
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });

}


