// Function to log a message when a button is clicked

let buttons = document.querySelectorAll('.custom-button');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => handleButtonClick(e));
})

function handleButtonClick(e) {
  const buttonId = e.target.id;
  console.log(`Button with ID "${buttonId}" clicked!`);
}