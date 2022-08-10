let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(element =>{
  element.addEventListener('click', () => {
    ul.querySelector('.active').classList.remove('active');
    element.classList.add('active');
  })
})