let screen = document.getElementById('inputBox');
buttons = document.querySelectorAll('.button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'DEL') {
            screenValue = screenValue.slice(0, -1); // Remove the last character
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
