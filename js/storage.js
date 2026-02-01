import { ballFallArea , seesawPlank , pivotCenterX} from "./globals.js";
import { createBall } from "./ball.js";

export function saveStorage(upcomingWeight){
    const balls = document.querySelectorAll(".ball");

    const data = Array.from(balls).map(ball => ({
        offset : Number(ball.dataset.offsetX),
        weight : Number(ball.dataset.weight)
    }))


    localStorage.setItem("seesawBalls" , JSON.stringify(data));
    localStorage.setItem("upcomingWeight" , upcomingWeight);
}

export function getStorage(upcomingWeight){
    const saved = JSON.parse(localStorage.getItem("seesawBalls") || "[]");
    const savedUpcomingWeight = localStorage.getItem("upcomingWeight");

    if(savedUpcomingWeight){
        upcomingWeight = Number(savedUpcomingWeight);
        nextWeight.textContent = upcomingWeight + "kg";
    }

    const containerArea = ballFallArea.getBoundingClientRect();
    const seesawPlankArea = seesawPlank.getBoundingClientRect();
    const seesawPlankTopPoint = seesawPlankArea.top - 10;

    saved.forEach(element => {
        const clickLocX = (pivotCenterX + element.offset) - containerArea.left;

        const newBall = createBall(clickLocX, seesawPlankTopPoint , true , element.weight);

        newBall.dataset.offsetX = element.offset;
        newBall.dataset.weight = element.weight;
    });
}

getStorage();