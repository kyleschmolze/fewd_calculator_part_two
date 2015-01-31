var characters, x, operator, y, result;

function calculate(command) {
  // Here is the calculate function, but it only works with addition! 
  // You'll need to add support for the -, *, and / operations
  characters = command.split('');
  while(characters.length > 1) {
    x = characters.shift(); 
    operator = characters.shift(); 
    y = characters.shift(); 
    if(operator === '+') {
      characters.unshift(parseInt(x) + parseInt(y));
    }
  }
  return characters[0];
}

function gatherInputAndCalculate() {
  var cmd, result;

  // Grab the user input
  cmd = document.getElementsByTagName('input')[0].value;

  // Call the calculate function, store it's return into the result variable
  result = calculate(cmd);

  document.getElementsByTagName('input')[0].value = result;
}
