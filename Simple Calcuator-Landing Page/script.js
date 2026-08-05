//Functions

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b === 0 ? "Cannot divide by 0" : a / b);

function calculate(a, b, op) {
    if (op === "+") return add(a, b);
    if (op === "-") return sub(a, b);
    if (op === "*") return mul(a, b);
    if (op === "/") return div(a, b);
    return "Invalid ";
}

//Wire

const aE1 = document.getElementById("a");
const bE1 = document.getElementById("b");
const op = document.getElementById("op");
const out = document.getElementById("out");


document.getElementById("go").addEventListener("click",() => {
    const a = Number(aE1.value), b = Number(bE1.value);
    if (Number.isNaN(a) || Number.isNaN(b)){
        out.textContent = "= Give two numbers";
        return;
    }
    out.textContent = "=" + calculate(a, b, op.value);
});

console.log("QuickCalc loaded");






