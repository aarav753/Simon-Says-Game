let gameSeq=[];
let userSeq=[];
let level=0;
let started =false;
let h2=document.querySelector("h2");
let btns=document.querySelectorAll(".btn");
let high=document.querySelector("#high"); 
let highscore=0;
document.addEventListener("keypress",function(){
    if(started==false){
        started =true;
        levelup();
    }
});
function levelup(){
    userSeq=[];
level++;
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*4);
let btn=btns[randIdx];
gameSeq.push(btn.id);
showsequence();
}
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},200)}
function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash");
},200)}
function btnpress(){
    if(gameSeq.length==0){
        return;
    }
 let btn=this;
 userFlash(btn);
 userSeq.push(btn.id);
 checkAns(userSeq.length-1);
}
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",btnpress);
}
function checkAns(idx){
if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length)
    {
   setTimeout( levelup,500);
    }   
}
else{
    h2.innerHTML=`Game Over! Your Score:<b>${level-1}</b><br>Press Any key to Start`;
    if(level>highscore){
        highscore=level-1;
        high.innerText=`HighScore:${highscore}`;
      high.classList.add("yayy");
      setTimeout(function(){
     high.classList.remove("yayy");
      },2000);
    }

    let body=document.querySelector("body");
    body.classList.add("wrong");
    setTimeout(function(){
        body.classList.remove("wrong")
    },250);
    reset();
}
}
function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
function showsequence(){
 for(let i=0;i<gameSeq.length;i++){
    setTimeout(function(){
let sa=document.querySelector(`#${gameSeq[i]}`);
    gameFlash(sa);
    },600*i);
 }
}