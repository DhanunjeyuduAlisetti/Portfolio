console.log("Welcome to Simplify");

let audioElement=new Audio('1.mp3');
let songIndex=0;
let masterplay=document.getElementById('masterplay');
let myProgressBar=ocument.getElementById('myProgressBar');


let songs = [
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverpath:"cover/1.jpg"},
    {songname: "Let-me-love-you",filePath:"song/1.mp3",coverpath:"cover/1.jpg"}
]

audioElement.play();
//Handle Play/pause
masterplay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
    }
})

//Listen to event
myProgressBar.addEventListener('timeupdate',()=>
{
    console.log("timeUpdate");

    //Update seekbar

})