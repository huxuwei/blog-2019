
// setTimeOut
{
  // console.log('start')
  // setTimeout(()=>{
  //   console.log('setTimeOut')
  // })
  // console.log('end')
}

// Promise
{
  // console.log('start')
  // let pormise1 = new Promise((resolve)=>{
  //   console.log('promise1')
  //   resolve('resolve')
  //   console.log('promise1 end')
  // }).then((val)=>{
  //   console.log(val)
  // })

  // setTimeout(()=>{
  //   console.log('setTimeOut')
  // })
  // console.log('end')
}


// async/await
{
  // async function async1() {
  //   console.log('async1 start')
  //   await async2()
  //   console.log('async1 end')
  // }

  // async function async2() {
  //   console.log('async')
  // }
  // console.log('start')
  // async1()
  // console.log('end')

}




{
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

// 作者：光光同学
// 链接：https://juejin.im/post/5c3d8956e51d4511dc72c200
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
}

{
  function Promise(???){
    ???
    return ???
  }

  var promise = new Promise(function(x,y){
      setTimeout(()=>{
          x(101)
      }, 3000)
  })
  promise.then((z)=>{
      console.log(z)  // 101
  })

}