// 函数声明
// 形参实参必须一一对应
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 函数表达式
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
// 可选参数必须在最后
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
// 参数默认值
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat2 = buildName2('Tom', 'Cat');
var tom2 = buildName2('Tom');
// 剩余参数
// ...rest 方式 获取函数中的剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3, 4);
function reverse(x) {
    if (typeof x === 'number')
        return Number(x.toString().split('').reverse().join(''));
    else if (typeof x === 'string')
        return x.split('').reverse().join('');
}
