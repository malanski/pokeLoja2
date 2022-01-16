class Carrinho {
	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');
	itens = [];
	total = 0;

	constructor() {
		this.btnCart.addEventListener('click', this.abrirCarrinho);

		this.btnCartClose.addEventListener('click', this.fecharCarrinho);

		this.clickOutCart.addEventListener('click', function(event) {
			event.preventDefault();
			document.body.className = '';
		});

		this.keyboardPress = addEventListener('keydown', function(event) {
			if(event.key === "Escape") {
			// document.body.className = '';
			document.body.classList = [];
			} else if (event.key === '@') {
				document.body.className = 'carrinho-aberto';
			}
		});
	}

	abrirCarrinho(event) {
		// event.preventDefault();
		const openCartClass = 'carrinho-aberto';

		document.body.className.includes(openCartClass) ? document.body.className = '' : document.body.className = openCartClass;
	}

	fecharCarrinho(event) {
		event.preventDefault();
		document.body.className = '';
	}

	adicionar(pokemon) {
		this.itens.push(pokemon);
		this.renderCarrinho(this.itens);
	}

	renderCarrinho() {
		let pokeNoCarrinho = document.querySelector('.poke-container');
		pokeNoCarrinho.innerHTML = '';

		let totalPreco = document.querySelector('.total-preco');
		totalPreco.innerHTML = '';
		let precoTotal = 0;
		
		let pokemonsPurchased = this.itens.map(function (pokemon, index) {
			const pokeUnits = index + 1;
			precoTotal = precoTotal + parseFloat(pokemon.precoDesc);
			console.log(precoTotal);

			const itemPoke = document.createElement('ul');

			itemPoke.className = 'poke-inside'

			itemPoke.innerHTML =`
					<li>
						<div class="buy-card">
							<img src="${pokemon.imagem}">
							<div class="item-price">
								<h6>${pokemon.nome}</h6>
								<span><small>1 X </small>${pokemon.precoDesc}<small> R$ </small></span>
							</div>
							<i class="fas fa-trash" title="Remove"></i>
						</div>
					</li>`
			pokeNoCarrinho.appendChild(itemPoke);

			const pokeTotal = document.createElement('div');
			pokeTotal.className = 'total-pokes';
			pokeTotal.innerHTML = `
				<div class="final-buy">
					<h4>Units=${pokeUnits}</h4>
					<h4>Total Price= ${(precoTotal).toFixed(2)}</h4> 
				</div>
			`
			totalPreco.innerHTML = '';
			totalPreco.appendChild(pokeTotal);
		});
	}
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();
})