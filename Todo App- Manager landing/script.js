
const form = document.getElementById("f");
const input = document.getElementById("i");
const list = document.getElementById("list");
const count = document.getElementById("count");

function updateCount() {
  const total = list.children.length;
  const done = list.querySelectorAll("li.done").length;
  count.textContent = `${total} tasks · ${done} done`;
}


// Add
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `<span>${input.value}</span><button class="del">✕</button>`;
  list.appendChild(li);
  input.value = "";
  updateCount();
});

// One delegated listener for toggle + delete
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  if (e.target.matches(".del")) { li.remove(); updateCount(); return; }
  if (e.target.tagName === "SPAN") { li.classList.toggle("done"); updateCount(); }
});

// Clear done
document.getElementById("clear").addEventListener("click", () => {
  list.querySelectorAll("li.done").forEach(li => li.remove());
  updateCount();
});

updateCount();