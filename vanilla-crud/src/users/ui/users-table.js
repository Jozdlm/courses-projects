import usersStore from "../store/users.store";
import "./users-table.css";

let table;

const createUsersTable = () => {
  const table = document.createElement("table");

  const tableHeaders = document.createElement("thead");
  tableHeaders.innerHTML = `
    <tr>
      <th>ID</th>
      <th>Balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Is Active</th>
      <th>Actions</th>
    </tr>
  `;

  const tableBody = document.createElement("tbody");
  table.append(tableHeaders, tableBody);
  return table;
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderUsersTable = (element) => {
  const users = usersStore.getUsers();

  if (!table) {
    table = createUsersTable();
    element.append(table);
  }

  let tableHtml = "";
  users.forEach((user) => {
    tableHtml += `
      <tr>
      <td>${user.id}</td>
      <td>${user.balance}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.isActive}</td>
      <td>
        <a href="#/">Select</a>
        |
        <a href="#/" >Delete</a>
      </td>
    </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = tableHtml;
};
