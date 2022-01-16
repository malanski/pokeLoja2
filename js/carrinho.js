class Carrinho {
	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');
	// itens = [];
	cartStorage = localStorage;
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

		window.carrinho.renderCarrinho();

		document.body.className.includes(openCartClass) ? document.body.className = '' : document.body.className = openCartClass;
	}

	fecharCarrinho(event) {
		event.preventDefault();
		document.body.className = '';
	}

	adicionar(pokemon) {
		this.addedStorage(pokemon);
		// this.itens.push(pokemon);
		// this.renderCarrinho(this.itens);
	}

	renderCarrinho() {
		const pokemons = this.getStorage();

		let pokeNoCarrinho = document.querySelector('.poke-container');
		pokeNoCarrinho.innerHTML = '';

		let totalPreco = document.querySelector('.total-preco');
		totalPreco.innerHTML = '';
		let precoTotal = 0;
		let parceTotal = 0;
		
		let pokemonsPurchased = pokemons.map((itens, index) => {
			const pokeUnits = index + 1;
			precoTotal = precoTotal + parseFloat(itens.precoDesc);
			parceTotal = parceTotal + parseFloat(itens.precoParc);
			console.log(precoTotal);

			const itemPoke = document.createElement('ul');

			itemPoke.className = 'poke-inside'

			itemPoke.innerHTML =`
					<li>
						<div class="buy-card">
							<img src="${itens.imagem}">
							<div class="item-price">
								<h6>${itens.nome}</h6>
								<span><small>1 X </small>${itens.precoDesc}<small> R$ </small></span>
							</div>
							<i class="fas fa-trash" title="Remove"></i>
						</div>
					</li>`
			pokeNoCarrinho.appendChild(itemPoke);

			const pokeTotal = document.createElement('div');
			pokeTotal.className = 'total-pokes';
			pokeTotal.innerHTML = `
				<h5>Price information</h5>
				<div class="info-buy">
					<h3>Units=${pokeUnits}</h3>
					<h2 class="total-price">Total Price= ${(precoTotal).toFixed(2)}</h2> 

					<h4>12 x of  ${(parceTotal).toFixed(2)}</h4> 
				</div>
			`
			totalPreco.innerHTML = '';
			totalPreco.appendChild(pokeTotal);
		});
	}
	addedStorage(pokemon) {
		const pokemons = this.getStorage() || [];
		pokemons.push(pokemon);
		localStorage.setItem("pokemonsPurchased", JSON.stringify(pokemons));
 	}
	 getStorage() {
		 return JSON.parse(localStorage.getItem("pokemonsPurchased"))
	 }
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();
})