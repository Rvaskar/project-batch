let attendance = document.querySelector('h1');
let addBtn = document.querySelectorAll('button')[0];
let saveBtn = document.querySelectorAll('button')[1];
let paragraph = document.querySelector('p');
let count = 0
let total = []

// console.log(attendance,addBtn,saveBtn,paragraph)

addBtn.addEventListener('click',function(e){
    
    // count ++;
    // attendance.innerHTML = count;
    
    count += 1;
    attendance.innerHTML = count;
    
})
saveBtn.addEventListener('click',function(){
    // total.push(`<p>${count}</p>`)
    // paragraph.innerHTML = " "
    // attendance.innerHTML = 0;
    // total.filter((e)=>{

    //         paragraph.innerHTML +=  `<p>${e}</p>`
    //     })
    //     console.log(total)
        
        paragraph.innerHTML += ` </br> ${count} `
        count = 0
        attendance.innerHTML = count;
})



