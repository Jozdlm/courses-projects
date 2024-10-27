import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
  currentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
};
const loadPrevPage = async () => {};

const onUserChange = () => {};

const reloadPage = () => {};

export default {
  loadNextPage,
  loadPrevPage,
  onUserChange,
  reloadPage,
  getUser: () => [...state.users],
  getCurrentPage: () => state.currentPage,
};
