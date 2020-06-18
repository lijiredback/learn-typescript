// 函数声明

// 形参实参必须一一对应
function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

// 函数表达式
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}

// => 不是 ES6
// => 左边是输入类型，用括号括起来
// => 右边是输出类型


// 接口定义函数形状

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 可选参数
// 可选参数必须在最后

function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}

let tomcat2 = buildName2('Tom', 'Cat');
let tom2 = buildName2('Tom');


// 剩余参数
// ...rest 方式 获取函数中的剩余参数
function push(array: any[], ...items: any[]): void {
  items.forEach(item => {
    array.push(item);
  })
}

let a: any[] = [];
push(a, 1, 2, 3, 4);


// 重载：允许一个函数接受不同数量或类型的参数时，做出不同的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number')
    return Number(x.toString().split('').reverse().join(''));
  else if (typeof x === 'string')
    return x.split('').reverse().join('');
}

