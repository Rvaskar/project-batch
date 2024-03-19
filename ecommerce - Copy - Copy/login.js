let form = document.querySelector('form');
let emailId = document.querySelector('#emailId')
let password = document.querySelector('#pass')
let checkbox = document.querySelector('#checkbox')
let btn = document.querySelector('#btn')    
let espan = document.querySelectorAll('.span')[0]
let pspan = document.querySelectorAll('.span')[1]
let bspan = document.querySelectorAll('.span')[2]
let showPass = document.querySelectorAll('.showPassword')

let localData = JSON.parse(localStorage.getItem('data'))
console.log(localData)

showPass[0].addEventListener('click',()=>{
    let t = showPass[0].classList.toggle("test");
    //     // console.log(t)
        if(t){
            showPass[0].src == './image/icons8-closed-eye-50.png'
            showPass[0].setAttribute('src','./image/icons8-closed-eye-50.png')
            password.setAttribute('type','text')
        }else{
            password.setAttribute('type','password')
            showPass[0].setAttribute('src','./image/icons8-eye-24.png')
            
        }
})

form.addEventListener('submit',(e)=>{
    espan.innerHTML = ''
    pspan.innerHTML = ''
    bspan.innerHTML = ''

    let matching = localData.find((e)=>{
       if( e.email === emailId.value && e.pass === password.value){
        return e
       }
    });

    if(emailId.value == '' && password.value == ''){
        e.preventDefault();
        espan.innerHTML = 'pagal type the user email'
        pspan.innerHTML = 'pagal type the password'
    }else if(emailId.value ==""){
        espan.innerHTML = 'pagal type the user email'

        e.preventDefault();

    }else if(password.value ==""){
        pspan.innerHTML = 'pagal type the user password'
        e.preventDefault();
    }if(matching){
        // alert('boss welcome to the page')
        localStorage.setItem('particularUser',JSON.stringify(matching))
    }else{
        bspan.innerHTML = ' password is not matching'
        e.preventDefault();
    }
})