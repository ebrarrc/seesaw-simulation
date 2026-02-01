import { pivot , seesawPlank } from "./globals.js";

export function calculateTorque() {
    const balls = document.querySelectorAll(".ball");
    const pivotArea = pivot.getBoundingClientRect();
    const pivotCenterX = pivotArea.left + pivotArea.width / 2;
    const pivotCenterY = pivotArea.top + pivotArea.height / 2;

    let totalLeftTorque = 0;
    let totalRightTorque = 0;

    balls.forEach((ball) =>{
        const ballArea = ball.getBoundingClientRect();
        const ballCenterX = ballArea.left + ballArea.width / 2;
        const weight = Number(ball.textContent);

        if(ballCenterX > pivotCenterX){
            totalRightTorque += (ballCenterX - pivotCenterX) * weight;
        }
        else {
             totalLeftTorque += (pivotCenterX - ballCenterX) * weight;
        }
    })

    let angle = Math.max(-30, Math.min(30, (totalRightTorque - totalLeftTorque) / 10));

    if(totalLeftTorque === totalRightTorque) angle = 0;

    seesawPlank.style.transform = `rotate(${angle}deg)`;


    //topların plank açısına göre konumlarının ayarlanması için
    const angleRadian = angle * Math.PI / 180;
    const plankThick = seesawPlank.offsetHeight / 2;
    const standAbove = 12;

    balls.forEach((ball) =>{
        if(!ball.dataset.offsetX) return;

        const offsetX = Number(ball.dataset.offsetX);
        const radius = ball.offsetHeight / 2;

        const surfaceY = pivotCenterY + Math.tan(angleRadian) * offsetX - plankThick;

        ball.style.top = `${surfaceY - radius - standAbove}px`;
    })
}

setInterval(calculateTorque, 50);