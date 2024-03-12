// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
//*
// console.log("boy: will you marry me?");
// let girl = new Promise((res, rej) => {
//   let girlMind = "not ok";

//   if (girlMind == "ok") {
//     res();
//   } else {
//     rej();
//   }
// });

// console.log(girl)


// girl.then(()=>{
//     console.log('yess')
// })
// .catch(()=>{
//     console.log('go away')
// })


// let dataFromOutside = fetch("./promise.json");
// console.log(dataFromOutside)

// dataFromOutside.then((data)=>{
//     let jsonData = data.json()
//    jsonData.then((data)=>{
//        console.log(data)

//    })
// }).catch((e)=>{
//     console.log(e)
// })
let dataFromInternet = fetch("https://www.shoppersstack.com/shopping/products/alpha");
// console.log(dataFromInternet)

// dataFromInternet.then((data)=>{
//     let jsonData = data.json()
//     console.log(data)

//     jsonData.then((data1)=>{
//         console.log(data1)

//       let data = data1
//       console.log(data.data)
//       console.log(data.data[1])
//       let d1 = data.data;
//       d1.forEach((e)=>{
//         document.write('</br> name : ',e.name)
//         document.write('</br> title : ',e.title)
//         console.log(e)
//         document.write(`<img src=${e.productImageURLs[0]}></img>`)
//       }).then((e)=>{
//         console.log(e)
//       })
      
//        console.log('hey')

//    })
// }).catch((e)=>{
//     console.log(e)
// })
