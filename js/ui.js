const changeBtn = document.getElementById('changeBtn');
const closeBtn = document.getElementById('closeBtn')
const modal = document.getElementById('location-modal');
const form = document.getElementById('location-form');
const xBtn = document.getElementById('xBtn');

form.addEventListener('click', (e) => {
    e.preventDefault();
})

changeBtn.addEventListener('click', () => {
    modal.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show')
})

xBtn.addEventListener('click', () => {
    modal.classList.remove('show')
})

