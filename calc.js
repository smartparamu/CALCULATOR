let input=document.getElementById('inputscreen');

function display(value) {
    inputscreen.value += value;
}

function calculate() {
    try{
        inputscreen.value = eval(inputscreen.value);
    }
    catch{
        inputscreen.value = "Error!";
    }
}

function clearscreen() {
    inputscreen.value = "";
}

function del(){
    inputscreen.value = inputscreen.value.slice(0,-1);
}