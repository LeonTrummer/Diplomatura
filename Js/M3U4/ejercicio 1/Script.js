const cuadradoRojo = document.getElementById('cuadradoRojo');
const cuadradoBlanco = document.getElementById('cuadradoBlanco');
const cuadradoNegro = document.getElementById('cuadradoNegro');

cuadradoRojo.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

cuadradoBlanco.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

cuadradoNegro.addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
});