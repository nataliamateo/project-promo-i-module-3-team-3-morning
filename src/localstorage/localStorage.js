const get = (item, defaultValue) => {
  const localStorageData = localStorage.getItem(item);
  return localStorageData === null ? defaultValue : JSON.parse(localStorageData);
};

const set = (item, value) => {
  localStorage.setItem(item, JSON.stringify(value));
};

export default {get, set};
