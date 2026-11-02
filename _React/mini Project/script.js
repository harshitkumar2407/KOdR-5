const canvas = document.querySelector("#canvas");

let isDrawing = false;

let startX = 0;
let startY = 0;

let rectangle = null;
let circle = null;




// canvas.addEventListener("mousedown",(e) =>{
//     isDrawing =true;
//     const circle = canvas.getBoundingClientRect()

//     startX = e.clientX - circle.left;
//     startY = e.clientY - circle.top;

//     circle = document.createElement("div");

//     circle.classList.add("circle")

// })


// Mouse down → start recording
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;

  const rect = canvas.getBoundingClientRect();

  startX = e.clientX - rect.left;
  startY = e.clientY - rect.top;

  rectangle = document.createElement("div");

  rectangle.classList.add("shape");

  rectangle.style.left = `${startX}px`;
  rectangle.style.top = `${startY}px`;

  canvas.appendChild(rectangle);
});

// Mouse move → update rectangle
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  const rect = canvas.getBoundingClientRect();

  const currentX = e.clientX - rect.left;
  const currentY = e.clientY - rect.top;

  const width = currentX - startX;
  const height = currentY - startY;

  rectangle.style.width = `${Math.abs(width)}px`;
  rectangle.style.height = `${Math.abs(height)}px`;

  // Allow drawing in any direction
  rectangle.style.left = `${Math.min(startX, currentX)}px`;
  rectangle.style.top = `${Math.min(startY, currentY)}px`;
});

// Mouse up → stop recording
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  rectangle = null;
});