'use strict';

const taskList = [];

const todoForm = document.querySelector('.todo__form');
let todoList = document.querySelector('.todo__tasks');
const title = document.querySelector('.input-title');
const deadline = document.querySelector('.input-deadline');
const status = document.querySelector('.input-status');
const newTaskBtn = document.querySelector('.button--new');

newTaskBtn.addEventListener('click', () => {
  todoForm.classList.remove('hidden');
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleVal = title.value;
  const deadlineVal = deadline.value;
  const statusVal = status.value;

  const newTask = {
    id: Date.now(),
    titleVal,
    deadlineVal,
    statusVal,
  };

  taskList.push(newTask);
  printTasks();
  // todoForm.classList.add('hidden');
  todoForm.reset();
});

const printTasks = () => {
  //clear list of tasks in DOM
  todoList.innerHTML = '';
  taskList.forEach((item) => {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task__container');

    const taskTitle = document.createElement('h1');
    taskTitle.innerText = item.titleVal;
    taskTitle.classList.add('task__title');

    const taskDeadline = document.createElement('p');
    taskDeadline.innerText = item.deadlineVal;
    taskDeadline.classList.add('task__deadline');

    const taskStatus = document.createElement('p');
    taskStatus.innerText = item.statusVal;
    taskStatus.classList.add('task__status');

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add('button--edit');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.value = item.id;
    deleteButton.classList.add('button--delete');
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      deleteTask(deleteButton.value);
    });

    task.appendChild(taskContainer);
    taskContainer.append(taskTitle, taskDeadline, taskStatus);
    task.appendChild(taskContainer);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    todoList.appendChild(task);
  });
};

const deleteTask = (asd) => {
  let targetId = taskList.findIndex((item) => item.id == asd);
  taskList.splice(targetId, 1);
  printTasks();
};
