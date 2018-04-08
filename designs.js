
// global variable
let draw = true;


// Submit button
$("input[type='submit']").on("click",function(event) {
  
  event.preventDefault();

  const height = $("#inputHeight").val();
  const width = $("#inputWeight").val();

  $("#pixelCanvas").empty();
  makeGrid(height,width);
});


// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {

  for (let i = 0; i<height; i++) {
    
    // create a row
    $("#pixelCanvas").append($("<tr></tr>"));

    for (let j = 0; j<width; j++) {

      // add a td to row
      $("tr").last().append($("<td></td>"));
    } 
  }
}




// color square when clicked
$("#pixelCanvas").on("mousedown mouseover", "td", function(e) {

  if (e.buttons === 1) {

		if (draw === true) { // global var check
			$(this).css("background-color", $("#colorPicker").val());
		}
		else {
			$(this).css("background-color", "");
		}
  }
});


// toggle between draw/erase
$("input[name='tool']").on("change", function() {
	
	if ($(this).val() === "draw") {
		draw = true; // change global var
	}
	else if ($(this).val() === "erase") {
		draw = false; // change global var
	}
});



