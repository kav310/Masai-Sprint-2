window.onload = renderDom();

var arr = document.getElementsByClassName('tiles')

function generatorRandom(){
  var flag=false;
    while(flag===false){
        var num = Math.floor(Math.random()*16);
        if(arr[num].innerHTML===""){
            arr[num].innerHTML=2;
            flag=true;
        }
    }
}

function right(){
    var state=false;
    var condition=false;
    var k;
    var score = document.getElementById('score');
    for(var i=14; i>0; i-=4){
        condition=false;
        for(var j=1; j>=i-2; j--){
            if(arr[j].innerHTML!==""){
                k=j;
                while(k<(i+1)&&  (parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) || arr[k+1].innerHTML==="") ){
                    if( parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) && condition==false ){
                        arr[k+1].innerHTML=parseInt(arr[k+1].innerHTML)+parseInt(arr[k].innerHTML);
                        score.innerHTML=parseInt(arr[k+1].innerHTML)+parseInt(score.innerHTML);
                        arr[k].innerHTML=""; state=true;conditiontrue;
                    }
                    else if( parseInt(arr[k+1].innerHTML)===parseInt(arr[k].innerHTML) && condition==true ){condition==false;}
                    else if(arr[k+1].innerHTML===""){arr[k+1].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; state=true;
                    }
                    k+=1;
                }
            }
        }
    }
    if(can){av();}
}

function left(){
    var state=false;
    var condition = false;
    var k;
    var score = document.getElementById("score");
    for(var i=13; i>0; i-=4){
        condition = false;
        for(var j=i; j<=i+2; j++){
            if(arr[j].innerHTML!==""){
                k=j;
                while(k>(i-(i%4)) && 
                (parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) 
                || arr[k-1].innerHTML==="")){
                    if( parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) && condition===false ){
                        arr[k-1].innerHTML=parseInt(arr[k-1].innerHTML)+parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; state=true;condition=true;
                        score.innerHTML=parseInt(arr[k-1].innerHTML)+parseInt(score.innerHTML);
                    }
                    else if( parseInt(arr[k-1].innerHTML)===parseInt(arr[k].innerHTML) && condition===true ){condition===false ;}
                    else if(arr[k-1].innerHTML===""){arr[k-1].innerHTML=parseInt(arr[k].innerHTML);
                        arr[k].innerHTML=""; state=true;
                    }
                    k-=1;
                }
            }
        }
        
    }
    if(state){av();}
}

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
   generatorRandom();
   generatorRandom();
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