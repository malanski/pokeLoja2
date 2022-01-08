class Carrinho {
	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');
	itens = [];
	itemPoke = [];
	total = 0;
	precos = 0;

	constructor(options) {
		this.btnCart.addEventListener('click', this.abrirCarrinho);

		// this.preco = Math.floor();
		// this.precos = options.itens.map(itemPreco => itemPreco.item.preco);

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
		// event.preventDefault();
		const openCartClass = 'carrinho-aberto';

		document.body.className.includes(openCartClass) ? document.body.className = '' : document.body.className = openCartClass;
	}

	fecharCarrinho(event) {
		event.preventDefault();

		document.body.className = '';
	}

	// somarPrecos(pokemon) {
	// 	// this.preco.push(pokemon.preco);
	// 	// Calcular preço TOTAL
	// }


	adicionar(pokemon) {
		this.itens.push(pokemon);
		this.itemPoke.push(pokemon);
		// this.preco.push(pokemon)

		const precoTotal = this.itens.reduce(getTotal, 0);
			function getTotal(precoTotal, preco) {
 			return precoTotal + (preco);
			 console.log(precoTotal);
		}

		const pokeNoCarrinho = document.querySelector ('.poke-container');

		const itemPoke = document.getElementsByClassName('inside');

        // this.types = options.types.map(typeItem => typeItem.type.name);

		itemPoke.innerHTML =`
					<div class="buy-card">
						<img src="${pokemon.imagem}">
						<div class="item-price">
							<h6>${pokemon.nome}</h6>
							<span><small>1 X </small>${pokemon.preco}<small> R$ </small></span>
						</div>
						<i class="fas fa-trash" title="Remove"></i>
					</div>`

		pokeNoCarrinho.innerHTML = `
			<h4 class="user-name"></h4>
			<ol>
				${
					this.itemPoke.map(itemPoke => `<li class="inside">${itemPoke}</li>`)
					.join('')
				}
			</ol>

			<div class="preco-carrinho">
				<h2 class="total-preco">Total =  R$<input type="checkbox"></h2>
				<h3 class="total-parcela">Parcelado Total = 12 x ${(pokemon.preco / 12).toFixed(2)} R$<input type="checkbox"></h3>
				<h2 class="total-avista">AVISTA Total = ${(pokemon.preco * 0.8).toFixed(2)} R$<input type="checkbox"></h2>
			</div>

		`

		console.log(pokemon.precoTotal)
		// console.log(pokemon.preco)
		// console.log(pokemon.imagem)
		console.log(pokemon.nome)
	}
}

window.addEventListener('load', async () => {
	window.carrinho = new Carrinho();
})