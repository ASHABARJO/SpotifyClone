console.log('Welcome to Sptify')
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))
let songs=[
{songName:"phir aur kya chaiye",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
{ songName:"humari adhuri kahani",filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
{ songName:"sukr tera",filePath:"song/3.mp3",coverPath:"cover/3.jpeg"},
{ songName:"Naina",filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
{ songName:"pyar hota kayi baar",filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
{ songName:"tere hawale",filePath:"song/6.mp3",coverPath:"cover/6.jpg"},
{ songName:"rabbta",filePath:"song/7.mp3",coverPath:"cover/7.jpg"},

]
songItems.forEach((element,i)=> {
   
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1
    }
    else{
        gif.style.opacity=0
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//listen to Event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.target.classList.add('fa-pause-circle')
        element.target.classList.remove('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlay();
       songIndex=parseInt(e.target.id);
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       audioElement.src=`song/${songIndex+1}.mp3`;
       masterSongName.innerText=songs[songIndex].songName
        audioElement.currenTime=0;
        audioElement.play();
        gif.style.opacity=1
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
})


document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText[songIndex].songItemName
        audioElement.currenTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
})



document.getElementById('previous').addEventListener('click',()=>
{

    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText[songIndex].songItemName
        audioElement.currenTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');   
})

