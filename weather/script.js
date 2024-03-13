let input = document.querySelector("input");
let search = document.querySelector('button')
let city1 = document.querySelector('h2')
let temp = document.querySelectorAll('h3')[0]
let climate = document.querySelectorAll('h3')[1]

// console.log(input,search,city,temp,climate)

async function wheather(city){
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=`)
        console.log(data)
        let data1 = data.json()
        data1 = await data1
        console.log(data1)
        city1.innerText = data1.name
        temp.innerText = data1.main.temp
        climate.innerText = data1.weather[0].main
    } catch (error) {
        console.log(error)
    }
}
// wheather()

search.addEventListener('click',()=>{
    let city = input.value;

    wheather(city)
})