var colorFill = "#00ff00"
var x = 50
var a = 0
var b = -500
var c = -1000
var d = -1500
var e = -2000
var f = -2500
var points = 0
/* This function is called once, when the page loads. Anything that you want to show up initially should be created here! To start out, try drawing some shapes. */
function setup() {
createCanvas(800, 600)
background("#ffffff")
}

/* This function is called over and over again by P5. Animation should happen here! */
function draw() {
background("#ffffff")
if (a == 550 && x <= 400 || a == 550 && x >= 500) {
colorFill = "#ffffff"
ellipse(x, 550, 20, 20)
}else if (b == 550 && x <= 100 || b == 550 && x >= 200) {
colorFill = "#ffffff"
ellipse(x, 550, 20, 20)
}else if (c == 550 && x <= 700 || c == 550 && x >= 800) {
colorFill = "#ffffff"
ellipse(x, 550, 20, 20)
}else if (d == 550 && x <= 300 || d == 550 && x >= 400) {
colorFill = "#ffffff"
ellipse(x, 550, 20, 20)
}else if (e == 550 && x <= 600 || e == 550 && x >= 700) {
colorFill = "#ffffff"
ellipse(x, 550, 20, 20)
}else if (f == 550 && x <= 0 || f == 550 && x >= 100) {
colorFill = "#ffffff"
ellipse(x, 550, 20, 20)
}else if (a == 550 && x >= 400 || a == 550 && x <= 500) {
points++
}else if (b == 550 && x >= 100 || b == 550 && x <= 200) {
points++
}else if (c == 550 && x >= 700 || c == 550 && x <= 800) {
points++
}else if (d == 550 && x >= 300 || d == 550 && x <= 400) {
points++
}else if (e == 550 && x >= 600 || e == 550 && x <= 700) {
points++
}else if (f == 550 && x >= 0 || f == 550 && x <= 100) {
points++
}
fill(colorFill)
stroke(colorFill)
ellipse(x, 550, 20, 20)
stroke("#000000")
line(100, 0, 100, 800)
line(200, 0, 200, 800)
line(300, 0, 300, 800)
line(400, 0, 400, 800)
line(500, 0, 500, 800)
line(600, 0, 600, 800)
line(700, 0, 700, 800)
fill("#ff0000")
rect(0, a += 10, 100, 50)
rect(100, a, 100, 50)
rect(200, a, 100, 50)
rect(300, a, 100, 50)
rect(500, a, 100, 50)
rect(600, a, 100, 50)
rect(700, a, 100, 50)
rect(0, b += 10, 100, 50)
rect(200, b, 100, 50)
rect(300, b, 100, 50)
rect(400, b, 100, 50)
rect(500, b, 100, 50)
rect(600, b, 100, 50)
rect(700, b, 100, 50)
rect(0, c += 10, 100, 50)
rect(100, c, 100, 50)
rect(200, c, 100, 50)
rect(300, c, 100, 50)
rect(400, c, 100, 50)
rect(500, c, 100, 50)
rect(600, c, 100, 50)
rect(0, d += 10, 100, 50)
rect(100, d, 100, 50)
rect(200, d, 100, 50)
rect(400, d, 100, 50)
rect(500, d, 100, 50)
rect(600, d, 100, 50)
rect(700, d, 100, 50)
rect(0, e += 10, 100, 50)
rect(100, e, 100, 50)
rect(200, e, 100, 50)
rect(300, e, 100, 50)
rect(400, e, 100, 50)
rect(500, e, 100, 50)
rect(700, e, 100, 50)
rect(100, f += 10, 100, 50)
rect(200, f, 100, 50)
rect(300, f, 100, 50)
rect(400, f, 100, 50)
rect(500, f, 100, 50)
rect(600, f, 100, 50)
rect(700, f, 100, 50)
document.getElementById("score").innerHTML = "Points: " + points
}

function keyPressed() {
if (keyCode === 68 && x != 750) {
x += 100;
}else if (keyCode === 65 && x != 50) {
x -= 100;
}
}

