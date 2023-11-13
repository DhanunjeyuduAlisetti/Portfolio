// console.log("Welcome to Simplify");

let audioElement=new Audio('songs/1.mp3');
let songIndex=0;
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSong=document.getElementsByClassName('masterSong');
let songItem=Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverPath:"Love_Poster.png"},
    {songname: "Dum mass",filePath:"song/2.mp3",coverPath:"images3.jpeg"},
    {songname: "Kayyala chindhata",filePath:"song/3.mp3",coverPath:"images2.jpeg"},
    {songname: "Bring it on",filePath:"song/4.mp3",coverPath:"647803-music-1387469249.jpg"},
]


songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=src=songs[i].songname;

})

audioElement.play();
//Handle Play/pause
masterplay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to event
audioElement.addEventListener('timeupdate',()=>
{

    //Update seekbar

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress

})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterSong.innerText=songs[songIndex] .songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4)
    {
        songIndex=0;
    }
    else
    {
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSong.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSong.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})