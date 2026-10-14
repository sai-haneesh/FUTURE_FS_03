const menuBtn = document.querySelector('#menuBtn');
const nav = document.querySelector('#nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#year').textContent = new Date().getFullYear();
const dateInput = document.querySelector('input[name="date"]');
dateInput.min = new Date().toISOString().split('T')[0];
document.querySelector('#bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  document.querySelector('#bookingMessage').textContent =
    `Thanks, ${data.get('name')}! Your enquiry is ready, but this demo does not send it to the restaurant.`;
  e.currentTarget.reset();
});
