    //状态不可直接更改   更新是合并不是替换 
    this.setState({isHot:!this.state.isHot})


    setState是内部提供的api，在react中component类的原型上

    关于类组件调用了次数说明
     // react解析组件标签找到MyComponent组件
    // 发现组件使用类定义，随后new出来该类的实例，并通过实例对象调用render方法
    // 将redner返回的虚拟dom转换成真实dom渲染到页面

    默认调用了new创建实例，因此构造函数执行，render函数执行
    每次修改状态时候页面需要渲染也会调用render方法，因此redner调用1+n次
    n是修改页面的次数

    类中方法默认开启严格模式，所以toggle里面this指向undefined