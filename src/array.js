// 1.类型 + 方括号
var fibonacci1 = [1, 1, 2, 3, 5]; // 数组中不允许出现其他非 number 类型
// fibonacci.push('8'); 数组方法也会判断类型
// 2.泛型
var fibonacci2 = [1, 1, 2, 3, 5];
var fibonacci3 = [1, 1, 2, 3, 5];
// 4.类数组(Array-like Object)
function sum() {
    // arguments 是一个类数组，不能用普通的数组方式来描述，而应该用接口
    // let args: number[] = arguments;
    var args = arguments;
}
