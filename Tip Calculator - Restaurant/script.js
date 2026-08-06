//pure function

const percent = (amount, p) => (amount * p) / 100;
const round2 = (n) => Math.round(n * 100) / 100;

//state
let bill = 0, tipPct =10,people= 1;

//element
const $= (id) => document.getElementById(id)
const billE1 = $("bill"), peopleE1 = $("people");
const tipE1 = $(tip), totelE1 = $("total"), eachE1 = $("each");

//higher -order helper -main calc function

function calc(){
    const tip = percent(bill , tipPct);
    const total = bill +tip;
    const each = total/ Math.max(1 ,people);
    tipE1.textContent ="TK" + round2(tip);
    totalE1.textContent ="TK" + round2(total);
    eachE1.textContent ="Tk" + round2(each);
}

// event wiring

billE1.addEventListener("input", (e)=> {bill = +e.target.value || 0; calc(); });
    peopleE1.addEventListener("input" , (e) => { people = +e.target.value || 1; calc(); });


    document.querySelectorAll(.pct).forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".pct").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            tipPct = +btn.dataset.p;
            calc();
        });
    });

//Default active

document.querySelector('.pct[data-p="10"]').classList.add("active");
calc();