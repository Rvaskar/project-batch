let login = document.querySelector('.right')
let maleCont = document.querySelector('#maleCont')
let femaleCont = document.querySelector('#femaleCont')
let kidsCont = document.querySelector('#kidsCont')
let electronicsCont = document.querySelector('#electronicsCont')
let popup = document.querySelector('#popup')
let x = document.querySelector('#x')
let x1 = document.querySelector('#x1')
let defineCont = document.querySelector('#defineCont')
let search_mobile = document.querySelector('#search-mobile')
let search_laptop = document.querySelector('#search-laptop')
let search_watch = document.querySelector('#search-watch')
let search_headphones = document.querySelector('#search-headphones')
let dynamic = document.querySelector('#dynamic')
let serach = document.querySelector('#serach')
let searchProductBtn = document.querySelector('#searchProduct')
let showProductDetails = document.querySelector('.showProductDetails')
let outercont_showProductDetails = document.querySelector('.outercont_showProductDetails')


searchProductBtn.addEventListener('click',()=>{
    console.log(serach.value)
})


let cartStorage = []


x.addEventListener('click',()=>{
    popup.style.right = '-100%'
})


console.log(login)

let particularUser = JSON.parse(localStorage.getItem('particularUser'))
console.log(particularUser)

if(particularUser){
    login.innerHTML=`
    <span class='userLogo'>${particularUser.first.slice(0,1).toUpperCase()}${particularUser.last.slice(0,1).toUpperCase()}
    <div class="userDetails">
                <p>Name: ${particularUser.first} ${particularUser.last}</p>
                <p>Email:  ${particularUser.email}</p>
                <p>Mobile: ${particularUser.phone}</p>
    </div>
    </span>
    <a href='./ecommerce.html' id='logout'><button>Logout</button></a>`

    let logout = document.querySelector('#logout')
logout.addEventListener('click',()=>{
    localStorage.removeItem('particularUser')
})
}




