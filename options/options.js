// Function to log a message when a button is clicked

let buttons = document.querySelectorAll('.custom-button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => handleButtonClick(e));
})

function handleButtonClick(e) {
  const buttonId = e.target.id;

  switch(buttonId) {
    case 'highlighted_text_button':
      // code block
      break;
    case 'input_button':
      // code block
      break;
    case 'single_select_button':
      // code block
      break;
    case 'multi_select_button':
      // code block
      break;
    default:
      // code block
  }
  // console.log(`Button with ID "${buttonId}" clicked!`);
}
