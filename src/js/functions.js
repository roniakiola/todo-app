'use strict';

const todoForm = document.querySelector('.todo__form');
const todoTitle = document.querySelector('.todo__title');
let todoList = document.querySelector('.todo__tasks');
const title = document.querySelector('.input-title');
const deadline = document.querySelector('.input-deadline');
const status = document.querySelector('.input-status');
const editForm = document.querySelector('.edit__form');
const editTitle = document.querySelector('.edit__input-title');
const editDeadline = document.querySelector('.edit__input-deadline');
const editStatus = document.querySelector('.edit__input-status');

const printTasks = () => {
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
    editButton.addEventListener('click', () => {
      editForm.classList.remove('hidden');

      //data-value is set dynamically in editForm to target the right task in taskList
      editForm.dataset.value = item.id;
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('button--delete');
    deleteButton.addEventListener('click', () => {
      deleteTask(item.id);
    });

    task.appendChild(taskContainer);
    taskContainer.append(taskTitle, taskDeadline, taskStatus);
    task.appendChild(editButton);
    task.appendChild(deleteButton);
    todoList.appendChild(task);
  });
  todoTitle.innerHTML = `You have ${taskList.length} tasks`;
};
const deleteTask = (itemId) => {
  let targetId = taskList.findIndex((item) => item.id == itemId);
  taskList.splice(targetId, 1);
  printTasks();
};
