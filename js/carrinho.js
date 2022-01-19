class Carrinho {
	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');

	//botão REMOVE TODOS OS POKEMONS DO CARRINHO
	btnCartClear = document.querySelector('.cancel-buy');

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
				document.body.classList = [];
			} else if (event.key === '@') {
				document.body.className = 'carrinho-aberto';
			}
		});

		// tentando Fazer funçãp pra remover as coisas


		this.btnCartClear.addEventListener('click', this.removeStorage);

	}
	
	abrirCarrinho(event) {
		// event.preventDefault();
		window.carrinho.renderCarrinho();
		const openCartClass = 'carrinho-aberto';

		document.body.className.includes(openCartClass) ? document.body.className = '' : document.body.className = openCartClass;

		// if (pokemons === null) {
		// 	alert("You need to click BUY to Start using the Buying Cart")
		// }
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
			// itens = [];
			const itemPoke = document.createElement('ul');

			itemPoke.className = 'poke-inside'

			itemPoke.innerHTML = `
				<li>
					<div class="buy-card">
						<p><small>${index}</small></p>
							<a href="pokemon.html?id=${itens.id}">
								<img src="${itens.imagem}" alt="${itens.imagem}" title="${itens.imagem}">
							</a>
						<div class="item-price">
							<h6>${itens.nome}</h6>
							<span><small>1 X </small>${itens.precoDesc}<small> R$ </small></span>
						</div>
						<div class="remove-poke">
							<i data-id="${itens.id}" class="fas fa-trash" title="Remove"></i>
						</div>
					</div>
				</li>
			`
			
			pokeNoCarrinho.appendChild(itemPoke);

			const btnCartRemove = document.querySelectorAll('.remove-poke');
			btnCartRemove.forEach((btn) => {
				btn.addEventListener('click', (event) => {
					event.preventDefault();
					const id = event.target.getAttribute('data-id');
		
					const pokemon = this.itemPoke.find((pokemon) => pokemon.id == id);
		
					const closeCartClass = document.querySelectorAll('.remove-poke')
					// window.carrinho.adicionar(pokemon);
					// window.carrinho.renderCarrinho(pokemon);
					window.carrinho.fecharCarrinho(closeCartClass);
		
		
				});
			});


			// è só aqui  q o Botão de remover é chamado depois q é renderizado acima!!!!!!!!!!!Porra!
			// const btnCartRemove = document.querySelectorAll('.remove-poke');

			// btnCartRemove.addEventListener('click', this.removePokemon);

			const pokeTotal = document.createElement('div');
			pokeTotal.className = 'total-pokes';
			pokeTotal.innerHTML = `
				<h5>Price information</h5>
				<div class="info-buy">
					<h3>Units = ${pokeUnits} </h3>
					<h2 class="total-price">Total Price= ${(precoTotal).toFixed(2)}</h2>
					<h4>12 x of  ${(parceTotal).toFixed(2)}</h4>
				</div>
			`
			totalPreco.innerHTML = '';
			totalPreco.appendChild(pokeTotal);


		});

	}

	//REmovedor de pokemon
	removePokemon(event) {
		// event.preventDefault();
		console.log("clicado");// Cade o Clique?????? funciona em tag primeira?   HTML sómente?
		alert('funcionaaaa!');

		// const itenId = event.target.getAttribute('data-id');

		// const index = itens.indexOf(itens.id);
		// if (index > -1) {
  		// 	itens.splice(index, 1);
		// }

        // const pokemon = this.pokemons.find((pokemon) => pokemon.id == itenId);
	}

	addedStorage(pokemon) {
		const pokemons = this.getStorage() || [];
		pokemons.push(pokemon);
		localStorage.setItem("pokemonsPurchased", JSON.stringify(pokemons));
	}


	getStorage() {
		return JSON.parse(localStorage.getItem("pokemonsPurchased"))
	}

	//removedor de localStorage??????
	removeStorage() {
		console.log('clicouuu')
		localStorage.removeItem("pokemonsPurchased");
		window.carrinho.renderCarrinho();
 	}
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();

	//faz o carrinho renderizar ao carregar pagina e nao só quando clica nele  ???
	window.carrinho.renderCarrinho();
	
})