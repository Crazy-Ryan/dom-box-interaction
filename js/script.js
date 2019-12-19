var fixedBox = document.getElementById("fixed-box");
var draggedBox = document.getElementById("dragged-box");
var containerBox = document.getElementById("container");
var mouseOffsetX = 0;
var mouseOffsetY = 0;
var maxMoveX = containerBox.offsetWidth - draggedBox.offsetWidth;
var maxMoveY = containerBox.offsetHeight - draggedBox.offsetHeight;

var isDragging = false;

var mouseDown = function (event) {
  mouseOffsetX = event.clientX - (draggedBox.offsetLeft + containerBox.offsetLeft);
  mouseOffsetY = event.clientY - (draggedBox.offsetTop + containerBox.offsetTop);
  isDragging = true;

  console.log("start");
}

var mouseDrag = function (event) {
  if (isDragging === true) {
    moveX = event.clientX - containerBox.offsetLeft - mouseOffsetX;
    moveY = event.clientY - containerBox.offsetTop - mouseOffsetY;
    console.log(moveX);
    console.log(moveY)
    moveX = Math.min(maxMoveX, Math.max(0, moveX));
    moveY = Math.min(maxMoveY, Math.max(0, moveY));
    draggedBox.style.left = moveX + 'px';
    draggedBox.style.top = moveY + 'px';
  }
}

var mouseUp = function () {
  if (isDragging === true) {
    isDragging = false;
  }
  console.log("stop");
}


draggedBox.addEventListener("mousedown", mouseDown);
document.addEventListener("mousemove", mouseDrag);
document.addEventListener("mouseup", mouseUp);
