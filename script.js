
function init() {

    const button = document.getElementById("entrybutton");
    const input = document.getElementById("entryinput");
    const headline = document.getElementById("textoutput");

    button.addEventListener("click", function() {

        const inputValue = input.value;

        alert("Debarlaben: " + inputValue);

        headline.textContent = inputValue;

    });

}

window.addEventListener("load", init);
