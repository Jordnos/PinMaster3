// Function to log a message when a button is clicked
let buttonId;
let buttons = document.querySelectorAll('.custom-button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => handleButtonClick(e));
})

function getCurrentTab(callback) {
  let queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions, ([tab]) => {
    if (chrome.runtime.lastError)
    console.error(chrome.runtime.lastError);
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    callback(tab.id, buttonId);
  });
}

function handleButtonClick(e) {
  buttonId = e.target.id;
  try {
    getCurrentTab(chrome.tabs.sendMessage);
  } catch (err) {
    console.log(err);
  }
  
  // switch(buttonId) {
  //   case 'highlighted_text_button':
  //     // code block
  //     break;
  //   case 'input_button':
      
  //     break;
  //   case 'single_select_button':
      
  //     break;
  //   case 'multi_select_button':
      
  //     break;
  //   default:
  //     // code block
  // }
  // console.log(`Button with ID "${buttonId}" clicked!`);
}
