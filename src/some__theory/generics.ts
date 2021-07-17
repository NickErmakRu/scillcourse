const myArray: MyArray<number> = [1, 2, 3];

// дженерики - как аргументы у функции 
interface MyArray<T> {
  [n: number]: T

  map<U>(fn: (elem: T, index: number, array: MyArray<T>) => U): MyArray<U>
}
let variable = myArray[1];



function identity<T>(arg: T): T {
  return arg
}
let result = identity(12);



function getLength<T extends Array<any>>(arr: T): number {
  return arr.length
}
getLength([1, 2, 3]);



interface IValueWithType<T> {
  type: string;
  value: T;
}
function withType<U>(arg: U): IValueWithType<U> {
  return {
    type: typeof arg,
    value: arg
  }
}
const result2 = withType(123);



// Встроенные дженерики

interface IExample<T> {
  type: string;
  value: T;
  isEmpty: boolean;
}
    //№1 - omit выкидывает из нашего интерфейса определенные ключи
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
  type: 'asd'
};

    //№2 - omit наоборот
const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
    isEmpty: true,
    value: 123
};

    //№3 - partial - делает все ключи необязательными
const partial: Partial<IExample<object>> = {

};