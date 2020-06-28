const setLocalStorage = (parent: string) => (value: Object | string | number) => {
  localStorage.setItem(parent, JSON.stringify(value));
};

export const setStorage = setLocalStorage('find8');
