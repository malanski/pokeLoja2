class Carrinho {
	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');
	itens = [];
	total = 0;

	constructor(options) {
		this.btnCart.addEventListener('click', this.abrirCarrinho);

		// this.preco = Math.floor();
		// this.itens = options.itens.map(itens.preco => itens.preco);

		this.btnCartClose.addEventListener('click', this.fecharCarrinho);
		// console.log('carrinho carregado...........');

		this.clickOutCart.addEventListener('click', function(event) {
		event.preventDefault();
		document.body.className = '';
		});

		this.keyboardPress = addEventListener('keydown', function(event) {
			if(event.key === "Escape") {
			// document.body.className = '';
			document.body.classList = [];
			}
		});
	}

	abrirCarrinho(event) {
		event.preventDefault();
		const openCartClass = 'carrinho-aberto';

		document.body.className.includes(openCartClass) ? document.body.className = '' : document.body.className = openCartClass;
	}

	fecharCarrinho(event) {
		event.preventDefault();

		document.body.className = '';
	}

	adicionar(pokemon) {
		this.itens.push(pokemon);
		// this.preco.push(pokemon.preco);
		// Calcular preço TOTAL

		const pokeNoCarrinho = document.querySelector ('.poke-container');
		pokeNoCarrinho.innerHTML = `
			<ol>
				<li>
					<ul class="mini-card">
						<li><button class="remove-cart" title="remove"><img src="./images/bin.png"></button></li>
						<li>${pokemon.nome}</li>
						<li><img src="${pokemon.imagem}"></li>
						<li class="preco-cart"><small>un. 01x</small></li>
						<li class="preco-cart">${pokemon.preco} <small>R$</small></li>
						<li><input type="checkbox"></li>
					</ul>
				</li>

			</ol>
			<div class="preco-carrinho">
				<h2 class="total-preco">Total = ${pokemon.preco} R$<input type="checkbox"></h2>
				<h3 class="total-parcela">Parcelado Total = 12 x ${(pokemon.preco / 12).toFixed(2)} R$<input type="checkbox"></h3>
				<h2 class="total-avista">AVISTA Total = ${(pokemon.preco * 0.8).toFixed(2)} R$<input type="checkbox"></h2>
			</div>

		`
		console.log(pokemon.preco)
		console.log(pokemon.imagem)
		console.log(pokemon.nome)
	}
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();
})