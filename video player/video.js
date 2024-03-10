let videoSrc = document.querySelector("video");
let videoNameBtn = document.querySelector("h4");
let durationBtn = document.querySelector("#duration");
let volumeBtn = document.querySelector("#volume");
let previousBtn = document.querySelector(".fa-backward-step");
let playBtn = document.querySelector(".fa-play");
let  pauseBtn = document.querySelector(".fa-pause");
let NextBtn = document.querySelector(".fa-forward-step");
let favBtn = document.querySelector(".fa-heart");
let favSongs = document.querySelector('.favCont')
let videoListCont = document.querySelector('#videoListCont')
videoSrc.controls = false;

// console.log(imgBtn,videoNameBtn,durationBtn,volumeBtn)
// console.log(previousBtn,pauseBtn,palyBtn,NextBtn,favBtn)
pauseBtn.style.display = "none";

let storage = [
  {
    name: "sunset Boat",
    videoSource: "./video/vid1.mp4",
    like: true
  },
  {
    name: "Blue_Sky_and_Clouds_Timelapse",
    videoSource: "./video/vid2.mp4",
    like: false
  },
  {
    name: "sunset video",
    videoSource: "./video/vid3.mp4",
    like: false
  },
  {
    name: "River vally ",
    videoSource: "./video/vid4.mp4",
    like: false
  },
  {
    name: "vid5",
    videoSource: "./video/vid5.mp4",
    like: false
  },
  {
    name: "vid6",
    videoSource: "./video/vid6.mp4",
    like: false
  },
];
let index = 0;
let realTime = 0;

function playFun() {
  // imgBtn.src = storage[index].songImage;
  videoSrc.src = storage[index].videoSource;
  videoNameBtn.innerHTML = storage[index].name;
  videoSrc.src = storage[index].videoSource;
  videoSrc.currentTime = realTime;
  videoSrc.play();
  if(storage[index].like === true){
    favBtn.style.color = 'red';
  }else{
    favBtn.style.color = 'black';
  }
  
  setInterval(() => {
    // durationBtn.value = videoSrc.currentTime
    durationBtn.value = (videoSrc.currentTime/videoSrc.duration)*100;
    
  }, 1000);
  
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  console.log(storage[index])
}
playBtn.addEventListener("click", playFun);

pauseBtn.addEventListener("click", () => {
  videoSrc.pause();
  realTime = videoSrc.currentTime;
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});
NextBtn.addEventListener('click',()=>{
  index = (index +1) % storage.length;
      realTime= 0;
      playFun(); 
    })

  previousBtn.addEventListener('click',()=>{
    index = (index - 1 + storage.length) % storage.length;
  realTime = 0;
      playFun(); 
  })
  

durationBtn.addEventListener('input',()=>{

    // durationBtn.value = (videoSrc.currentTime/videoSrc.duration)*100;
    videoSrc.currentTime = (durationBtn.value*videoSrc.duration)/ 100

})



favBtn.addEventListener('click',()=>{
  if(storage[index].like === true){
    storage[index].like = false;
  }else{
    storage[index].like = true;
  }
  favSongs.innerHTML = ''
  b()
  // console.log(storage[index])
  
})




//! creating list of video

// storage.forEach((ele, i) => {
  //   videoListCont.innerHTML += `<p> ${i + 1}. ${ele.name} </p>`;
  // });

function playVideo(index) {
  videoSrc.src = storage[index].videoSource;
  videoNameBtn.innerHTML = storage[index].name;
  videoSrc.currentTime = realTime;
  videoSrc.play();
  if(storage[index].like === true){
    favBtn.style.color = 'red';
  }else{
    favBtn.style.color = 'black';
  }
  
  setInterval(() => {
    // durationBtn.value = videoSrc.currentTime
    durationBtn.value = (videoSrc.currentTime/videoSrc.duration)*100;
    
  }, 1000);
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  
}



function handleVideoClick(index) {
  return function() {
    realTime = 0; // Reset time when switching videos
    playVideo(index);
  };
}

volumeBtn.addEventListener('input',()=>{
  videoSrc.volume = (volumeBtn.value)/100
})
// durationBtn.addEventListener('input',()=>{
//   videoSrc.volume = (volumeBtn.value)/100
// })

storage.forEach((ele, i) => {
  const pElement = document.createElement('p');
  pElement.textContent = ` ${ele.name}`;
  pElement.addEventListener('click', handleVideoClick(i));
  videoListCont.appendChild(pElement);
  
});

//! Fav song

let b = function(){ storage.forEach((ele, i) => {
  
  if(ele.like === true){
    const pElement = document.createElement('p');
    pElement.textContent = ` ${ele.name}`;
    pElement.addEventListener('click', handleVideoClick(i));
    favSongs.appendChild(pElement);
  }
});

}
b()