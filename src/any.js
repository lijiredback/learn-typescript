// 任意值(Any)
// 对于普通类型，赋值过程中不可以改变类型
// let n1: number = 1;
// n1 = '1';
// error
// any 可以
var n2 = 1;
n2 = '1';
// 声明变量未声明类型，被认为是任意值：
var n3;
n3 = '2';
n3 = 2;
