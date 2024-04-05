let login = document.querySelector('.right')
let maleCont = document.querySelector('#maleCont')
let femaleCont = document.querySelector('#femaleCont')
let kidsCont = document.querySelector('#kidsCont')
let electronicsCont = document.querySelector('#electronicsCont')
let popup = document.querySelector('#popup')
let x = document.querySelector('#x')
let dynamic = document.querySelector('#dynamic')

let cartStorage = []

x.addEventListener('click',()=>{
    popup.style.right = '-100%'
})



let particularUser = JSON.parse(localStorage.getItem('particularUser'))


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

    let maleData = allData.data.filter((e)=>{
        if(e.category=='men'){
            return e
        }
    })
    console.log(maleData)

    maleData.map((e)=>{
        maleCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2>${e.name}</h2>
            <h3>${e.price}</h3>
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
    console.log(femaleData)
    femaleData.map((e)=>{
        femaleCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2>${e.name}</h2>
            <h3>${e.price}</h3>
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
    console.log(femaleData)
    kidsCont1.map((e)=>{
        kidsCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2>${e.name}</h2>
            <h3>${e.price}</h3>
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
    console.log(electronics)
    electronics.map((e)=>{
        electronicsCont.innerHTML += `
        <div id='${e.productId}'>
            <img src="${e.productImageURLs[0]}" alt="">
            <h2>${e.name}</h2>
            <h3>${e.price}</h3>
            <h4>Rating: ${e.rating}</h4>
            <button class='btn'>Add To Cart</button>
        </div>
        `        
    })
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

                print()

                subTotal()


                del();
                grandTotal();

            }else{
                dynamic.innerHTML='<a href="./index.html">login first </a>'
               }
            })
        })
}
fetchData()



function print(){
    dynamic.innerHTML = ''
        cartStorage.map((e)=>{
            dynamic.innerHTML += ` <div class="cart-design" id='${e.productId}'>
            <div><img src="${e.productImageURLs[0]}" alt=""></div>
            <div>
                <h2>${e.name}</h2>
                <input type="number" name="" id="">
            </div>
            <div>
                <h3 class='price'>${e.price}</h3>
            </div>
            <div>
                <h4 class='subTotal'>${e.price}</h4>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>`
        })
        del()
}

function del(){
    let trash = document.querySelectorAll('.fa-trash')
        trash.forEach((e)=>{
            e.addEventListener('click',()=>{
                console.log(e)
                let parentElement = e.parentElement.parentElement;
                console.log(parentElement)
                cartStorage = cartStorage.filter((e)=>{
                    if(parentElement.id != e.productId){
                        return e;
                    }
                })
                console.log(cartStorage)

                print()
                grandTotal()    

            })
        })
}

function subTotal(){
    let sub = document.querySelectorAll('.subTotal')
                console.log(sub)
                let quantity = document.querySelectorAll('input')
                quantity.forEach((e)=>{
                    e.addEventListener('input',()=>{
                        if(e.value <1){
                            e.value = 1;
                        }

                        let parentElement = e.parentElement.parentElement;
                        let price = parentElement.querySelector('.price')
                        let sub = parentElement.querySelector('.subTotal')
                        sub.innerHTML =e.value*price.innerHTML
                        grandTotal()
                    })
                })

}


function grandTotal(){
    let gt = document.querySelector('#gt')
    let sub =  document.querySelectorAll('.subTotal')
    let sum = 0;
    sub.forEach((e)=>{
        let  total = parseInt(e.innerHTML);
        sum = sum + total

    })

    gt.innerHTML = sum
}