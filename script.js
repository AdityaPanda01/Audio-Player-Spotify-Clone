console.log("Starting javascript")
async function song(){
    let val=await fetch("https://adityapanda01.github.io")
    let data = await val.text()
   // console.log(data)
let box=document.createElement("div")
box.innerHTML=data
    let as=box.getElementsByTagName("a")
  //console.log(as)
  let list=[]
  Array.from(as).forEach(element => {
    if(element.href.endsWith(".mp3")){
       list.push(element.href)
    }
  });
  //console.log(list)
  return list
}
let count=0;

async function main(){
    let songItems= await song()
    console.log(songItems)


console.log(songItems[0])
var audio = new Audio
let isPlaying=false;

function playCurrentSong() {
    audio.src = songItems[count];
    audio.play();
    audio.addEventListener("ended", playNextSong)
    isPlaying = true;
}
function togglePlayPause(){
    if(isPlaying){
        audio.pause();
        isPlaying=false;
    }
    else{
        playCurrentSong()
    }
}

// Function to play the next song
function playNextSong() {
    count++;
    if (count >= songItems.length) {
        count = 0; // Wrap around to the beginning
    }
    playCurrentSong();
}

// Function to play the previous song
function playPreviousSong() {
    count--;
    if (count < 0) {
        count = songItems.length-1; // Reset to 0 to wrap around to the beginning
    }
    playCurrentSong();
}
let play=document.querySelector(".play")
let next=document.querySelector(".next")
let previous=document.querySelector(".previous")

play.addEventListener("click",function(){
    togglePlayPause();
    
})
next.addEventListener("click",playNextSong)
previous.addEventListener("click",playPreviousSong)
}
main()

