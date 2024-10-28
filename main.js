const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculate() {
    try {
        display.value = eval(display.value);
        if(display.value == 2){
            display.value = 'B sl o❤️';
        }else if(display.value == 16){
            display.value = "Ah Black🌚"
        }
    } catch (error) {
        display.value = "Error";
    }
}