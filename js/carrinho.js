
class Carrinho {

	btnCart = document.querySelector('#btn-cart');
	btnCartClose = document.querySelector('#btn-cart-x');
	clickOutCart = document.querySelector('.opn-cart');

	constructor() {
		this.btnCart.addEventListener('click', this.abrirCarrinho);

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
}

window.addEventListener('load', async () => {
	new Carrinho();
})