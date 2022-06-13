const randomNumber = (n) => Math.floor(Math.random() * n);

const addClassToDivById = (id, myClass) => {
  const main = document.getElementById(id);
  main.classList.add(myClass);
}
const removeClassToDivById = (id, myClass) => {
  const main = document.getElementById(id);
  main.classList.remove(myClass);
}

export {
  randomNumber,
  addClassToDivById,
  removeClassToDivById
}
