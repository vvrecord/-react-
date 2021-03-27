
完整案例查看14、事件绑定

1、为什么类中的函数this指向丢失？
this在运行的时候进行绑定，所以类的实例调用时this指向类的实例对象
所以在render方法中对jsx绑定事件时候this丢失，所以可以在构造函数里面
通过bind显示绑定this

解决方案：
1、在构造函数里面绑定this
例如： this.toggle = this.toggle.bind(this);

解释：首先看一下15节笔记，看看new经过了什么

所以在类内部有toggle方法其实是类的原型对象上方法，在构造函数上使用this.toggle = this.toggle.bind(this);
将原型上的此方法赋值给了实例自身，因此this指向了实例对象