const btnChar = {'w':'sounds\\crash.mp3',
  'a':'sounds\\kick-bass.mp3',
  's':'sounds\\snare.mp3',
  'd':'sounds\\tom-1.mp3',
  'j':'sounds\\tom-2.mp3',
  'k':'sounds\\tom-3.mp3',
  'l':'sounds\\tom-4.mp3',};

for (const [key, value] of Object.entries(btnChar)){
  document.querySelector(`.${key}`).addEventListener("click", function() {
     var audio = new Audio(value);
     audio.play();
     buttonAnimation(key);
})
}

document.addEventListener('keypress',function(event){
    var audio = new Audio(btnChar[event.key]);
    audio.play();
    buttonAnimation(event.key);
})

function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
  setTimeout(function(){ document.querySelector("."+key).classList.remove("pressed"); }, 100);
}
