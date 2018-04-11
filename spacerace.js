
TweenMax.to("#asteroid",4, {top :650, left :150, scale:0.5,repeat: -1, rotation:360, ease:Linear.easeNone


});       //Using GreenSock Library To Animate Asteroid Falling

// window load event makes sure image is // loaded before running animation
$(window).on("load", function() {

var tl = new TimelineMax({repeat:-1});
tl.to("#background", 30, {
    backgroundPosition: "-2247px 0px",
    autoRound:true,
    ease: Linear.easeNone
});
});

const falconX = document.getElementById('falconX');
const enemy = document.getElementById('enemy');
let margValue = 0;
let margValue2 = 0;

document.addEventListener('keydown',(event) => {
 //console.log(e.keycode)
console.log("Button is pushed")
});



function move(e) {

  if(e.keyCode == 39){
        margValue += 70;
        falconX.style.left = margValue + ("px");
        if(margValue >= 1000){
            alert("Player 1 Wins!!");
        }
}
   if(e.keyCode == 65){
        margValue2 += 70;
        enemy.style.left = margValue2 + ("px");
        if(margValue2 >= 1000){
            alert("Player 2 Wins!!");
}
}
};


document.onkeydown = move;
