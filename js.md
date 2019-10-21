###   JS基础

3. 什么是防抖和节流? 有什么区别? 如何实现?

   防抖:  停止一段时间后执行一次 (延迟执行)

   节流:  一定时间内执行一次 (稀释)

   ```javascript
   ```

4. 介绍下Set、Map、WeakSet和WeakMap的区别？

   Set (集合)：类似数组，但成语唯一且无序的，没有重复的值得数据结构

   ​	Set中去重类似于   `===` , 但

   ​	在Set中 `NaN` 等于自身

   Map(字典)：



7. ES5/ES6 的继承除了写法以外还有什么区别?



21. 判断数组的方法的区别

    1. Object.prototype.toString.call(Array, [])  // '[object Function]'

       - 每一个继承 Object 的对象都有 `toString` 方法， 会返回 `[Object type]` 
       - 所有基本的数据类型都能进行判断 

    2. instanceof    

       - 用来判断对象的原型链是不是能找到 类型的原型
       - 只能用来判断对象类型, 原始类型不可以

    3. Array.isArray()

       - 用来判断对象是否为数组

22. 介绍模块化发展历程

23. 全局作用域中,用let和const声明变量不在window上,到底在哪

    let. const声明在块级作用域中, 外部访问不到

24. 下面打印什么内容?为什么?

    ```javascript
    var b = 10;
    (function b(){
        b = 20
        console.log(b)
    })()
    // 答案
    function b(){
        b=20
        console.log(b)
    }
    ```

    