async function fetchData(){
    let datFromServer =await fetch('https://www.shoppersstack.com/shopping/products/alpha')
    let allData =await  datFromServer.json()
    console.log(allData.data)

    let trending = allData.data.filter((e)=>{
        if(e.offer>50){
            return e
        }
    })

    trending.map((e)=>{
        defineCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
            ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
            <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
            <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
            <h4>Rating: ${e.rating}</h4>
            <button class='btn'>Add To Cart</button>
        </div>
        `
    })


    let maleData = allData.data.filter((e)=>{
        if(e.category=='men'){
            return e
        }
    })

    maleData.map((e)=>{
        maleCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
            ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
            <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
            <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
            <h4>Rating: ${e.rating}</h4>
            <button class='btn'>Add To Cart</button>
        </div>
        `
    })

    let femaleData = allData.data.filter((e)=>{
        if(e.category=='women'){
            return e
        }
    })
    femaleData.map((e)=>{
        femaleCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
            ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
            <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
            <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
            <h4>Rating: ${e.rating}</h4>
            <button class='btn'>Add To Cart</button>
        </div>
        `
    })


    let kidsCont1 = allData.data.filter((e)=>{
        if(e.category=='kids'){
            return e
        }
    })
    kidsCont1.map((e)=>{
        kidsCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
            ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
            <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
            <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
            <h4>Rating: ${e.rating}</h4>
            <button class='btn'>Add To Cart</button>
        </div>
        `
    })

    let electronics = allData.data.filter((e)=>{
        if(e.category=='electronics'){
            return e
        }
    })
    electronics.map((e)=>{
        electronicsCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
            ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
            <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
            <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
            <h4>Rating: ${e.rating}</h4>
            <button class='btn'>Add To Cart</button>
        </div>
        `        
    })

    
    //!SEARCHING FOR MOBILE 


    search_mobile.addEventListener('click',()=>{
        // let div1 = document.createElement('div');
        //     div1.className = 'design';
        console.log('hey')
        let search_mobile1 = allData.data.filter((e)=>{
            if(e.type=='mobile'){
                return e
            }
        })
        
        
        defineCont.innerHTML = ''
        search_mobile1.map((e)=>{
            defineCont.innerHTML += `
           
           <div id='${e.productId}'>
           <img src="${e.productImageURLs[0]}" alt="">
           <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
           ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
           <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
           <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
           <h4>Rating: ${e.rating}</h4>
           <button class='btn'>Add To Cart</button>
       </div>
           
            `        
        })
        
        let btn = document.querySelectorAll('.btn')
        console.log(btn)


        btn.forEach((e)=>{
            e.addEventListener('click',()=>{
               popup.style.right='0'
               if(particularUser){
                let parentElement = e.parentElement.id
                console.log(parentElement)

                let oneProduct = allData.data.find((e)=>{
                    if(e.productId == parentElement){
                        return e
                    }
                })
                cartStorage.push(oneProduct)
                
            }else{
                dynamic.innerHTML='<a href="./index.html">login first </a>'
               }
            })
        })
        
    })

    //! SEARCHIN FOR LAPTOP
    search_laptop.addEventListener('click',()=>{
        
        let search_laptop1 = allData.data.filter((e)=>{
            if(e.type=='laptop'){
                return e
            }
        })
        
        defineCont.innerHTML = ''
        search_laptop1.map((e)=>{
            defineCont.innerHTML += `
           
           <div id='${e.productId}'>
           <img src="${e.productImageURLs[0]}" alt="">
           <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
           ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
           <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
           <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
           <h4>Rating: ${e.rating}</h4>
           <button class='btn'>Add To Cart</button>
       </div>
           
            `        
        })

        let btn = document.querySelectorAll('.btn')
        console.log(btn)


        btn.forEach((e)=>{
            e.addEventListener('click',()=>{
               popup.style.right='0'
               if(particularUser){
                let parentElement = e.parentElement.id
                console.log(parentElement)

                let oneProduct = allData.data.find((e)=>{
                    if(e.productId == parentElement){
                        return e
                    }
                })
                cartStorage.push(oneProduct)
                
            }else{
                dynamic.innerHTML='<a href="./index.html">login first </a>'
               }
            })
        })
    
       
    })

    //! SEARCHING FOR watch
    search_watch.addEventListener('click',()=>{
        
        let search_watch1 = allData.data.filter((e)=>{
            if(e.type=='watch'){
                return e
            }
        })
        
        defineCont.innerHTML = ''
        search_watch1.map((e)=>{
            defineCont.innerHTML += `
           
           <div id='${e.productId}'>
           <img src="${e.productImageURLs[0]}" alt="">
           <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
           ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
           <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
           <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
           <h4>Rating: ${e.rating}</h4>
           <button class='btn'>Add To Cart</button>
       </div>
            `
        })
  
        let btn = document.querySelectorAll('.btn')
        console.log(btn)


        btn.forEach((e)=>{
            e.addEventListener('click',()=>{
               popup.style.right='0'
               if(particularUser){
                let parentElement = e.parentElement.id
                console.log(parentElement)

                let oneProduct = allData.data.find((e)=>{
                    if(e.productId == parentElement){
                        return e
                    }
                })
                cartStorage.push(oneProduct)
                
            }else{
                dynamic.innerHTML='<a href="./index.html">login first </a>'
               }
            })
        })
    })
    
    //! SEARCHING FOR headphones
    search_headphones.addEventListener('click',()=>{
        
        let search_headphones1 = allData.data.filter((e)=>{
            if(e.type=='headphones'){
                return e
            }
        })
        
        defineCont.innerHTML = ''
        search_headphones1.map((e)=>{
            defineCont.innerHTML += `
           
           <div id='${e.productId}'>
           <img src="${e.productImageURLs[0]}" alt="">
           <h2 id='showInfo'>${e.name.slice(0,50)}</h2>
           ${e.offer>0? `<span class='offer'>${e.offer}% off</span><span class='deal-off'>Limited time deal</span>
           <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-e.offer)*e.price)/100)}.00  </h3>
           <h3 class='strike'>M.R.P.: &#8377; ${e.price}  </h3>` : `<h3>M.R.P.: &#8377; ${e.price}  </h3>`}
           <h4>Rating: ${e.rating}</h4>
           <button class='btn'>Add To Cart</button>
       </div>
           
            `        
        })
    
        let btn = document.querySelectorAll('.btn')
        console.log(btn)


        btn.forEach((e)=>{
            e.addEventListener('click',()=>{
               popup.style.right='0'
               if(particularUser){
                let parentElement = e.parentElement.id
                console.log(parentElement)

                let oneProduct = allData.data.find((e)=>{
                    if(e.productId == parentElement){
                        return e
                    }
                })
                cartStorage.push(oneProduct)
                
            }else{
                dynamic.innerHTML='<a href="./index.html">login first </a>'
               }
            })
        })
    })


    // let inputSearch = allData.data.filter((e)=>{
    //    let b =  e.searchTags.find((e)=>{e=='Headphone'}) || e.category.includes("Headphone") ;

    // if(b){console.log( e)}

    // })

    
    let btn = document.querySelectorAll('.btn')


        btn.forEach((e)=>{
            e.addEventListener('click',()=>{
               popup.style.right='0'


               if(particularUser){
                let parentElement = e.parentElement.id
                console.log(parentElement)

                let oneProduct = allData.data.find((e)=>{
                    if(e.productId == parentElement){
                        return e
                    }
                })
                cartStorage.push(oneProduct)
                cartStorage = [...new Set(cartStorage)];
                dynamic.innerHTML = ''
                cartStorage.map((e)=>{
                    dynamic.innerHTML += ` <div class="cart-design" id='${e.productId}'>
                    <div><img src="${e.productImageURLs[0]}" alt=""></div>
                    <div>
                        <h2>${e.name}</h2>
                        <input type="number" name="" id="">
                    </div>
                    <div>
                        <h3>${e.price}</h3>
                    </div>
                    <div>
                        <h4>${e.price}</h4>
                    </div>
                </div>`
                })
            }else{
                dynamic.innerHTML='<a href="./index.html">login first </a>'
               }
            })
        })


        let showInfo = document.querySelectorAll('#showInfo')
        console.log(showInfo)
        showInfo.forEach((e)=>{
            e.addEventListener('click',()=>{
                outercont_showProductDetails.style.display = 'block'


                let parentElement = e.parentElement.id
                console.log(parentElement)

                let oneProduct = allData.data.find((e)=>{
                    if(e.productId == parentElement){
                        return e
                    }
                })
                console.log(oneProduct)
                console.log(typeof oneProduct)
                console.log(oneProduct.name)
                showProductDetails.innerHTML = ``
                
                    showProductDetails.innerHTML += ` 
                    
                    <div class="showProductLeft">
                <div class="showImgs">
                    <img src=" ${oneProduct.productImageURLs[0]}" alt="">
                </div>
                <hr>
                <div class="showAllImages">
                <img src=" ${oneProduct.productImageURLs[0]}" alt="">
                <img src=" ${oneProduct.productImageURLs[1]}" alt="">
                <img src=" ${oneProduct.productImageURLs[2]}" alt="">
                </div>
                <div class="reviewsCont">
                    <h2>Customer Reviews</h2>
                    <div>
                        <p>good and best</p>
                        <h4>- parimal</h4>
                    </div>
                </div>
            </div>
            <div class="productInfo">
                <h1>${oneProduct.name}</h1>
                <h4>${oneProduct.title}</h4>
                <h3>${oneProduct.brand}</h3>
                <hr>
                ${oneProduct.offer>0? `<span class='offer'>${oneProduct.offer}% off</span><span class='deal-off'>Limited time deal</span>
                <h3><sup class='superscript'>&#8377;</sup> ${Math.floor(((100-oneProduct.offer)*oneProduct.price)/100)}.00  </h3>
                <h3 class='strike'>M.R.P.: &#8377; ${oneProduct.price}  </h3>` : `<h3>M.R.P.: &#8377; ${oneProduct.price}  </h3>`}
                <h2>Description:</h2>
                <p>${oneProduct.description.replaceAll('\n','<br>').replaceAll('\t','<b>:</b>')}</p>
            </div>
                    `
                
            })
        })
}
x1.addEventListener('click',()=>{
    outercont_showProductDetails.style.display = 'none'
})

fetchData()