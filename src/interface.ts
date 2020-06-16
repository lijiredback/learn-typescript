// 在 TS 中，使用接口 (interfaces) 来定义对象的类型

// 1. 对行为的抽象

interface Person {
  name: string;
  age: number;
}

// 不允许比接口少属性或者多属性
let p1: Person = {
  name: 'Jack',
  age: 18
}

// 2. 可选属性: ? 表示，该属性可以不存在，但仍然不允许有不存在的属性
interface Animal {
  name: string;
  weight?: number;
}

let a1: Animal = {
  name: 'Panda'
}

// 3. 任意属性: 允许任意属性

interface Fruit {
  name: string;
  weight?: number;
  [propName: string]: any; // 定义任意属性的值为 string
}

let f1: Fruit = {
  name: 'apple',
  weight: 10,
  color: 'red'
}