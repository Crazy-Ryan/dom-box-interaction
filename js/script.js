var fixedBox = document.getElementById("fixed-box");
var draggedBox = document.getElementById("dragged-box");
var containerBox = document.getElementById("container");
var initialOffsetX = 0;
var initialOffsetY = 0;
var maxX = containerBox.offsetWidth - draggedBox.offsetWidth;
var maxY = containerBox.offsetHeight - draggedBox.offsetHeight;
var isDragging = false;

var mouseDown = function (event) {
  initialOffsetX = event.clientX - (draggedBox.offsetLeft + containerBox.offsetLeft);
  initialOffsetY = event.clientY - (draggedBox.offsetTop + containerBox.offsetTop);
  isDragging = true;
}

var mouseDrag = function (event) {
  if (isDragging === true) {
    setPosition(event);
    changeColor();
  }
}

var mouseUp = function () {
  isDragging = false;
}

var setPosition = function (event) {
  positionX = event.clientX - containerBox.offsetLeft - initialOffsetX;
  positionY = event.clientY - containerBox.offsetTop - initialOffsetY;
  positionX = Math.min(maxX, Math.max(0, positionX));
  positionY = Math.min(maxY, Math.max(0, positionY));
  draggedBox.style.left = positionX + 'px';
  draggedBox.style.top = positionY + 'px';
}

var changeColor = function () {
  dragBox = draggedBox.getBoundingClientRect();
  fixBox = fixedBox.getBoundingClientRect();
  if (!(((dragBox.right <= fixBox.left) || (dragBox.left >= fixBox.right)))
    && (!((dragBox.bottom <= fixBox.top) || (dragBox.top >= fixBox.bottom)))) {
    fixedBox.style.backgroundColor = 'blue';
  }
  else {
    fixedBox.style.backgroundColor = 'yellow';
  }
}

draggedBox.addEventListener("mousedown", mouseDown);
document.addEventListener("mousemove", mouseDrag);
document.addEventListener("mouseup", mouseUp);
