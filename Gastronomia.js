let total = 0;

function agregarAlCarrito(producto, precio) {
  const lista = document.getElementById('lista-carrito');
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = `${producto} - $${precio}`;
  lista.appendChild(nuevoItem);

  total += precio;
  document.getElementById('total').textContent = `Total: $${total}`;
}