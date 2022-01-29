class Pokemon {
    constructor(nome, url){
        this.nome = nome;
        this.url = url;
        this.id = this.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/', '');
        this.imagem = `
            https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${this.id}.png`;
        this.imagem3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${this.id}.gif`;   
        
        this.preco = Math.floor(Math.random() * 100).toFixed(2);
        this.precoDesc = (this.preco * 0.8).toFixed(2);
        this.precoParc = (this.preco / 12).toFixed(2);
    }

    html() {
        const pokeDiv = document.createElement('div');
        pokeDiv.className = 'poke';
        pokeDiv.innerHTML = `
            <a href="pokemon.html?id=${this.id}">
                <div class="card-feet">
                    <h2>${this.nome}</h2>
                    <img class="poke-pic" src="${this.imagem}" alt="${this.nome}">

                    <p class="money old-price"><small>R$${this.preco}</small></p>
                    <p class="money actual-price"><small>R$</small>${this.precoDesc}</p>
                    <p class="money parcela-price"><small>12x R$ </small>${this.precoParc}</p><br>
                    <div>
                        <button data-id="${this.id}" class="btn-buy">
                        <img data-id="${this.id}" src="${this.imagem3}" title="Buy ${this.nome} Now">
                        <!--<i class="far fa-dot-circle"></i>-->
                        <span data-id="${this.id}" class="buy">Buy</span>
                        </button>
                    </div>
                </div>
            </a>
        `;
        return pokeDiv;
    }
}