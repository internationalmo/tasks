const addForm = document.querySelector('.add');

const list = document.querySelector('.tasks');

const search = document.querySelector('.search input');


const generateTemplate = (task, date) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${task}${date}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `
  list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const task = addForm.add.value.trim();
  const date = new Date();
  console.log(task);
  if(task.length) {
    generateTemplate(task, date);
    addForm.reset();
  }
});

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTasks = (term) => {
  Array.from(list.children)
    .filter((task) => {
      return !task.textContent.toLowerCase().includes(term);
    })
    .forEach((task) => {
      task.classList.add('filtered')
    });

  Array.from(list.children)
    .filter((task) => {
      return task.textContent.toLowerCase().includes(term);
    })
    .forEach((task) => {
      task.classList.remove('filtered')
    });
};
// keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTasks(term);
});



