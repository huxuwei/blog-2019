function debounce(fn, await=500) {
  let timeout = null // 创建一个标记用来存放定时器的返回值
  return (... args)=>{
    clearTimeout(timeout) //每当用户输入的时候把前一个setTimeout clear掉
    timeout = setTimeout(() => {
      fn.apply(this, args)
    }, await);
  }
}

function throttle(fn, await= 500) {
  let pre = 0 // 立即执行
  return function( ... args) {
    let now = +new Date()     // 触发的时间
    if(now - pre > await) {  // 时间差大于间隔即触发
      pre = now             //把触发时间记录下来
      fn.apply(this, args)
    }
  }
}

