window.onload = renderDom();

function renderDom(){
    var elements = document.getElementById('elements');
    elements,style.display="block";
    var arr = document.getElementsByClassName('tiles');
    for(var i=0; i<16; i++){
        arr[i].innerHTML="";
    }
    var control = document.getElementById('control');
    control.style.display='block';
    var score = document.getElementById('score');
    score.innerHTML=0;
}