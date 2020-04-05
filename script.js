let etchASketchContainer = document.getElementById('etch-a-sketch-container') 
let rows = document.querySelector('#etch-a-sketch-container').children;
let color = getRandomColor;

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
  if(color === getRandomColor){
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
    color = blackColor;
    makeGrid(27);
   