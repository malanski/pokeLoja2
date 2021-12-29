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
		// Calcular preço TOTAL

		const pokeNoCarrinho = document.querySelector ('.poke-container');
		pokeNoCarrinho.innerHTML = `
			<ol>
				<li>
					<ul class="mini-card">
						<li>${pokemon.nome}</li>
						<li><img src="${pokemon.imagem}"></li>
						<li><small>R$</small> ${pokemon.preco}</li>

					</ul>
				</li>

				<li>
					<ul class="mini-card">
						<li>${pokemon.nome}</li>
						<li><img src="${pokemon.imagem}"></li>
						<li><small>R$</small> ${pokemon.preco}</li>

					</ul>
				</li>

				<li>
					<ul class="mini-card">
						<li>${pokemon.nome}</li>
						<li><img src="${pokemon.imagem}"></li>
						<li><small>R$</small> ${pokemon.preco}</li>

					</ul>
				</li>
			</ol>
		`

		console.log(pokemon.preco)
		console.log(pokemon.imagem)
		console.log(pokemon.nome)
	}
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();
})