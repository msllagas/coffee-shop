const home = document.getElementById('home');
const products = document.getElementById('products');
const homeBtn = document.getElementById('btn-home');
const productBtn = document.getElementById('btn-products');

homeBtn.addEventListener('click', () => {
    home.classList.add('active');
    products.classList.add('inactive');
    homeBtn.classList.toggle('btn')
})
productBtn.addEventListener('click', () => {
    home.classList.toggle('inactive');
    products.classList.add('active');
})