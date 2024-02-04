console.log("Welcome to Spotify");
//1. Initialize the Variables
let SongIndex =0;
let audioElement = new Audio('songs/1.mp3');
// audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

//2. songs list in array of objects (key -> songName, value -> )
let songs =[
    {songName : "Salam- e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName : "Cielo - Huma-Huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName : "DEAF KEV - Invincible ", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName : "Different Heaven ", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName : "Janji-Heroes-Tonigh", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName : "Rabba - Salam-e-Ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName : "Sakhiyaan - Salam-e-Ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName : "Bhula Dena - Salam-e-Ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName : "Tumhari Kasam - Salam-e-Ishq", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName : "Na Jaana - Salam-e-Ishq", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

// audioElement.play();   just checking to play...................
//6. Want to play all the songs
 songItems.forEach((element,i) => {
    // console.log(element,1);
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//3. Handle play/pause click  -> adding eventListener for playing or pausing the song after clicking on the masterPlay button 
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
     audioElement.play();  //play the song after above condition 
     masterPlay.classList.remove('fa-play-circle'); //And also want to change the play button 
     masterPlay.classList.add('fa-pause-circle');
     gif.style.opacity=1;
    }
    else {
        audioElement.pause();  
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//4. Listen to events  for updating time of myProgressBar
audioElement.addEventListener('timeupdate', ()=>{    //timeupdate is a event to change the time 
    //console.log('timeupdate');    //See the timeupdate in console 
    //Updating Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);   //calculating % of time change
    // console.log(progress);  //  just for seeing in the console
    myProgressBar.value = progress;   // Value of myProgressBar will be changing (initialy 0 tha )
})

//5. Problem is that when we click cursser on any position of progressBar is not affecting
//so below are the code for changing audio with progressBAr
//For this we have to use "change" event 
myProgressBar.addEventListener('change',()=>{
    // audioElement.currentTime = myProgressBar.value -->this is only %change na but we want to change the duration 
    //so again use the maths for finding duration (see the line 47 for understanding )
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;   //Since we need duration so using line 54 we find it
})

//7
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

//8. for playing song 
//For playing the song from sonList icon
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        SongIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${SongIndex+1}.mp3`;
        masterSongName.innerText = songs[SongIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // // also change the masterPlay play/pause icon
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

//for playing next and prev songs after clicking on the next/prev icon
//for next icon
document.getElementById('next').addEventListener('click', ()=>{
    if(SongIndex>=9){
        SongIndex = 0
    }
    else{
        SongIndex += 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    masterSongName.innerText = songs[SongIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
//for prev icon
document.getElementById('previous').addEventListener('click', ()=>{
    if(SongIndex<=0){
        SongIndex = 0
    }
    else{
        SongIndex -= 1;
    }
    audioElement.src = `songs/${SongIndex+1}.mp3`;
    masterSongName.innerText = songs[SongIndex].songName;  //changing the song Name
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//1. My task is that whenever next/prev song is playing after click on next/prev song is also pause/play the correspodning song LIst
//2. pause the songList icon when pause 
//3. next song play after stoping the song



