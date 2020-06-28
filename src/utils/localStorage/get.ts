const getLocalStorage = (parent: string) => (field?: string) => {
  const storage = localStorage.getItem(parent) || '{}';

  return field ? JSON.parse(storage)[field] : JSON.parse(storage);
};

export const getStorage = getLocalStorage('find8');
