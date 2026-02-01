import { leftTotal , rightTotal ,seesawPlank } from "./globals.js";

export function resetSeesaw() {

  document.querySelectorAll(".ball").forEach(ball => ball.remove());

  seesawPlank.style.transform = "rotate(0deg)";

  localStorage.removeItem("seesawBalls");
  localStorage.removeItem("upcomingWeight");

  if (leftTotal) leftTotal.textContent = "0kg";
  if (rightTotal) rightTotal.textContent = "0kg";
}


document
  .querySelector(".seesaw-reset-button")
  .addEventListener("click", () => {
    resetSeesaw();
  });
