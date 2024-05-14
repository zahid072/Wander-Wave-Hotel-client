const getStoredId = (propertyKey) => {
  const storedId = localStorage.getItem(propertyKey);
  if (storedId) {
    return JSON.parse(storedId);
  }
  return [];
};

const saveId = (id, propertyKey) => {
  const storedId = getStoredId(propertyKey);
  if (!storedId.includes(id)) {
    storedId.push(id);
    localStorage.setItem(propertyKey, JSON.stringify(storedId));
  }
};
const removeId = (id, propertyKey) => {
  let storedId = getStoredId(propertyKey);

  storedId = storedId.filter((storedId) => storedId !== id);

  localStorage.setItem(propertyKey, JSON.stringify(storedId));
};

export { getStoredId, saveId, removeId };
