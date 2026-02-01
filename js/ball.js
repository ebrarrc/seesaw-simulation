import {colors , sizes, ballFallArea , seesawPlank , pivotCenterX} from "./globals.js";
import { saveStorage } from "./storage.js";

let upcomingWeight = Math.floor(Math.random() * 10) + 1;
const nextWeight = document.getElementById("nextWeight");
nextWeight.textContent = upcomingWeight + "kg";

export function createBall(clickLocX , seesawPlankTopPoint, isLoading = false, savedWeight = null){
    const ball = document.createElement("div");
    ball.classList.add("ball");

   const weight = isLoading ? savedWeight : upcomingWeight;
   ball.textContent = weight;

   if(!isLoading){
    upcomingWeight = Math.floor(Math.random() * 10) + 1;
    nextWeight.textContent = upcomingWeight + "kg";
   }

   ball.style.top = "0px";
   ball.style.transform = `translateX(${clickLocX}px)`;
   ball.style.backgroundColor = colors[weight];
   ball.style.width = sizes[weight];
   ball.style.height = sizes[weight];

   ballFallArea.appendChild(ball);

   setTimeout(() => {
    ball.style.top = `${seesawPlankTopPoint}px`;

    const ballArea = ball.getBoundingClientRect();
    const ballCenterX = ballArea.left + ballArea.width / 2;

    if(!isLoading){
        ball.dataset.offsetX = ballCenterX - pivotCenterX;
        ball.dataset.weight = weight;
        saveStorage(upcomingWeight);
    }
},50);
    return ball;

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