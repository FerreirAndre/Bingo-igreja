const table = document.querySelector("#tblBingo");
const letters = document.querySelector(".letters-bingo");

let array = Array.apply(null, { length: 76 }).map(Number.call, Number);
array.shift();

iterator = 0;
let letras = ['B', 'I', 'N', 'G', 'O'];

for (let i = 0; i < 5; ++i) {
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let letra = document.createElement("td");
  letra.classList.add("main-table-cell");
  letra.classList.add("letra");
  letra.classList.add(letras[i]+letras[i]);
  letra.textContent = letras[i];
  tr.appendChild(letra);
  for (let j = 0; j < 15; ++j) {
    let td = document.createElement("td");

    td.classList.add("main-table-cell");
    let div = document.createElement("div");
    div.classList.add("cell-format");
    div.id = array[iterator].toString();
    div.classList.add(letras[i]);
    div.textContent = array[iterator].toString();
    td.appendChild(div);
    tr.appendChild(td);
    ++iterator;
  }
}

const cell = document.querySelectorAll(".cell-format");


cell.forEach(e => {
  e.addEventListener("click", () => {
    e.classList.toggle("strikeout");
    if (e.classList.contains("strikeout"))
      console.log(`Numero ${e.id} adicionado`);
    else
      console.log(`Numero ${e.id} removido`);
  })
})
