
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
  async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
  }

  async function async2() {
    console.log('async')
  }
  console.log('start')
  async1()
  console.log('end')
  
}




