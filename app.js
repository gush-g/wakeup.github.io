 const letters = document.querySelectorAll('.letter');
 const body = document.querySelector('body')
 let audio = new Audio("music.mp3");
 const play = body.querySelector('.play');

 let ms = 300;
for (let i = 0; i < letters.length; i++) {
    setTimeout( (() => letters[i].classList.add('active')), ms)
     ms += 300;
 }

 for (let i = 0; i < letters.length; i++) {
    setTimeout( (() => letters[i].style.color = 'black'), ms)
    ms += 100;
 }

 
play.addEventListener('click', () => {
    if (play.classList.contains('in__playing')) {
        audio.pause();
        play.classList.remove('in__playing');
    } else {
        audio.play()
        play.classList.add('in__playing')
    }
    
});