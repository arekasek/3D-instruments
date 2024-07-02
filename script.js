window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const keys= document.querySelectorAll(".key");
    if(!audio){
        return false;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add(`active`);
    
    function end(e) {
        if(e.propertyName!=="transform"){
            return;
        }
        key.classList.remove(`active`);
    }

    keys.forEach(key=>key.addEventListener("transitionend",end));
});
const keys = document.querySelectorAll(".key");
keys.forEach(key =>{
    key.addEventListener("click", ()=>{
    const keyVal = document.querySelectorAll(".key").value;
    console.log(keyVal);
    })
});
