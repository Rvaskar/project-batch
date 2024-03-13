let input = document.querySelector("input");
let search = document.querySelector('button')
let city = document.querySelector('h2')
let temp = document.querySelectorAll('h3')[0]
let climate = document.querySelectorAll('h3')[1]

// console.log(input,search,city,temp,climate)

async function wheather(){
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=10.99&lon=44.34&appid=245d68f2293ab03e260180bf138a0b35`)
        console.log(data)
        let data1 = data.json()
        data1 = await data1
        console.log(data1)
    } catch (error) {
        console.log(error)
    }
}
wheather()