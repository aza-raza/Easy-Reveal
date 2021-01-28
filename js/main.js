let hWindow = window.innerHeight;
let revealable = document.querySelector('.revealable');

let hRevealable = revealable.offsetHeight;
let toScroll = hWindow - hRevealable;
//console.log('toscrolle'+toScroll)




window.addEventListener('scroll', function(){
    let scrolled = window.pageYOffset;
    console.log(hWindow, scrolled)

    if(scrolled > toScroll){
        revealable.classList.add('revealed')
    }
}); 
