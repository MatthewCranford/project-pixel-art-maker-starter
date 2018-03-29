

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
console.log(height,width);


}
