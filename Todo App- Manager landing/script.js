
const form = document.getElementById("f");
const input = document.getElementById("i");
const list = document.getElementById("list");
const count = document.getElementById("count");

function updateCount() {
  const total = list.children.length;
  const done = list.querySelectorAll("li.done").length;
  count.textContent = `${total} tasks · ${done} done`;
}