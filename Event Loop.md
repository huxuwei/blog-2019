## Event Loop
https://juejin.im/post/5c3d8956e51d4511dc72c200#heading-20
### 堆、 栈、 队列

- 堆: 
- 栈: 后进先出
- 队列: 先进先出

### Event Loop
- MacroTask(宏任务) task
- MicroTask(微任务)

### 浏览器的Event Loop
- 主线程
- 调用栈
  JS调用栈采用的是`后进先出`的规则

##### 同步任务和异步任务




```
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});
console.log('script end');
```







