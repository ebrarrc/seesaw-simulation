import {colors , sizes, ballFallArea , seesawPlank , pivot} from "./globals.js";

let upcomingWeight = Math.floor(Math.random() * 10) + 1;
const nextWeight = document.getElementById("nextWeight");
nextWeight.textContent = upcomingWeight + "kg";

export function createBall(clickLocX , seesawPlankTopPoint){
    const ball = document.createElement("div");
    ball.classList.add("ball");

   const weight = upcomingWeight;
   ball.textContent = weight;

   ball.style.top = "0px";
   ball.style.transform = `translateX(${clickLocX}px)`;
   ball.style.backgroundColor = colors[weight];
   ball.style.width = sizes[weight];
   ball.style.height = sizes[weight];

   ballFallArea.appendChild(ball);

   setTimeout(() => {
    ball.style.top = `${seesawPlankTopPoint}px`;

    const pivotArea = pivot.getBoundingClientRect();
    const ballArea = ball.getBoundingClientRect();

    const pivotCenterX = pivotArea.left + pivotArea.width / 2;
    const ballCenterX = ballArea.left + ballArea.width / 2;

    return ball;

   })

}



export function displayBall (){
    ballFallArea.addEventListener("click",function(event) {
        const fallArea = ballFallArea.getBoundingClientRect();
        const clickLocX = event.clientX - fallArea.left;
        
        const seesawPlankArea = seesawPlank.getBoundingClientRect();
        
        let seesawPlankTopPoint = seesawPlankArea.top - 10;
        createBall(clickLocX , seesawPlankTopPoint)
    })
}

displayBall();