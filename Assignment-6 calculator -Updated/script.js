function input(number) {
    let display = document.getElementById("display");
    display.value += number;
}
function calculate() {
    let display = document.getElementById("display");
    let history = document.getElementById("history");

    if (display.value == "") {
        alert("Please Enter The Value to Calculate")
    }
    else {
        history.value = display.value;
        display.value = eval(history.value);
    }
}

function clrScreen() {
    let display = document.getElementById("display");
    let history = document.getElementById("history");
    history.value = "";
    display.value = "";

}