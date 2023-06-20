
for( var i=0 ; i<7 ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var text = this.innerHTML ;
        play(text) ;
        animation(text) ;
    } ) ;
}

document.addEventListener("keydown" , function(event) {
    play(event.key) ;
    animation(event.key) ;
});


function play(text){
    switch(text){

        case "w" :
            var tom1 = new Audio("./sounds/tom-1.mp3") ;
            tom1.play() ;
        break;

        case "a" :
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play() ;
        break ;

        case "s" :
            var crash = new Audio("./sounds/crash.mp3") ;
            crash.play() ;
        break ;

        case "d" :
            var tom2 = new Audio("./sounds/tom-2.mp3") ;
            tom2.play() ;
        break ;

        case "j" :
            var tom3 = new Audio("./sounds/tom-3.mp3") ;
            tom3.play() ;
        break ;

        case "k" :
            var tom4 = new Audio("./sounds/tom-4.mp3") ;
            tom4.play() ;
        break ;

        case "l" :
            var tom5 = new Audio("./sounds/snare.mp3") ;
            tom5.play() ;
        break ;

        default:
            console.log(text) ;
    }
}

function animation(text){
    document.querySelector("."+ text ).classList.add("press") ;
    setTimeout( function(){
        document.querySelector("."+ text ).classList.remove("press") ;
    } , 100 );
}
// var audio = new Audio("./sounds/tom-1.mp3") ;
//         audio.play();