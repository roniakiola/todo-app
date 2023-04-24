'use strict';

let taskList = [
  {
    id: 0,
    titleVal: 'kakkaa',
    deadlineVal: 'paska',
    statusVal: 'ei ikinä valmist',
  },
  {
    id: 0,
    titleVal: 'kakkaa',
    deadlineVal: 'paska',
    statusVal: 'ei ikinä valmist',
  },
  {
    id: 0,
    titleVal: 'kakkaa',
    deadlineVal: 'paska',
    statusVal: 'ei ikinä valmist',
  },
];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleVal = title.value;
  const deadlineVal = deadline.value;
  const statusVal = status.value;

  if (taskList.some((task) => task.titleVal === titleVal)) {
    alert('Please provide unique title');
  } else {
    const newTask = {
      id: Date.now(),
      titleVal,
      deadlineVal,
      statusVal,
    };
    taskList.push(newTask);
  }
  printTasks();
  todoForm.classList.add('hidden');
  todoForm.reset();
});
printTasks();
