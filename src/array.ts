// 1.类型 + 方括号
let fibonacci1: number[] = [1, 1, 2, 3, 5]; // 数组中不允许出现其他非 number 类型
// fibonacci.push('8'); 数组方法也会判断类型

// 2.泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 3.接口表示数组（一般用于类数组）
interface NumberArray {
  // 只要索引的类型是数字，那么值类型也必须是数字 
  [index: number]: number
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];

// 4.类数组(Array-like Object)
function sum() {
  // arguments 是一个类数组，不能用普通的数组方式来描述，而应该用接口
  // let args: number[] = arguments;
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}