window.addEventListener('load', function(){
    let hWindow = window.innerHeight;
    //console.log(hWindow)
    let revealables = document.querySelectorAll('.revealable');
    let revealablesArray = Array.from(revealables);
    

    

    window.addEventListener('scroll', function(){

        let camPos = window.pageYOffset + hWindow;
        
        revealablesArray.forEach(function(item){

        let imgHeight = item.offsetHeight;
        let imgTopPosinDom = item.getBoundingClientRect().top + window.pageYOffset;
        let triggerPixel = imgTopPosinDom + (imgHeight)/3;
        console.log(item.id, camPos, triggerPixel, imgTopPosinDom, imgHeight)
        

        if(camPos > triggerPixel){
            item.classList.add('revealed')
        }
    
        })

        
    }); 

})