export const ballFallArea = document.querySelector(".ball-fall-area");
export const seesawPlank = document.querySelector(".seesaw-plank");
export const pivot = document.querySelector(".seesaw-pivot");
export   const leftTotal = document.getElementById("leftTotal");
export    const rightTotal = document.getElementById("rightTotal");
const pivotArea = pivot.getBoundingClientRect();
export const pivotCenterX = pivotArea.left + pivotArea.width / 2;
export const pivotCenterY = pivotArea.top + pivotArea.height / 2;

export const colors = {
  1: '#8A244B', 2: '#9BC264', 3: '#982598',
  4: '#FF7F11', 5: '#FF5FCF', 6: '#161E54',
  7: '#0D4715', 8: '#0097a7', 9: '#393D7E', 10: '#D34E4E'
}

export const sizes = {
  1: '20px', 2: '25px', 3: '30px', 4: '35px', 5: '40px',
  6: '45px', 7: '50px', 8: '55px', 9: '60px', 10: '65px'
}