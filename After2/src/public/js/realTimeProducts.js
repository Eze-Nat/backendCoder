const socket = io()

socket.on('productsList', (products) => {
  const $container = document.getElementById('listProducts')

  $container.innerHTML = ''

  products.forEach(prod => {
    const div = document.createElement('div');
		div.innerHTML += `<div id="card">
				<h3>${prod.title}</h3>
				<p>${prod.description}</p>
				<p>${prod.price}</p>
				<p>${prod.code}</p>
				</div>
				`;
  });

  $container.appendChild(div);
})

const form = document.getElementById('newProduct')
form.addEventListener('submit', async(e) => {
  const target = e.target
  e.preventDefault()
  const newProduct = {
    title: target.title.value,
    description: target.description.value,
    price: +target.price.value,
    code: target.code.value
  }

  socket.emit('sendProduct', newProduct)
})