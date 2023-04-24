'use strict';

const taskList = [];

const todoForm = document.querySelector('.todo__form');
const todoList = document.querySelector('.todo__tasks');
const title = document.querySelector('.input-title');
const deadline = document.querySelector('.input-deadline');
const status = document.querySelector('.input-status');
const newTaskBtn = document.querySelector('.button--new');

newTaskBtn.addEventListener('click', () => {
  // todoForm.classList.add('show');
  todoForm.classList.remove('hidden');
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleVal = title.value;
  const deadlineVal = deadline.value;
  const statusVal = status.value;

  console.log(titleVal, deadlineVal, statusVal);

  const newTask = {
    id: Date.now(),
    titleVal,
    deadlineVal,
    statusVal,
  };

  taskList.push(newTask);
  printTask(newTask);
  todoForm.reset();
});

const printTask = (newTask) => {
  const task = document.createElement('div');
  task.classList.add('task');

  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task__container');

  const taskTitle = document.createElement('h1');
  taskTitle.innerText = newTask.titleVal;
  taskTitle.classList.add('task__title');

  const taskDeadline = document.createElement('p');
  taskDeadline.innerText = newTask.deadlineVal;
  taskDeadline.classList.add('task__deadline');

  const taskStatus = document.createElement('p');
  taskStatus.innerText = newTask.statusVal;
  taskStatus.classList.add('task__status');

  const editButton = document.createElement('button');
  editButton.innerHTML = 'Edit';
  editButton.classList.add('button--edit');

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.classList.add('button--delete');

  console.log(newTask);
  console.log(newTask.titleVal);

  task.appendChild(taskContainer);
  taskContainer.append(taskTitle, taskDeadline, taskStatus);
  task.appendChild(taskContainer);
  task.appendChild(editButton);
  task.appendChild(deleteButton);

  todoList.appendChild(task);
};
