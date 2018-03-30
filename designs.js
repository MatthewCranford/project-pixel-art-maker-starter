

// Select color input
// console.log($("#colorPicker").val());

// Select size input
// console.log($("#inputHeight").val());
// console.log($("#inputWeight").val());

// Submit button
$("input[type='submit'").on("click",function(event) {
  
  event.preventDefault();

  const height = $("#inputHeight").val();
  const width = $("#inputWeight").val();

  makeGrid(height,width);
});


// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

  // Your code goes here!


  // for number up to height
  for (let i = 0; i<height; i++) {
    
    // create a row
    $("#pixelCanvas").append($("<tr></tr>"));

    // for number up to width
    for (let j = 0; j<width; j++) {

      // add a td to row
      $("tr").append($("<td></td>"));
    } 
  }

}
