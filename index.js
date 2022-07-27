let countH=0
let countA=0
let countHome=document.getElementById("home-score")
let countAway=document.getElementById("away-score")

function increment1home()
{
    countH=countH+1
    countHome.innerText=countH
}

function increment2home()
{
    countH=countH+2
    countHome.innerText=countH
}

function increment3home()
{
    countH=countH+3
    countHome.innerText=countH
}

function increment1away()
{
    countA=countA+1
    countAway.innerText=countA
}

function increment2away()
{
    countA=countA+2
    countAway.innerText=countA
}

function increment3away()
{
    countA=countA+3
    countAway.innerText=countA
}


function reset(){
    countH=0
    countA=0
    countHome.innerText=0
    countAway.innerText=0
}