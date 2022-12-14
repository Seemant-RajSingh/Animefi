// initialize the variables
let soundIndex = 0;
let audioElement = new Audio('audios/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));        // CONCEPT for multi data values
let songTitle = document.getElementById("songTitle");   // ***Element not elements !!
let container = document.getElementById("BG");
let backG = document.body;
let head = document.getElementById("h1");
let sB = document.getElementById(`sb${soundIndex}`);


//giving initial values to variables
sB.classList.add("hoVer");
container.classList.add("bg0");
backG.classList.add("b0");
h1.classList.add("class0");




// Alloting respective Time stamps  --------------------------------------------------------------------
let e1 = new Audio('audios/1.mp3');
let e2 = new Audio('audios/2.mp3');
let e3 = new Audio('audios/3.mp3');
let e4 = new Audio('audios/4.mp3');
let e5 = new Audio('audios/5.mp3');
let e6 = new Audio('audios/6.mp3');
let e7 = new Audio('audios/7.mp3');
const arr = [e1, e2, e3, e4, e5, e6, e7];


audioElement.addEventListener("loadeddata", function() {


let Tstamp = Array.from(document.getElementsByClassName('timestamp'));
for(let i=0; i<=6; i++) {
    //Tstamp[i].innerText = Math.trunc(arr[i].duration)/60;
    let minutes = Math.floor(arr[i].duration/60);
    let seconds = Math.round(arr[i].duration-minutes*60);
    Tstamp[i].innerText = minutes + ":" + seconds;
}

   });

   //Tstamp[0].innerText = audioElement.duration;

 //----------------------------------------------------------------------------------------------------------------




// creating object
let songs = [
    {songName: "Gurenge", filePath: "audios/1.mp3", coverPath: "covers/tanjiro.jpg"},
    {songName: "THE HERO", filePath: "audios/2.mp3", coverPath: "covers/saitama.png"},
    {songName: "Hollow purple", filePath: "audios/3.mp3", coverPath: "covers/gojo.jpg"},
    {songName: "You say run", filePath: "audios/4.mp3", coverPath: "covers/deku.png"},
    {songName: "K21 AoT", filePath: "audios/5.mp3", coverPath: "covers/levi.png"},
    {songName: "Ikiru Hitobito", filePath: "audios/6.mp3", coverPath: "covers/MP-icon.png"},
    {songName: "The World", filePath: "audios/7.mp3", coverPath: "covers/Ryuk-icon.png"}
]


/* Edit individual music icons and song name */
songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})



//Handle play/pause on click
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 0.8;

            let str = songs[soundIndex].filePath;               // **** CONCEPT ------------- ****
            let eyeD = str.slice(7, 8);
            let elem = document.getElementById(eyeD-1);
            elem.classList.remove('fa-circle-play');
            elem.classList.add('fa-circle-pause');

            songItems.classList.add("hoVer");
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;

            let str = songs[soundIndex].filePath;
            let eyeD = str.slice(7, 8);
            let elem = document.getElementById(eyeD-1);
            elem.classList.remove('fa-circle-pause');
            elem.classList.add('fa-circle-play');
        }
})



//Listen to events - update progress bar as time changes
audioElement.addEventListener('timeupdate', ()=> {
//console.log('timeupdate');
    let progress = ((audioElement.currentTime)/audioElement.duration)*100;
    progressBar.value = progress;
});

progressBar.addEventListener('change', ()=> {
    audioElement.currentTime = (progressBar.value*audioElement.duration/100);
})






// function to make all icons to play
const makeAllPlay = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}






