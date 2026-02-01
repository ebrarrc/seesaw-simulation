import { pivotCenterX , leftTotal , rightTotal } from "./globals.js";

let prevBallCount = 0;

export function addValue() {
    const balls = document.querySelectorAll(".ball");
    if(balls.length === prevBallCount) return;
    prevBallCount = balls.length;

    const weightLocInfoContainer = document.querySelector(".weight-location-container");

    let totalLeftWeight = 0;
    let totalRightWeight = 0;

    weightLocInfoContainer.innerHTML = "";

    balls.forEach((ball) => {
        const ballArea = ball.getBoundingClientRect();
        const ballCenterX = ballArea.left + ballArea.width / 2;
        const weight = Number(ball.textContent)  || 0;

        const distance = Math.round(ballCenterX - pivotCenterX);

        if(distance < 0){
            totalLeftWeight += weight;
        }
        else{
            totalRightWeight += weight;
        }

        const weightLocExpContainer = document.createElement("div");
        const weightLocExp = document.createElement("p");
        weightLocExp.textContent = `The ball landed ${Math.abs(distance)}px ${distance < 0 ? "left" : "right"} from the center`;
        weightLocExpContainer.appendChild(weightLocExp);

        weightLocInfoContainer.appendChild(weightLocExpContainer);
    })

    leftTotal.textContent = totalLeftWeight + "kg";
    rightTotal.textContent = totalRightWeight + "kg";

}

setInterval(() =>{
    addValue();
},50);