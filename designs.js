// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var ttt;
var colmn;
var row;

function myfunction(i,j){
	 var x = document.getElementById("pixelCanvas").rows[i].cells;
     x[j].style.background = document.getElementById("colorPicker").value;
	      
       }

function makeGrid() {
var valuewidth = document.getElementById("inputWidth").value;
var valueheigh = document.getElementById("inputHeight").value;
var table = document.getElementById("pixelCanvas");
  	  	table.innerHTML='';

  for(var i =0;i<valueheigh;i++){
  	 colmn = document.createElement('tr');
  	for(var j =0;j<valuewidth;j++){
  	    row = document.createElement('td');
  	    row.setAttribute("class", "selected_teamid");

  		colmn.appendChild(row);
  		 row.setAttribute("onclick", "myfunction("+i+","+j+")");
       	}
  	table.appendChild(colmn);
  }
};

var test = document.getElementById("sizePicker");
test.addEventListener("submit",makeGrid);