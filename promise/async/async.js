let div = document.querySelector('#div1')
async function demoData(){
    try {
        let dataFromInternet = await fetch("https://www.shoppersstack.com/shopping/products/alpha");
    let dataJson = await dataFromInternet.json(); 
    console.log(dataFromInternet)
    console.log(dataJson)
    let data = dataJson.data
    console.log(data)
    // data.map((e)=>{
    //     let h2 = document.createElement('h2')
    //     h2.innerHTML = e.name;
    //     div.appendChild(h2)
    //     let image = document.createElement('img')
    //     image.src = e.productImageURLs[0];
    //     div.appendChild(image)

    // })

    data.forEach((e)=>{
        // document.write('</br> ----------- '+ 'price: ' +e.price)
        // document.write(`</br> <img src=${e.productImageURLs[0]}  width='100px' height='100px'></img>`)
        let h2 = document.createElement('div')
        h2.innerHTML = `<div class="card" style="width: 18rem;">
        <img src=${e.productImageURLs[0]} class="card-img-top" width='200px' height='300px' alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <p class="card-text">${e.name}</p>
          <p class="card-text"> price : ${e.price} </p>
          <p class="card-text"> rating : ${e.rating} </p>
          
          
          <a href="#" class="btn btn-primary">button</a>
          </div>
          </div>`
          div.appendChild(h2)
          
        //   <p class="card-text">${e.description}</p>
        //   <p class="card-text"> reviews : ${e.reviews.length < 0? 0 : e.reviews.length } </p>
    })
    } catch (error) {
        console.log(error,'error is there')
    }
}

demoData()


// let api = 'https://www.shoppersstack.com/shopping/products/alpha'
// async function fetchData(){
//     try {
//         let data =await fetch(api)
//         let  data1 =await data.json()
    
//         console.log(data1)
//         console.log(data1.data)
//         document.write(data1.data[0].name)
//         document.write(data1.data[0].title)
//     } catch (error) {
        
//     }
// }
// fetchData( )
