class Carrinho {
	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');

	//botão REMOVE TODOS OS POKEMONS DO CARRINHO
	btnCartClear = document.querySelector('.cancel-buy');

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

		this.myStorage = this.getStorage();

	}
	
	abrirCarrinho(event) {
		// event.preventDefault();
		window.carrinho.renderCarrinho();
		const openCartClass = 'carrinho-aberto';

		document.body.className.includes(openCartClass)
			? (document.body.className = '')
			: (document.body.className = openCartClass)
		addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				document.body.className = ''
			} else if (event.key === '*'){
				document.body.className = 'carrinho-aberto'
				window.carrinho.renderCarrinho()
			}
		})
	}

	fecharCarrinho(event) {
		event.preventDefault();
		document.body.className = '';
	}

	adicionar(pokemon) {
		this.populateStorage(pokemon);
		document.body.className ='carrinho-aberto'
		this.renderCarrinho();
	}

	renderCarrinho() {
		const pokemonsNoCarrinho = this.getStorage() || [];

		const pokeCart = document.querySelector('.poke-container');
		pokeCart.innerHTML = '';

		const pokeTotais = document.querySelector('.total-preco');
		pokeTotais.innerHTML = '';
		let precoTotal = 0;
		let parceTotal = 0;
		const pokemonsAlreadyAdded = []
		
		if (pokemonsNoCarrinho.length > 0) {
			pokemonsNoCarrinho.map((itens) => {
				const pokemonExist = pokemonsAlreadyAdded.find(
					(pokemon) => pokemon.id == itens.id,
				)
				if (pokemonExist) {
					pokemonExist.qnty = pokemonExist.qnty + 1
					pokemonsAlreadyAdded.push(pokemonExist)
					this.updatePokemonQnty(pokemonExist.id, pokemonExist.qnty)
				} else {
					pokemonsAlreadyAdded.push({ id: itens.id, qnty: 1})
					pokeCart.appendChild(this.createPokemonItem(itens))
				}

				precoTotal = precoTotal + parseFloat(itens.precoDesc)
			})
			pokeTotais.appendChild(
				this.addDetails(pokemonsNoCarrinho.length, precoTotal),
			)
		} else {
			const pokeItem = document.querySelector('ul')
			pokeItem.className = 'poke-inside'
			pokeItem.innerHTML = `<li>Nothing inside<br>Click on Buy at the Home site</li>`
			pokeCart.appendChild(pokeItem)
		}
	}

	updatePokemonQnty(pokemonId, pokemonQnty) {
		const qntyElement = document.querySelector(`.qnty-item-${pokemonId}`)
		qntyElement.innerHTML = pokemonQnty
	}

	//REmovedor de pokemon
	removePokemonItem(pokemonId) {
		const pokemonsNoCarrinho = this.getStorage()
		const findPoke = pokemonsNoCarrinho.filter(
			(pokemonsNoCarrinho) => pokemonsNoCarrinho.id != pokemonId,
		)
		alert('funcionaaaa!');
		this.deleteStorage(findPoke)
		this.renderCarrinho();
	}

	createPokemonItem(item, index) {
		const pokeItem = document.createElement('ul')
		pokeItem.className ='poke-inside'
		index = 0
		pokeItem.innerHTML = `
			<li>
				<div class="buy-card">
					<p><small>${index + 1}</small></p>
						<a href="pokemon.html?id=${item.id}">
							<img src="${item.imagem}" alt="${item.imagem}" title="${item.imagem}">
						</a>
					<div class="item-price">
						<h6>${item.nome}</h6>
						<span><h6 class="qnty-item qnty-item-${item.id}"></h6> X ${item.precoDesc}<small> R$ </small></span>
					</div>
					<div class="remove-poke">
						<i onClick="window.carrinho.removePokemonItem(${item.id})" class="fas fa-trash" title="Remove"></i>
					</div>
				</div>
			</li>
		`
		return pokeItem
	}

	addDetails(totalItens, precoTotal) {
		const pokeTotal = document.createElement('div')
		pokeTotal.className ='total-pokes'
		pokeTotal.innerHTML = `
			<h4>Total itens: ${totalItens}</h4>
			<h4>Total price: R$ ${precoTotal.toFixed(2)}</h4>
		`
		return  pokeTotal
	}
	
	deleteStorage(findPoke) {
		localStorage.setItem('pokemonsNoCarrinho', JSON.stringify(findPoke))
	}

	//removedor de localStorage??????
	removeStorage() {
		console.log('clicouuu')
		localStorage.removeItem("pokemonsNoCarrinho");
		window.carrinho.renderCarrinho();
	}

	populateStorage(pokemon){
		const pokemons = this.getStorage() || []
		pokemons.push(pokemon)
		localStorage.setItem('pokemonsNoCarrinho', JSON.stringify(pokemons))
	}

	getStorage() {
		return JSON.parse(localStorage.getItem("pokemonsNoCarrinho"))
	}
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();

	//faz o carrinho renderizar ao carregar pagina e nao só quando clica nele  ???
	// window.carrinho.renderCarrinho();
	
})