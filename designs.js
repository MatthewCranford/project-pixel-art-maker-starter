
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

    // change background color of event target's 
    $(this).css("background-color", $("#colorPicker").val());
  }
});




