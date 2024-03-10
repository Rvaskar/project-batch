let imgBtn = document.querySelector("img");
let songNameBtn = document.querySelector("h4");
let durationBtn = document.querySelector("#duration");
let volumeBtn = document.querySelector("#volume");
let previousBtn = document.querySelector(".fa-backward-step");
let playBtn = document.querySelector(".fa-play");
let pauseBtn = document.querySelector(".fa-pause");
let NextBtn = document.querySelector(".fa-forward-step");
let favBtn = document.querySelector(".fa-heart");
let audioPlayer = document.querySelector("audio");
pauseBtn.style.display = "none";
let initial = document.querySelector("#initial");
let last = document.querySelector("#last");
let volume_off = document.querySelector(".fa-volume-xmark");
let volume_on = document.querySelector(".fa-volume");
let volume_perc = document.querySelector("#volume_perc");


audioPlayer.style.display = 'none'
volume_off.style.display = 'none'


let storage = [
  {
    name: "Shiv Tandav Stotram",
    songImage: "./img/shiv tandav.jpg",
    songSource: "./music/_Shiv Tandav Stotram(PagalWorld.com.cm).mp3",
  },
  {
    name: "heeriye",
    songImage: "./img/heeriye.jpg",
    songSource: "./music/_Heeriye(PagalWorld.com.cm).mp3",
  },
  {
    name: "kahani suno",
    songImage: "./img/kahani suno.jpg",
    songSource: "./music/Kahani Suno(PagalWorld.com.cm).mp3",
  },
  {
    name: "shiv spirit",
    songImage: "./img/shiv spirit.jpg",
    songSource: "./music/Shiva Spirit(PagalWorld.com.cm).mp3",
  },
  {
    name: "Shiv Panchakshara Stotram",
    songImage: "./img/shiv stotram.jpg",
    songSource: "./music/Shiva Panchakshara Stotram(PagalWorld.com.cm).mp3",
  },
];

let index = 0;
let realTime = 0;

function playFun() {
  imgBtn.src = storage[index].songImage;
  audioPlayer.src = storage[index].songSource;
  songNameBtn.innerHTML = storage[index].name;
  audioPlayer.src = storage[index].songSource;
  audioPlayer.currentTime = realTime;
  audioPlayer.play();
  // audioPlayer.volume = 20/100
  // volumeBtn.value = Math.round(audioPlayer.volume *100)
  // volume_perc.innerText = volumeBtn.value

  setInterval(() => {
    durationBtn.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  }, 1000);

  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

playBtn.addEventListener("click", playFun);

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  realTime = audioPlayer.currentTime;
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});

NextBtn.addEventListener("click", () => {
  index = (index + 1) % storage.length;
  realTime = 0;

  playFun();
});
previousBtn.addEventListener("click", () => {
  index = (index - 1 + storage.length) % storage.length;
  realTime = 0;
  playFun();
});

durationBtn.addEventListener("input", () => {
  audioPlayer.currentTime = (audioPlayer.duration * durationBtn.value) / 100;
});
audioPlayer.addEventListener("ended", () => {
  index = (index + 1) % storage.length;
  realTime = 0;

  playFun();
});



volumeBtn.addEventListener('input',()=>{
  audioPlayer.volume = volumeBtn.value / 100
  volume_perc.innerText = volumeBtn.value
  if(audioPlayer.volume > 0){
    volume_off.style.display = 'none'
    volume_on.style.display = 'block'
  }else{
    volume_off.style.display = 'block'
    volume_on.style.display = 'none'
    
  }
})

let timeOfVolume = 0;

volume_on.addEventListener('click',()=>{
  timeOfVolume = Math.round(audioPlayer.volume * 100);
  volume_off.style.display = 'block'
  volume_on.style.display = 'none'
  audioPlayer.volume = 0;
  volumeBtn.value = audioPlayer.volume
  volume_perc.innerText = volumeBtn.value

})
volume_off.addEventListener('click',()=>{
  volume_off.style.display = 'none'
  volume_on.style.display = 'block'
  audioPlayer.volume = timeOfVolume/100;
  volumeBtn.value = timeOfVolume
  volume_perc.innerText = volumeBtn.value
})

// let musicList = document.querySelector("#musicList");
// storage.forEach((ele, i) => {
//     musicList.innerHTML += `<p> ${i + 1}. ${ele.name} </p>`;
// });
// let playSong = document.querySelectorAll("#musicList p" );
// console.log(playSong)

// playSong.addEventListener('click',(e)=>{

// })


  audioPlayer.addEventListener("timeupdate", () => {
    let currentTime = audioPlayer.currentTime;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    // Add leading zeros if needed
    let formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    initial.innerHTML = formattedTime;
  });

  audioPlayer.addEventListener("timeupdate", () => {
    let currentTime = audioPlayer.duration;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    // Add leading zeros if needed
    let formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

   
    last.innerHTML = formattedTime;
  });