/* Playing from mini buttons */
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=> {
        //console.log(e.target);
        if(e.target.classList[2]==='fa-circle-play'){

        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.remove("hoVer");

        let n = soundIndex;
        makeAllPlay();
        
        soundIndex = parseInt(e.target.id);

        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.add("hoVer");

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `/audios/${soundIndex+1}.mp3`;       // ** CONCEPT
        audioElement.currentTime = 0;
        audioElement.play();


        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


        container.classList.remove(`bg${n}`);
        container.classList.add(`bg${soundIndex}`);


        backG.classList.remove(`b${n}`);
        backG.classList.add(`b${soundIndex}`);

        head.classList.remove(`class${n}`);
        head.classList.add(`class${soundIndex}`);

        gif.style.opacity = 0.8;
        songTitle.innerText = songs[soundIndex].songName;

        }

        else{
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');

        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

        gif.style.opacity = 0;

        audioElement.pause();
        }
        
    })
})







// Next button actions ---------------------------
document.getElementById('next').addEventListener('click', ()=> {

    let a = soundIndex;

    if(soundIndex>=6){

        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.remove("hoVer");
        soundIndex = 0;
        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.add("hoVer");

            //let str = songs[soundIndex].filePath;  
                 // **** CONCEPT ------------- ****
            //let eyeD = str.slice(7, 8);
               

            let elem = document.getElementById(6);
            elem.classList.remove('fa-circle-pause');
            elem.classList.add('fa-circle-play');

            elem = document.getElementById(0);
            elem.classList.remove('fa-circle-play');
            elem.classList.add('fa-circle-pause');
    }
    else {
        
        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.remove("hoVer");
        soundIndex += 1;
        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.add("hoVer");

            let str = songs[soundIndex].filePath;  
                 // **** CONCEPT ------------- ****
            let eyeD = str.slice(7, 8);
              

            let elem = document.getElementById(eyeD-2);
            elem.classList.remove('fa-circle-pause');
            elem.classList.add('fa-circle-play');

            elem = document.getElementById(eyeD-1);
            elem.classList.remove('fa-circle-play');
            elem.classList.add('fa-circle-pause');
    }

        audioElement.src = `/audios/${soundIndex+1}.mp3`;       // ** CONCEPT
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.8;
        songTitle.innerText = songs[soundIndex].songName;

        container.classList.remove(`bg${a}`);
        container.classList.add(`bg${soundIndex}`);

        backG.classList.remove(`b${a}`);
        backG.classList.add(`b${soundIndex}`);

        head.classList.remove(`class${a}`);
        head.classList.add(`class${soundIndex}`);
        
})





// Previous button actions ---------------------------
document.getElementById('previous').addEventListener('click', ()=> {

    let b=soundIndex;
    

    if(soundIndex<=0){

        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.remove("hoVer");
        soundIndex = 6;
        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.add("hoVer");

        let elem = document.getElementById(0);
        elem.classList.remove('fa-circle-pause');
        elem.classList.add('fa-circle-play');

        elem = document.getElementById(6);
        elem.classList.remove('fa-circle-play');
        elem.classList.add('fa-circle-pause');
    }

    else {

        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.remove("hoVer");
        soundIndex -= 1;
        sB = document.getElementById(`sb${soundIndex}`);
        sB.classList.add("hoVer");

        let str = songs[soundIndex].filePath;               // **** CONCEPT ------------- ****
        let eyeD = str.slice(7, 8);

        let elem = document.getElementById(eyeD);
        elem.classList.remove('fa-circle-pause');
        elem.classList.add('fa-circle-play');

        elem = document.getElementById(eyeD-1);
        elem.classList.remove('fa-circle-play');
        elem.classList.add('fa-circle-pause');
    }

        audioElement.src = `/audios/${soundIndex+1}.mp3`;       // ** CONCEPT
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 0.8;
        songTitle.innerText = songs[soundIndex].songName;
        //console.log(soundIndex);
        container.classList.remove(`bg${b}`);
        container.classList.add(`bg${soundIndex}`);

        backG.classList.remove(`b${b}`);
        backG.classList.add(`b${soundIndex}`);

        head.classList.remove(`class${b}`);
        head.classList.add(`class${soundIndex}`);

        callSI();

        
        
        
})

