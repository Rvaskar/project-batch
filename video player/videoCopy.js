let initial = document.querySelector("#initial");
let last = document.querySelector("#last");

let videoSrc = document.querySelector("video");
let videoNameBtn = document.querySelector("h4");
let durationBtn = document.querySelector("#duration");
let volumeBtn = document.querySelector("#volume");
let previousBtn = document.querySelector(".fa-backward-step");
let playBtn = document.querySelector(".fa-play");
let pauseBtn = document.querySelector(".fa-pause");
let NextBtn = document.querySelector(".fa-forward-step");
let favBtn = document.querySelector(".fa-heart");
let favSongs = document.querySelector(".favCont");
let videoListCont = document.querySelector("#videoListCont");
videoSrc.controls = false;

pauseBtn.style.display = "none";

let storage = [
  {
    name: "sunset Boat",
    videoSource: "./video/vid1.mp4",
    like: true,
  },
  {
    name: "Blue_Sky_and_Clouds_Timelapse",
    videoSource: "./video/vid2.mp4",
    like: false,
  },
  {
    name: "sunset video",
    videoSource: "./video/vid3.mp4",
    like: false,
  },
  {
    name: "River vally ",
    videoSource: "./video/vid4.mp4",
    like: false,
  },
  {
    name: "vid5",
    videoSource: "./video/vid5.mp4",
    like: false,
  },
  {
    name: "vid6",
    videoSource: "./video/vid6.mp4",
    like: false,
  },
];
let index = 0;
let realTime = 0;

function playFun(index) {
  videoSrc.src = storage[index].videoSource;
  videoNameBtn.innerHTML = storage[index].name;
  videoSrc.currentTime = realTime;
  videoSrc.play();
  if (storage[index].like === true) {
    favBtn.style.color = "red";
  } else {
    favBtn.style.color = "black";
  }
  setInterval(() => {
    durationBtn.value = (videoSrc.currentTime / videoSrc.duration) * 100;
  }, 1000);
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  console.log(index);
}

playBtn.addEventListener("click", () => {
  playFun(index);
});

pauseBtn.addEventListener("click", () => {
  videoSrc.pause();
  realTime = videoSrc.currentTime;
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});

NextBtn.addEventListener("click", () => {
  index = (index + 1) % storage.length;
  realTime = 0;
  console.log(index);
  playFun(index);
});

previousBtn.addEventListener("click", () => {
  index = (index - 1 + storage.length) % storage.length;
  realTime = 0;
  playFun(index);
});

durationBtn.addEventListener("input", () => {
  videoSrc.currentTime = (durationBtn.value * videoSrc.duration) / 100;
});

favBtn.addEventListener("click", () => {
  if (storage[index].like === true) {
    storage[index].like = false;
    favBtn.style.color = "black";
  } else {
    storage[index].like = true;
    favBtn.style.color = "red";
  }
  favSongs.innerHTML = "";
  displayFavoriteSongs();
});

function handleVideoClick(clickedIndex) {
  return function () {
    realTime = 0;
    index = clickedIndex;  
    playFun(index);
  };
}

volumeBtn.addEventListener("input", () => {
  videoSrc.volume = volumeBtn.value / 100;
});

function displayFavoriteSongs() {
  storage.forEach((ele, i) => {
    if (ele.like === true) {
      const pElement = document.createElement("p");
      pElement.textContent = ` ${ele.name}`;
      pElement.addEventListener("click", handleVideoClick(i));
      favSongs.appendChild(pElement);
    }
  });
}

function populateVideoList() {
  storage.forEach((ele, i) => {
    const pElement = document.createElement("p");
    pElement.textContent = ` ${ele.name}`;
    pElement.addEventListener("click", handleVideoClick(i));
    videoListCont.appendChild(pElement);
  });
}

displayFavoriteSongs();

populateVideoList();

videoSrc.addEventListener("ended", () => {
  index = (index + 1) % storage.length;
  realTime = 0;
  playFun(index);
});

videoSrc.addEventListener("timeupdate", () => {
  let currentTime = videoSrc.currentTime;
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);

  // Add leading zeros if needed
  let formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  initial.innerHTML = formattedTime;
});

videoSrc.addEventListener("timeupdate", () => {
  let currentTime = videoSrc.duration;
  let minutes = Math.round(currentTime / 60);
  let seconds = Math.round(currentTime % 60);

  // Add leading zeros if needed
  let formattedTime = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

 
  last.innerHTML = formattedTime;
});




//! volume
let volume_off = document.querySelector(".fa-volume-xmark");
let volume_on = document.querySelector(".fa-volume");
let volume_perc = document.querySelector("#volume_perc");
volume_off.style.display = 'none'

let timeOfVolume = 0;

volumeBtn.addEventListener('input',()=>{
  videoSrc.volume = volumeBtn.value / 100
  volume_perc.innerText = volumeBtn.value
  if(videoSrc.volume > 0){
    volume_off.style.display = 'none'
    volume_on.style.display = 'block'
  }else{
    volume_off.style.display = 'block'
    volume_on.style.display = 'none'
    
  }
})

volume_on.addEventListener('click',()=>{
  timeOfVolume = Math.round(videoSrc.volume * 100);
  volume_off.style.display = 'block'
  volume_on.style.display = 'none'
  videoSrc.volume = 0;
  volumeBtn.value = videoSrc.volume
  volume_perc.innerText = volumeBtn.value

})
volume_off.addEventListener('click',()=>{
  volume_off.style.display = 'none'
  volume_on.style.display = 'block'
  videoSrc.volume = timeOfVolume/100;
  volumeBtn.value = timeOfVolume
  volume_perc.innerText = volumeBtn.value
})
