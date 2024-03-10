
let teamA = document.querySelector('#teamAscore');
let addBtn = document.querySelector('#btnA1');
let saveBtn = document.querySelector('#btnA2');
let paragraph = document.querySelector('#teamAPscore');
let score = document.querySelector('#totalA');
let score1 = document.querySelector('#totalB');
let countA = 0


let teamB = document.querySelector('#teamBscore');
let addBtn1 = document.querySelector('#btnB1');
let saveBtn1 = document.querySelector('#btnB2');
let paragraph1 = document.querySelector('#teamBPscore');
let endMatch = document.querySelector('#endMatch');
let countB = 0

let scoreA = 0
let scoreB = 0




addBtn.addEventListener('click',function(e){
    countA += 3;
    teamA.innerHTML = countA;
    teamA.style.animation = 'none';
    void teamA.offsetWidth;
    teamA.style.animation = 'scoreAnimation 0.5s';
    
})
saveBtn.addEventListener('click',function(){

        paragraph.innerHTML += `${countA} -  `
        
        scoreA +=  countA;
        score.innerHTML = scoreA;
        countA = 0
        teamA.innerHTML = countA;

        
})
addBtn1.addEventListener('click',function(e){
    countB += 2;
    teamB.innerHTML = countB;
    teamB.style.animation = 'none';
    void teamB.offsetWidth;
    teamB.style.animation = 'scoreAnimation 0.5s';

})
saveBtn1.addEventListener('click',function(){

        paragraph1.innerHTML += `${countB} -  `
        scoreB +=  countB;
        score1.innerHTML = scoreB;
        countB = 0
        teamB.innerHTML = countB;
})



endMatch.addEventListener('click',()=>{
    if(scoreA > scoreB){
        alert(`${scoreA} : ${scoreB} team A win by ${scoreA-scoreB} point`)
    }else if(scoreA < scoreB){
        alert(` ${scoreA} : ${scoreB} team B win by ${scoreB-scoreA} point`)
    }else{
        alert(`match tied ${scoreA} : ${scoreB}`)
    }
    window.location.reload();

})