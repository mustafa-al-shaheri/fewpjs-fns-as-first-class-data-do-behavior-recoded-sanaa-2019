/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let string=timeString.split(":");
  let integers=persenInt(string);
  if(integers<12){
    return "Good Morning";
  }else if (integers>12 && integers<17) {
    return "Good Afternoon";
  }else if (integers>17) {
    return "Good Evening";

  }
}
/* Write your implementation of displayMessage() */
function displayMessage(testContent) {
  let content = document.getElementById("greeting").innerText
  content=testContent;
}