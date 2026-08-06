//pure function

const percent = (amount, p) => (amount * p) / 100;
const round2 = (n) => Math.round(n * 100) / 100;

//state
let bill = 0, tipPct =10,people= 1;

//element
const $= (id) => document.getElementById(id)
const billE1 = $("bill"), peopleE1 = $("people");
const tipE1 = $(tip), totelE1 = $("total"), eachE1 = $("each");