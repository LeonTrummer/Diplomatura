const textarea = document.getElementById('texto');
const counter = document.getElementById('counter');

textarea.addEventListener('input', () => {
  const textoValue = textarea.value;
  const caracteres = textoValue.length;

  counter.textContent = `Caracteres: ${caracteres}`;
});