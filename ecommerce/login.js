let form = document.querySelector('form');
let emailId = document.querySelector('#emailId')
let password = document.querySelector('#pass')
let checkbox = document.querySelector('#checkbox')
let btn = document.querySelector('#btn')    
let espan = document.querySelectorAll('.span')[0]
let pspan = document.querySelectorAll('.span')[1]
let bspan = document.querySelectorAll('.span')[2]
console.log(espan,bspan,pspan)
let showPass = document.querySelectorAll('.showPassword')
console.log(showPass)

console.log(form,emailId,password)

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
    }if(emailId.value == 'rutikvaskar@gmail.com' && password.value == '12345'){
        alert('boss welcome to the page')
    }else{
        bspan.innerHTML = ' password is not matching'
        e.preventDefault();
    }
})