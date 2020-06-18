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
            if(arr[j].textContent!==""){
                k=j;
                while(k<(i+1)&&  (parseInt(arr[k+1].textContent)===parseInt(arr[k].textContent) || arr[k+1].textContent==="") ){
                    if( parseInt(arr[k+1].textContent)===parseInt(arr[k].textContent) && condition==false ){
                        arr[k+1].textContent=parseInt(arr[k+1].textContent)+parseInt(arr[k].textContent);
                        score.textContent=parseInt(arr[k+1].textContent)+parseInt(score.textContent);
                        arr[k].textContent=""; state=true;condition=true;
                    }
                    else if( parseInt(arr[k+1].textContent)===parseInt(arr[k].textContent) && condition==true ){condition==false;}
                    else if(arr[k+1].textContent===""){arr[k+1].textContent=parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;
                    }
                    k+=1;
                }
            }
        }
    }
    if(state){checkingCells();}
}
function left(){
    var state=false;
    var condition = false;
    var k;
    var score = document.getElementById("score");
    for(var i=13; i>0; i-=4){
        condition = false;
        for(var j=i; j<=i+2; j++){
            if(arr[j].textContent!==""){
                k=j;
                while(k>(i-(i%4)) && 
                (parseInt(arr[k-1].textContent)===parseInt(arr[k].textContent) 
                || arr[k-1].textContent==="")){
                    if( parseInt(arr[k-1].textContent)===parseInt(arr[k].textContent) && condition===false ){
                        arr[k-1].textContent=parseInt(arr[k-1].textContent)+parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;condition=true;
                        score.textContent=parseInt(arr[k-1].textContent)+parseInt(score.textContent);
                    }
                    else if( parseInt(arr[k-1].textContent)===parseInt(arr[k].textContent) && condition===true ){condition===false ;}
                    else if(arr[k-1].textContent===""){arr[k-1].textContent=parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;
                    }
                    k-=1;
                }
            }
        }
        
    }
    if(state){checkingCells();}
}

function down(){
    var state=false;
    var condition = false;
    var k;
    var score = document.getElementById("score");
    for(var i=11; i>7; i-=1){
        condition = false;
        for(var j=i; j>=0; j=j-4){
            if(arr[j].textContent!==""){
                k=j;
                while(k<12 && 
                (parseInt(arr[k+4].textContent)===parseInt(arr[k].textContent) 
                || arr[k+4].textContent==="")){
                    if( parseInt(arr[k+4].textContent)===parseInt(arr[k].textContent) && condition===false ){
                        arr[k+4].textContent=parseInt(arr[k+4].textContent)+parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;condition=true;
                        score.textContent=parseInt(arr[k+4].textContent)+parseInt(score.textContent);
                    }
                    else if( parseInt(arr[k+4].textContent)===parseInt(arr[k].textContent) && condition===true ){condition===false;}
                    else if(arr[k+4].textContent===""){arr[k+4].textContent=parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;
                    }
                    k+=4;
                }
            }
        }
    }
    if(state){checkingCells();}
}

function up(){
    var state=false;
    var condition = false;
    var k;
    var score = document.getElementById("score");
    for(var i=7; i>3; i-=1){
        condition = false;
        for(var j=i; j<(i+9); j+=4){
            if(arr[j].textContent!==""){
                k=j;
                while(k>=i && 
                (parseInt(arr[k-4].textContent)===parseInt(arr[k].textContent) 
                || arr[k-4].textContent==="")){
                    if( parseInt(arr[k-4].textContent)===parseInt(arr[k].textContent) && condition===false ){
                        arr[k-4].textContent=parseInt(arr[k-4].textContent)+parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;condition=true;
                        score.textContent=parseInt(arr[k-4].textContent)+parseInt(score.textContent);
                    }
                    else if( parseInt(arr[k-4].textContent)===parseInt(arr[k].textContent) && condition===true ){condition===false;}
                    else if(arr[k-4].textContent===""){arr[k-4].textContent=parseInt(arr[k].textContent);
                        arr[k].textContent=""; state=true;
                    }
                    k-=4;
                }
            }
        }
    }
    if(state){checkingCells();}
}
function checkingCells(){
    var x = false;
    var count=0;
    for(var i=0; i<16;i++){
        if(arr[i].textContent===""){
            x=true;count++;
        }
    }
    if(x){
        generatorRandom();
    }
    if(count===1){
        gameFinsihOrNot()
    };
}

