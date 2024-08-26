let gameSequence=[];
let userSequence=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow", "red", "purple", "green"];
document.addEventListener("keypress", function(){
    if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSequence=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3)
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    console.log(randColor);
    console.log(randIdx);
    console.log(randbtn);
    gameSequence.push(randColor);
   btnFlash(randbtn);

}
function checkAns(idx){
    
    if(userSequence[idx]===gameSequence[idx]){
       if(userSequence.length==gameSequence.length){

       setTimeout(levelUp, 1000);
       }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";

        }, 500);
        reset();

    }
}
function btnPress(){
   let btn=this;
   userflash(btn);
   userColor=btn.getAttribute("id");
   console.log(userColor);
   userSequence.push(userColor);
   checkAns(userSequence.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameSequence=[];
    userSequence=[];
    level=0;
}
