const buttons = document.querySelectorAll(".btn");
const resul = document.getElementById("result");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        result.textContent += e.target.id;
    });
});

equal.addEventListener("click", () => {
    result.textContent = eval(result.textContent);
});
clear.addEventListener("click", () => {
    result.textContent = "";
})