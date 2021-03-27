1、为什么类中的函数this指向丢失？
this在运行的时候进行绑定，所以类的实例调用时this指向类的实例对象
所以在render方法中对jsx绑定事件时候this丢失，所以可以在构造函数里面
通过bind显示绑定this

new的时候经过了什么？
1、创建一个空对象
2、将构造函数的作用域赋值给新对象，相当于this指向这个新对象
3、指向构造函数的代码给新对象添加属性
4、返回新对象

function _new(){
  // 1、创建一个新对象
  let target = {};
  let [constructor, ...args] = [...arguments];  // 第一个参数是构造函数
  // 2、原型链连接
  target.__proto__ = constructor.prototype;
  // 3、将构造函数的属性和方法添加到这个新的空对象上。
  let result = constructor.apply(target, args);
  if(result && (typeof result == "object" || typeof result == "function")){
    // 如果构造函数返回的结果是一个对象，就返回这个对象
    return result
  }
  // 如果构造函数返回的不是一个对象，就返回创建的新对象。
  return target
}
function Person(name){
  this.name = name
}
let p2 = _new(Person, "hello")
console.log(p2.name)  // hello
console.log(p2 instanceof Person) // true
