
console.log("HEYYY!");
// Select color input
console.log($("#colorPicker").val());

// Select size input
console.log($("#inputHeight").val());
console.log($("#inputWeight").val());

// Submit button
$("input[type='submit'").on("click",function(event) {
  
  event.preventDefault();
  console.log("LISTEN!!");
  console.log(event);
  
});


// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
