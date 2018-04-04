
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

let down = false;
$("#pixelCanvas").on("mousedown", "td", function() {
  down = true;
  console.log ("value of down is=", down);
});
$("#pixelCanvas").on("mouseup", "td", function() {
  down = false;
  console.log ("value of down is=", down);
});




// color square when clicked
$("#pixelCanvas").on("click", "td", function() {

  if (down) {

    // change background color of event target's 
    $(this).css("background-color", $("#colorPicker").val());
  }
});




