var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("header__message");
var infoBoard = document.getElementById("header__info-board");
var resetButton = document.querySelector("#reset");
var colorDisplay = document.querySelector("span");
var modeButtons = document.querySelectorAll(".mode")

init();

function init() {
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "easy" ? numSquares = 3 : numSquares = 9;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add clickListeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to picked colod
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "You are correct!";
                resetButton.textContent = "Play again?";
                infoBoard.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Not this one!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else
            squares[i].style.display = "none";
    }
    infoBoard.style.backgroundColor = "steelblue";
    resetButton.textContent = "new colors";
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(x) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = x;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(x) {
    //make an arr
    var arr = [];
    //add num random colors to arr
    for (var i = 0; i < x; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return the arr
    return arr;
}

function randomColor() {
    //pick red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}