//Element

const input = document.getElementById("mark");
const btn = document.getElementById("btn");
const out = document.getElementById("out");

//Grade function
function getGrade(m) {
     if (m >= 80) return { g: "A+", pass: true, msg: "Excellent!" };
  if (m >= 70) return { g: "A",  pass: true, msg: "Very good!" };
  if (m >= 60) return { g: "B",  pass: true, msg: "Good!" };
  if (m >= 50) return { g: "C",  pass: true, msg: "More effort needed" };
  if (m >= 33) return { g: "D",  pass: true, msg: "Barely passed!" };
  return { g: "F", pass: false, msg: "Fail — Try again" };
}

//Button click event
tn.addEventListener("click", () => {
  const m = Number(input.value);

  if (Number.isNaN(m) || m < 0 || m > 100) {
    out.className = "result fail";
    out.textContent = "Enter a number between 0-100";
    return;
  }