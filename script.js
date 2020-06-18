window.onload = renderDom();

function renderDom(){
    var elements = document.getElementById('elements');
    elements.style.display="block";
    var arr = document.getElementsByClassName('tiles');
    for(var i=0; i<16; i++){
        arr[i].innerHTML="";
    }
    var control = document.getElementById('control');
    control.style.display='block';
    var score = document.getElementById('score');
    score.innerHTML=0;
}

function pause(){
    var pause = document.getElementById('pause');
    pause.style.display="block";
    var control = document.getElementById('control');
    control.style.display="none";
}

function reset(){
    var pause = document.getElementById('pause');
    pause.style.display="none";
    renderDom();
}

function start(){
    var elements = document.getElementById('elements');
    var game = document.getElementById('game');
    elements.style.display="none";
    game.style.display="block";
}

function resume(){
    var pause = document.getElementById('pause');
    pause.style.display="none";
    var control = document.getElementById('control');
    control.style.display="block";
}

window.addEventListener("keydown", function(keys){
    if(keys.code=="ArrowLeft"){left();}
    else if(keys.code=="ArrowRight"){right();}
    else if(keys.code=="ArrowUp"){up();}
    else if(keys.code=="ArrowDown"){down();}
})