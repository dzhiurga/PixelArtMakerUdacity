function makeGrid() {
  //assigns input values to variables
  var heightInput = document.getElementById('inputHeight').value;
  var widthInput = document.getElementById('inputWidth').value;
  //assigns table element to variable
  var canvas = document.getElementById('pixelCanvas');
  canvas.innerHTML = '';
  //creates the rows and columns of the table
  for (let x = 0; x < heightInput; x++) {
    var row = document.createElement('tr');
    for (let y = 0; y < widthInput; y++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
    };
    row.addEventListener('click', addColor); // on click calls function addColor
    row.addEventListener('dblclick', removeColor); // on doubleclick calls function removeColor
    canvas.appendChild(row);
  };
};

// changes the collor of the cell
function addColor(event) {
  var colorInput = document.getElementById("colorPicker").value;
  event.target.style.backgroundColor = colorInput;
};

//changes the collor of the cell to white
function removeColor(event) {
  const colorInput = document.getElementById("colorPicker").value;
  event.target.style.backgroundColor = "white";
}

//calls MakeGrid fuction on submit
document.querySelector('form').addEventListener('submit', function(event){
  makeGrid();
  event.preventDefault();
});
