'use strict';
const newTaskBtn = document.querySelector('.button--new');
const clearAllBtn = document.querySelector('.button--clear');
const cancelBtn = document.querySelectorAll('.button--cancel');

newTaskBtn.addEventListener('click', () => {
  todoForm.classList.remove('hidden');
});
cancelBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    todoForm.classList.add('hidden');
    editForm.classList.add('hidden');
  });
});
clearAllBtn.addEventListener('click', () => {
  taskList = [];
  printTasks();
  todoForm.classList.add('hidden');
  editForm.classList.add('hidden');
});
