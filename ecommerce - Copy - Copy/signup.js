let form = document.querySelector('form');

let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let emailId = document.querySelector('#emailId')
let mobile = document.querySelector('#mobile')
let password = document.querySelector('#pass')
let cpassword = document.querySelector('#cpassword')

let checkbox = document.querySelector('#checkbox')
let btn = document.querySelector('#btn') 


let storage=[]
// console.log(form)
let localData = JSON.parse(localStorage.getItem('data'))
if(localData){
    storage=localData
    console.log(storage)
}

console.log('signup')


let firstNameSpan = document.querySelectorAll('.span')[0]
let lastNameSpan = document.querySelectorAll('.span')[1]
let emailSpan = document.querySelectorAll('.span')[2]
let mobileSpan = document.querySelectorAll('.span')[3]
let passSpan = document.querySelectorAll('.span')[4]
let cpassSpan = document.querySelectorAll('.span')[5]
// console.log(firstNameSpan,lastNameSpan,emailSpan,mobileSpan,passSpan,cpassSpan)

let showPass = document.querySelectorAll('.showPassword')
// console.log(showPass)

// console.log(form,emailId,password)

showPass[0].addEventListener('click',()=>{
    let t = showPass[0].classList.toggle("test");
    console.log('hey')
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
showPass[1].addEventListener('click',()=>{
    let t1 = showPass[1].classList.toggle("test1");
    //     // console.log(t)
        if(t1){
            showPass[1].src == './image/icons8-closed-eye-50.png'
            cpassword.setAttribute('type','text')
            showPass[1].setAttribute('src','./image/icons8-closed-eye-50.png')
        }else{
            showPass[1].setAttribute('src','./image/icons8-eye-24.png')
            cpassword.setAttribute('type','password')
            
        }
})


form.addEventListener('submit',(e)=>{

    let matching = storage.find((b)=>{
        if( b.email === emailId.value){
        //  console.log('ture')
         return b
        }
     });
     if(!matching){

    let regx = /^[a-zA-Z]{2,15}$/;   //  [] here allowed to user ..... { minlength,max,length} here length
    let regx1 = /^[6-9][0-9]{9}$/;  //regular expression
    let regx2 = /^[a-zA-Z0-9]{8,15}$/
    let flag = true;
    
    if(firstName.value == ''){
        firstNameSpan.innerHTML = '</br>first name is required'
        e.preventDefault()
        flag = false;
    }
    else if(regx.test(firstName.value)){
        firstNameSpan.innerHTML = ''
    }else{
        firstNameSpan.innerHTML = ' <br>invalid first name';
        e.preventDefault()
        flag = false;
    }

    if(lastName.value == ''){
        lastNameSpan.innerHTML = '</br>Last name is required'
        e.preventDefault()
        flag = false;
    }
    else if(regx.test(lastName.value)){
        lastNameSpan.innerHTML = ''
    }else{
        lastNameSpan.innerHTML = ' <br>invalid Last name';
        e.preventDefault()
        flag = false;
    }

    if(emailId.value == ''){
        emailSpan.innerHTML = '</br>email required'
        e.preventDefault()
        flag = false;
    }else{
        emailSpan.innerHTML = ''
    }
    

    if(mobile.value == ''){
        mobileSpan.innerHTML = ' <br>invalid mobile number'
        e.preventDefault()
        flag = false;
    }else if(regx1.test(mobile.value)){
        mobileSpan.innerHTML = ''
    }else{
        mobileSpan.innerHTML = ' <br>invalid mobile number';
        e.preventDefault()
        flag = false;
    }

    if(pass.value == ''){
        passSpan.innerHTML = '<br>password is required'
        e.preventDefault()
        flag = false;
    }else if(regx2.test(pass.value)){
        passSpan.innerHTML = ""
    }else{
        passSpan.innerHTML = ' <br>invalid password'
        e.preventDefault()
        flag = false;

    }

    if(cpassword.value == pass.value){
        cpassSpan.innerHTML = ''
    }else{
        cpassSpan.innerHTML = '<br>password not matching'
        e.preventDefault()
        flag = false;

    }

    if (flag){
        let obj = {
            first: firstName.value,
            last : lastName.value,
            email : emailId.value,
            phone: mobile.value,
            pass : pass.value
        }
        storage.push(obj)
        console.log(storage)
        localStorage.setItem('data', JSON.stringify(storage))
    }
}else{
    alert('email already  register')
    e.preventDefault()
}
    // e.preventDefault()

})
