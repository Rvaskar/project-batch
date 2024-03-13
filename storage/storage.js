

let sample = 'vignesh'

localStorage.setItem('name', sample)
let obj = {
    name : 'vignesh',
    mob: '4578965231'
}
let arrStorage = [10,50,80,60,85,50];
localStorage.setItem('array', arrStorage)
localStorage.setItem('arrayStore', JSON.stringify(arrStorage))
localStorage.setItem('obj', obj)
localStorage.setItem('objStore', JSON.stringify(obj))
console.log(obj)