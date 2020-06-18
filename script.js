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