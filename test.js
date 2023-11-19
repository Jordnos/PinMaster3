import DomOutline from jquery.dom-outline-1.0.js;

var myExampleClickHandler = function (element) { console.log('Clicked element:', element); }
var myDomOutline = DomOutline({ onClick: myExampleClickHandler, filter: 'div' });

// Start outline:
myDomOutline.start();