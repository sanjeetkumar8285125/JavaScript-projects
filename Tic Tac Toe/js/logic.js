window.addEventListener('load',bindevents);
let flag="X";
let bx1,bx2,bx3,bx4,bx5,bx6,bx7,bx8,bx9;
var turn=document.getElementById("turn");
function bindevents()
{
bx1=document.querySelector("#box1")
bx1.addEventListener('click',getsign);
bx2=document.querySelector("#box2")
bx2.addEventListener('click',getsign);
bx3=document.querySelector("#box3")
bx3.addEventListener('click',getsign);
bx4=document.querySelector("#box4")
bx4.addEventListener('click',getsign);
bx5=document.querySelector("#box5")
bx5.addEventListener('click',getsign);
bx6=document.querySelector("#box6")
bx6.addEventListener('click',getsign);
bx7=document.querySelector("#box7")
bx7.addEventListener('click',getsign);
bx8=document.querySelector("#box8")
bx8.addEventListener('click',getsign);
bx9=document.querySelector("#box9")
bx9.addEventListener('click',getsign);

document.querySelector("#reset").addEventListener('click',play_again);
}
function show_Winner(b1,b2,b3)
{
b1.style.background="red";
b2.style.background="red";
b3.style.background="red";
turn.innerText=b1.innerText+" won the game";
}
function winner(){
   if(bx1.innerText !="" && bx1.innerText == bx2.innerText && bx1.innerText == bx3.innerText)
    show_Winner(bx1,bx2,bx3);
    else if(bx4.innerText !="" && bx4.innerText == bx5.innerText && bx4.innerText == bx6.innerText)
    show_Winner(bx4,bx5,bx6);
    else if(bx7.innerText !="" && bx7.innerText == bx8.innerText && bx7.innerText == bx9.innerText)
    show_Winner(bx7,bx8,bx9);
    else if(bx1.innerText !="" && bx1.innerText == bx4.innerText && bx1.innerText == bx7.innerText)
    show_Winner(bx1,bx4,bx7);
    else if(bx2.innerText !="" && bx2.innerText == bx5.innerText && bx2.innerText == bx8.innerText)
    show_Winner(bx2,bx5,bx8);
    else if(bx3.innerText !="" && bx3.innerText == bx6.innerText && bx3.innerText == bx9.innerText)
    show_Winner(bx3,bx6,bx9);
    else if(bx1.innerText !="" && bx1.innerText == bx5.innerText && bx1.innerText == bx9.innerText)
    show_Winner(bx1,bx5,bx9);
    else if(bx3.innerText !="" && bx3.innerText == bx5.innerText && bx3.innerText == bx7.innerText)
    show_Winner(bx3,bx5,bx7);
    else{
        if(bx1.innerText!="" && bx2.innerText!="" && bx3.innerText!="" 
        && bx4.innerText!="" && bx5.innerText!="" && bx6.innerText!="" 
        && bx7.innerText!="" && bx8.innerText!="" && bx9.innerText!="" )
        turn.innerText="Match Draw";
    }
}
function getsign()
{
    if(this.innerText=="")
    {
        this.innerText=flag;
        traverse_sign();
        turn.innerText=flag+" turn";
        winner();
    }
        
}
function traverse_sign()
{
    if(flag=="X")
    flag="O";
    else
    flag="X";
}
function play_again(){
  for(var i=1;i<=9;i++)
  {
      document.getElementById("box"+i).innerText="";
      document.getElementById("box"+i).style.background="none";    
  }
  turn.innerText="Play";
}