
// Global variables
var canvas = document.getElementById("myCanvas");
var clearButton = document.getElementById("clear");
var sizeDownButton = document.getElementById("sizeDown");
var sizeUpButton = document.getElementById("sizeUp");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var isDrawing = false;
var context = canvas.getContext("2d"); // Need the context of the canvas to draw to the canvas

context.strokeStyle = "red";
context.lineCap = "round";
context.lineWidth = 5;


red.onclick = function() {
  context.strokeStyle = "red";
}

green.onclick = function() {
  context.strokeStyle = "green";
}

blue.onclick = function() {
  context.strokeStyle = "blue";
}

canvas.onmousedown = function(e) {
  isDrawing = true;

  context.beginPath();

  context.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
}