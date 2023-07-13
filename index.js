const table = document.querySelector("#tblBingo");
const letters = document.querySelector(".letters-bingo");

let array = Array.apply(null, { length: 76 }).map(Number.call, Number);
array.shift();

let iterator = 0;

for (let i = 0; i < 5; ++i) {
  let tr = document.createElement("tr");
  table.appendChild(tr);

  for (let j = 0; j < 15; ++j) {
    let td = document.createElement("td");
    td.id = array[iterator].toString();
    td.classList.add("main-table-cell");

    let div = document.createElement("div");
    div.classList.add("cell-format");
    div.textContent = array[iterator].toString();
    td.appendChild(div);
    tr.appendChild(td);
    ++iterator;
  }
}

const cell = document.querySelectorAll(".main-table-cell");


cell.forEach(e => {
  e.addEventListener("click", () => {
    e.classList.toggle("strikeout");

    if (e.classList.contains("strikeout"))
      console.log(`numero ${e.id} foi adicionado`);
    else
      console.log(`numero ${e.id} foi removido`)
  })
})
