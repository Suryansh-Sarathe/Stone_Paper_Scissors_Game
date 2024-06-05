let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".a");

let hiddenMessage= document.querySelector(".replace");
let messageCont= document.querySelector(".message");
let pick=document.querySelector(".pick");

function compChoice(){
    let arrChoice=["rock","paper","scissor"];
    let i= Math.floor(Math.random()*3);
    return arrChoice[i];
}

function playGame(choiceId){
    let compId = compChoice();
    pick.classList.add("hide");
    hiddenMessage.classList.remove("hide");
    
    if(choiceId==="rock" && compId==="scissor")
           { hiddenMessage.innerText="You won! Rock Beats paper";
        userScore++;}
    else if(choiceId==="paper" && compId==="rock")
        {hiddenMessage.innerText="You won! Paper beats Rock";
    userScore++;}
    else if(choiceId==="scissor" && compId==="paper")
        {hiddenMessage.innerText="You won! Scissor cuts paper";
    userScore++;}
    else if(choiceId===compId)
        hiddenMessage.innerText="Draw";
    else 
    {hiddenMessage.innerText="You lost!";
    compScore++;}
    document.querySelector("#userScore").innerText= userScore;
    document.querySelector("#compScore").innerText= compScore;
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
})