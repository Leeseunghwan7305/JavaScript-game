let circle = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {
  let left = 0;
  let top = 0;
  left = e.clientX;
  top = e.clientY;
  circle.style.left = left + "px";
  circle.style.top = top + "px";
  circle.innerHTML = `left= ${left} top= ${top}`;
});
