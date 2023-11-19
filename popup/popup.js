function makePopup() {
  const popup = document.implementation.createHTMLDocument('popup');
  const div = popup.createElement('div');
  div.setAttribute('id', 'end');
  popup.body.appendChild(div);
  return popup;
}

function openPopup() {
  const popup = makePopup();
  addHighlightedText(popup);
  const popupWindow = window.open('', '_blank', 'width=400,height=300');
  popupWindow.document.write(popup.documentElement.outerHTML);
  popupWindow.document.close();
}

function addHighlightedText(doc) {
  const end = doc.getElementById('end');
  const highlightedText = window.getSelection().toString();
  const newDiv = doc.createElement('div');
  const newContent = doc.createTextNode(highlightedText);
  newDiv.appendChild(newContent);
  doc.body.insertBefore(newDiv, end);
}

// document.addEventListener('DOMContentLoaded', function () {
//   addHighlightedText();
//   addHighlightedText();
// });