function gameFinsihOrNot(){
    var y = false;
    for(var i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(arr[1].textContent===arr[0].textContent||arr[4].textContent===arr[0].textContent){
                    y=true;    
                };
                break;
            case (1):
                if(arr[1].textContent===arr[0].textContent||arr[2].textContent===arr[1].textContent||arr[1].textContent===arr[5].textContent){
                    y=true;    
                };
                break;
            case (2):
                if(arr[2].textContent===arr[1].textContent||arr[3].textContent===arr[2].textContent||arr[2].textContent===arr[6].textContent){
                    y=true; 
                };
                break;
            case (3):
                if(arr[3].textContent===arr[2].textContent||arr[3].textContent===arr[7].textContent){
                    y=true; 
                };
                break;
            case (4):
                if(arr[4].textContent===arr[0].textContent||arr[4].textContent===arr[8].textContent||arr[4].textContent===arr[5].textContent){
                  y=true;   
                };
                break;
            case (5):
                if(arr[5].textContent===arr[1].textContent||arr[5].textContent===arr[6].textContent||arr[4].textContent===arr[5].textContent||arr[5].textContent===arr[9].textContent){
                    y=true; 
                };
                break;
            case (6):
                if(arr[6].textContent===arr[5].textContent||arr[6].textContent===arr[2].textContent||arr[6].textContent===arr[7].textContent||arr[6].textContent===arr[10].textContent){
                    y=true; 
                };
                break;
            case (7):
                if(arr[7].textContent===arr[3].textContent||arr[7].textContent===arr[11].textContent||arr[7].textContent===arr[6].textContent){
                    y=true; 
                };
                break;
            case (8):
                if(arr[8].textContent===arr[4].textContent||arr[8].textContent===arr[12].textContent||arr[8].textContent===arr[9].textContent){
                    y=true; 
                };
                break;
            case (9):
                if(arr[9].textContent===arr[8].textContent||arr[9].textContent===arr[5].textContent||arr[9].textContent===arr[10].textContent||arr[9].textContent===arr[13].textContent){
                    y=true; 
                };
                break;
            case (10):
                if(arr[10].textContent===arr[9].textContent||arr[10].textContent===arr[11].textContent||arr[10].textContent===arr[6].textContent||arr[10].textContent===arr[14].textContent){
                    y=true; 
                };
                break;
            case (11):
                if(arr[11].textContent===arr[7].textContent||arr[11].textContent===arr[15].textContent||arr[11].textContent===arr[10].textContent){
                    y=true; 
                };
                break;
            case (12):
                if(arr[12].textContent===arr[8].textContent||arr[12].textContent===arr[13].textContent){
                    y=true; 
                };
                break;
            case (13):
                if(arr[13].textContent===arr[12].textContent||arr[13].textContent===arr[9].textContent||arr[13].textContent===arr[14].textContent){
                    y=true; 
                };
                break;
            case (14):
                if(arr[14].textContent===arr[13].textContent||arr[14].textContent===arr[10].textContent||arr[14].textContent===arr[15].textContent){
                    y=true; 
                };
                break;
            case (15):
                if(arr[15].textContent===arr[11].textContent||arr[15].textContent===arr[14].textContent){
                    y=true; 
                };
                break;
        }
    }
    if(!y){end();}
}   


function checkingCells(){
    var x = false;
    var count=0;
    for(var i=0; i<16;i++){
        if(arr[i].innerHTML===""){
            x=true;count++;
        }
    }
    if(x){
        generatorRandom();
    }
    if(count===1){
        gameFinsihOrNot()
    };
}

function gameFinsihOrNot(){
    var y = false;
    for(var i =0 ;i<16;i++){
        switch(i){
            case (0):
                if(arr[1].textContent===arr[0].textContent||arr[4].textContent===arr[0].textContent){
                    y=true;    
                };
                break;
            case (1):
                if(arr[1].textContent===arr[0].textContent||arr[2].textContent===arr[1].textContent||arr[1].textContent===arr[5].textContent){
                    y=true;    
                };
                break;
            case (2):
                if(arr[2].textContent===arr[1].textContent||arr[3].textContent===arr[2].textContent||arr[2].textContent===arr[6].textContent){
                    y=true; 
                };
                break;
            case (3):
                if(arr[3].textContent===arr[2].textContent||arr[3].textContent===arr[7].textContent){
                    y=true; 
                };
                break;
            case (4):
                if(arr[4].textContent===arr[0].textContent||arr[4].textContent===arr[8].textContent||arr[4].textContent===arr[5].textContent){
                  y=true;   
                };
                break;
            case (5):
                if(arr[5].textContent===arr[1].textContent||arr[5].textContent===arr[6].textContent||arr[4].textContent===arr[5].textContent||arr[5].textContent===arr[9].textContent){
                    y=true; 
                };
                break;
            case (6):
                if(arr[6].textContent===arr[5].textContent||arr[6].textContent===arr[2].textContent||arr[6].textContent===arr[7].textContent||arr[6].textContent===arr[10].textContent){
                    y=true; 
                };
                break;
            case (7):
                if(arr[7].textContent===arr[3].textContent||arr[7].textContent===arr[11].textContent||arr[7].textContent===arr[6].textContent){
                    y=true; 
                };
                break;
            case (8):
                if(arr[8].textContent===arr[4].textContent||arr[8].textContent===arr[12].textContent||arr[8].textContent===arr[9].textContent){
                    y=true; 
                };
                break;
            case (9):
                if(arr[9].textContent===arr[8].textContent||arr[9].textContent===arr[5].textContent||arr[9].textContent===arr[10].textContent||arr[9].textContent===arr[13].textContent){
                    y=true; 
                };
                break;
            case (10):
                if(arr[10].textContent===arr[9].textContent||arr[10].textContent===arr[11].textContent||arr[10].textContent===arr[6].textContent||arr[10].textContent===arr[14].textContent){
                    y=true; 
                };
                break;
            case (11):
                if(arr[11].textContent===arr[7].textContent||arr[11].textContent===arr[15].textContent||arr[11].textContent===arr[10].textContent){
                    y=true; 
                };
                break;
            case (12):
                if(arr[12].textContent===arr[8].textContent||arr[12].textContent===arr[13].textContent){
                    y=true; 
                };
                break;
            case (13):
                if(arr[13].textContent===arr[12].textContent||arr[13].textContent===arr[9].textContent||arr[13].textContent===arr[14].textContent){
                    y=true; 
                };
                break;
            case (14):
                if(arr[14].textContent===arr[13].textContent||arr[14].textContent===arr[10].textContent||arr[14].textContent===arr[15].textContent){
                    y=true; 
                };
                break;
            case (15):
                if(arr[15].textContent===arr[11].textContent||arr[15].textContent===arr[14].textContent){
                    y=true; 
                };
                break;
        }
    }
    if(!y){end();}
}   


function end(){
    alert("Your Score Is:"+document.getElementById("score").textContent+" Game Over");
    reset();
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