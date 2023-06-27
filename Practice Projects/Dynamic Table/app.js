const btn = document.querySelector("#btn");

const createTableElement = (rows, columns) => {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      const column = document.createElement("td");
      row.appendChild(column);
    }
    tableBody.appendChild(row);
  }
  table.appendChild(tableBody);
  return table;
};

const createTable = () => {
  const tableWrapper = document.querySelector("#table-wrapper");
  const row = document.querySelector("#row").value;
  const col = document.querySelector("#column").value;

  const table = createTableElement(parseInt(row), parseInt(col));
  table.classList.add("table");
  table.classList.add("table table-bordered");
  tableWrapper.appendChild(table);
};

btn.addEventListener("click", createTable);
