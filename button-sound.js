const audio = document.querySelector('audio')
const buttons = document.querySelectorAll('button')
buttons.forEach(element => {
    element.addEventListener('click', function(){
        audio.currentTime = 0.1;
        audio.play()
    })
});