// 联合类型（Union Types）
// 允许 luckyNumber 的值是 number 或者 string，但不允许是其他值
var luckyNumber;
luckyNumber = 5;
luckyNumber = '5';
// 因为联合类型会有多个类型，所以当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候
// 我们就只能访问此联合类型的所有类型里共有的属性和方法
// 下面的代码会报错，因为 length 不是 string 和 number 的共有属性
/*
function getLength(something: string | number): number {
  return something.length;
}
*/
function getLength(something) {
    return something.toString();
}
