/**
 *
 * @param {Number} page
 * @returns
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const response = await fetch(url);
  return await response.json();
};
