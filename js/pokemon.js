class Pokemon {
    constructor(nome, url){
        this.nome = nome;
        this.url = url;
        this.id = this.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/', '');
        this.imagem = `
    https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;

        this.preco = Math.floor(Math.random() * 100);
    }
    html() {
        const pokeDiv = document.createElement('div');
        pokeDiv.className = 'poke';
        pokeDiv.innerHTML = `
            <!--
            <div class="card-head">
                <a class="poke-void" href="">
                    <img width="20px" src="images/pokeball-1.png" alt="pokeball icon">
                </a>
            </div>
            -->
            <img class="poke-pic" src="${this.imagem}" alt="${this.nome}">
            <div class="card-feet">
                <h2 class="poke-name">${this.nome}</h2>
                <p class="old-price"><small>R$${this.preco}</small></p><br>
                <p class="actual-price"><small>R$</small>${(this.preco * 0.8).toFixed(2)}</p>
                <button class="btn">
                    <img src="images/pokeball-color.png"
                        title="got a Code discount?">
                    <span class="buy">Buy</span>
                </button>
            </div>
        `;

        return pokeDiv;

    }

}