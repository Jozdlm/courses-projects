import usersStore from "./store/users.store";
import { renderUsersTable } from "./ui/users-table";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();

  element.innerHTML = "";
  renderUsersTable(element);
};
