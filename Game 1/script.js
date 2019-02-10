var score = document.querySelector('.score');
var guess = document.querySelector('.guess');
var game = document.querySelector('.game');
var timer = document.querySelector('.timer');
var random=Math.floor(Math.random()*10);

guess.innerText= random;

function insertBubble()
{
    for(var i=0;i<50;i++)
    {
        var random=Math.floor(Math.random()*10);
     var data ='<div class="bubble">'+random+'</div>';
     game.innerHTML += data;

    }

   }
game.addEventListener('click',function(e){
    if(e.target.className === 'bubble' ){
        var bubbleval = e.target.innerText;
        if(guess.innerText === bubbleval){

        
       var currentscore = Number(score.innerText) + 10;
       score.innerText = currentscore;
       game.innerHTML='';
       insertBubble();
         var random=Math.floor(Math.random()*10);
         guess.innerText = random;
       
    }    
}


})
setInterval(function(){

var time =Number( timer.innerText);
if(time<1) {
    game.innerHTML= '<h1>GAME OVER</h1>';
    return;
} 
if(score.innerText>=200){
time=60;
score.innerText=0;
}
time--;
timer.innerText=time;

},1000)
insertBubble();