'use strict';

let taskList = [];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleVal = title.value;
  const deadlineVal = deadline.value;
  const statusVal = status.value;

  //check for unique title
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

editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //here data-value of editForm is used to find the corresponding task in taskList
  let targetId = taskList.findIndex(
    (item) => item.id == editForm.dataset.value
  );

  const titleVal = editTitle.value;
  const deadlineVal = editDeadline.value;
  const statusVal = editStatus.value;

  taskList[targetId].titleVal = titleVal;
  taskList[targetId].deadlineVal = deadlineVal;
  taskList[targetId].statusVal = statusVal;

  printTasks();
  editForm.classList.add('hidden');
  editForm.reset();
});
//init render
printTasks();
