let etchASketchContainer = document.getElementById('etch-a-sketch-container')
let RandomColors = document.getElementById('random-color');
let blackWhite = document.getElementById('black-white');
let ColorPicker = document.getElementById("color-picker")
let rows = document.querySelector('#etch-a-sketch-container').children;
let reset = document.getElementById('reset')
let changeSize = document.getElementById('change-size');
let color = blackColor;



reset.addEventListener('click', function(){ location.reload();})
RandomColors.addEventListener('click', function(){ color = getRandomColor})
blackWhite.addEventListener('click', function(){ color = blackColor})
ColorPicker.addEventListener('click', function(){color = colorPicker})
changeSize.addEventListener('click', function(){ newSize()})

/* makes the grid depending on inputs */
function makeGrid(num){
for(var i = 0; i < num; i++){
    let row = document.createElement('div');
    row.className = "row";
    etchASketchContainer.appendChild(row);
    for(var j = 0; j < num; j++){
        let box = document.createElement('div');
        box.className = "box";
        box.style.opacity = 0;
        row.appendChild(box);
    }
  }
  addColor();
}

/* adds the color to each square */
function addColor(){
Array.from(rows).forEach(row => {
    Array.from(row.children).forEach(box => {
        box.addEventListener("mouseenter", function(e){   
            let opacityValue = e.target.style.opacity;
            e.target.style.opacity = setOpacity(opacityValue);
            e.target.style.backgroundColor =  color();
           ;})  
        }
    )
    });
}   
 
/* to set opacity depending on sketch mode */
function setOpacity(opacityValue){
  if(color === getRandomColor || color === colorPicker){
    return 1;
  } else if(opacityValue < 1) {
    return (parseFloat(opacityValue) + 0.1)
  } else{
    return;
  }
}

/* selects random color */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

/* selects black as function needs to be called  */

  function blackColor(){  
    return "black";
  }

  function colorPicker(){
    return document.getElementById("color-picker").value;
}  

function newSize(){
  let squareSize = document.getElementById('square-size').value;
  console.log(squareSize)
  etchASketchContainer.innerHTML = "";
  makeGrid(squareSize);

}
    makeGrid(16);
   