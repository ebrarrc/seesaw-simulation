import { pivot } from "./globals.js";

let prevBallCount = 0;

export function addValue() {
    const balls = document.querySelectorAll(".ball");
    if(balls.length === prevBallCount) return;
    prevBallCount = balls.length;

    const leftTotal = document.getElementById("leftTotal");
    const rightTotal = document.getElementById("rightTotal");
    const weightLocInfoContainer = document.querySelector(".weight-locations-container");

    const pivotArea = pivot.getBoundingClientRect();
    const pivotCenterX = pivotArea.left + pivotArea.width / 2;
    
    let totalLeftWeight = 0;
    let totalRightWeight = 0;

    weightLocInfoContainer.innerHTML = "";

    balls.forEach((ball, index) => {
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