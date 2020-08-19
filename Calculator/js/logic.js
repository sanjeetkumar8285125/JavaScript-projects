window.addEventListener('load',bindevents);
let btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btnobr,btncbr,btnAC,btnadd,btnmul,btndiv,btnmod,btnsub,btneql,btndot;
let x;
function bindevents()
{
    btnobr=document.querySelector("#btnobr");
    btnobr.addEventListener('click',show);
    btncbr=document.querySelector("#btncbr");
    btncbr.addEventListener('click',show);
    btnmod=document.querySelector("#btnmod");
    btnmod.addEventListener('click',show);
    btnAC=document.querySelector("#btnAC");
    btnAC.addEventListener('click',clear);
    btn1=document.querySelector("#btn1");
    btn1.addEventListener('click',show);
    btn2=document.querySelector("#btn2");
    btn2.addEventListener('click',show);
    btn3=document.querySelector("#btn3");
    btn3.addEventListener('click',show);
    btn4=document.querySelector("#btn4");
    btn4.addEventListener('click',show);
    btn5=document.querySelector("#btn5");
    btn5.addEventListener('click',show);
    btn6=document.querySelector("#btn6");
    btn6.addEventListener('click',show);
    btn7=document.querySelector("#btn7");
    btn7.addEventListener('click',show);
    btn8=document.querySelector("#btn8");
    btn8.addEventListener('click',show);
    btn9=document.querySelector("#btn9");
    btn9.addEventListener('click',show);
    btn0=document.querySelector('#btn0');
    btn0.addEventListener('click',show);
    btnadd=document.querySelector("#btnadd");
    btnadd.addEventListener('click',show);
    btnsub=document.querySelector("#btnsub");
    btnsub.addEventListener('click',show);
    btnmul=document.querySelector("#btnmul");
    btnmul.addEventListener('click',show);
    btndiv=document.querySelector("#btndiv");
    btndiv.addEventListener('click',show);
    btneql=document.querySelector("#btneql");
    btneql.addEventListener('click',calculate);
    btndot=document.querySelector("#btndot");
    btndot.addEventListener('click',show);
}
function show(){
x=document.getElementById('txtbox');
x.value+=this.innerText;
}

function calculate()
{   
d1.innerText=x.value+"=";
x.value=eval(x.value);
}
function clear()
{
    x.value="";
    d1.innerText="";
}
