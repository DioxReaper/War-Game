document.getElementById("Draw a Card").addEventListener("click", function() {
  // creates two random numbers
  const number1 = Math.floor(Math.random() * 10) + 1;
  const number2 = Math.floor(Math.random() * 10) + 1;

  // Display the numbers
  document.getElementById("numbers").innerText = `First Number: ${number1}, Second Number: ${number2}`;

  // this tells which one wins based off the numbers 
  if (number1 > number2) {
      document.getElementById("outcome").innerText = "You Won!";
  } else if (number1 < number2) {
      document.getElementById("outcome").innerText = "You Lose!";
  } else {
      document.getElementById("outcome").innerText = "Tie!";
  }
});