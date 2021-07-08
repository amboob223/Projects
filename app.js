const result = document.querySelector(".result");
const answer = document.querySelector(".ann");


function getRandomChoice(){
    let choices = ["yes", "no"];
    randomIndex = Math.floor(Math.random() * 2);
    return randomChoice = choices[randomIndex];
    
}
getRandomChoice();


result.addEventListener("click",function(){
    let ran = getRandomChoice(); // we had to make the varibale in the function
    answer.innerHTML = ran

})