'use strict';

const taskList = [];

const newTaskBtn = document.querySelector('.button--new');
const todoForm = document.querySelector('.todo__form');

newTaskBtn.addEventListener('click', () => {
  // todoForm.classList.add('show');
  todoForm.classList.remove('hidden');
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('input-title').value;
  const deadline = document.querySelector('input-deadline').value;
  const status = document.querySelector('input-status').value;

  console.log(title, deadline, status);

  const newTask = {
    title,
    deadline,
    status,
  };
});
