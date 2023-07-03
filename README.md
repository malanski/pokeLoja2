# Ecommerce Pokémon

This is one of my first application projects creating a responsive Ecommerce website using HTML, CSS - SASS, JavaScript and API. The project's teacher is Henrique Marques. I decided to take inspiration from the Pokémon card game to display the most relevant images found in the API.  

<div align="right">
   
## Deploy at: <a href="https://github.com/malanski/pokeLoja2/">PokéLoja</a>  
   
</div>

## Objectives  
  
- Create a site Ecommerce with SASS + HTML
- Use API (API Pokémon) through JavaScript fetch
- Customize or design


## Technologies 
  
- HTML5
- CSS3
- JavaScript
- API
- Node
- FontAwesome
- Git
- Github

## Description

This project is an online Pokémon card store. It uses the Pokémon API to fetch information about the different Pokémon and display them on the page. The design is custom and was created using SASS and HTML. The JavaScript code is responsible for fetching the data from the API and rendering it on the page.  

Here is an example of code that fetches the data from the API and renders the Pokémon on the page:  

```javascript
let page = 0;
const limit = 20;
let pokemons = [];
async function getPokemons(page = 0) {
    const pokeList = document.querySelector('.poke-list');
    // Loading
    pokeList.innerHTML = `
        <div>
            <div class="loading">
                <p>Now Loading... please wait...</p>
            </div>
        </div>
    `;
    // Limita aquantidade de Pokémon por Página
    // Faz pagina subir depois de clicar mudar pagina
    window.scrollTo({top: 0, behavior: 'smooth'})
    await fakePromise();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit * page}`);
    const json = await response.json();
    // Arredonda a quantidade de páginas
    const pages = Math.ceil(json.count / limit);
    // mostra numero de paginas atual e total: logger
    pageLogger((page + 1) + ':' + pages);
    return json;
}
function pageLogger(page) {
    const pageLogs = document.querySelector('.page-log');
    pageLogs.innerHTML = `${page}`;
}
const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 500));
//  RENDERIZA OS POKEMONS NA LISTA
function renderPokemons(pokemonsApi) {
    const pokeList = document.querySelector('.poke-list');
    pokeList.innerHTML = '';
    const pokemons = pokemonsApi.map((pokemon) => new Pokemon(pokemon.name, pokemon.url));
    this.pokemons = pokemons;
    pokemons.forEach((pokemon) => {
        const html = pokemon.html();
        pokeList.appendChild(html)
    });
}
```

This code fetches the data from the API, creates a list of `Pokemon` objects, and then renders each `Pokemon` on the page using the `html()` method of the `Pokemon` object.  
  
## How to use

To use this project, just clone the repository and open the `index.html` file in your browser.  
  
## Contributing

If you would like to contribute to this project, feel free to submit a pull request. All contributions are welcome!  


<div align="left" margin-top="-150px">
    
| <img height="100px" src="https://avatars.githubusercontent.com/u/87362996?v=4"> | <a href="https://github.com/malanski">Ulisses Malanski</a> " - Web Developer/Visual Artist and musician in his spare time.  |
| ----------- | ----------- |
| inicio do projeto | desde outubro 2021 |
| STATUS | em Desenvolvimento |

    
<div>

<div align="center">  
  <img height="320em" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png">
  <img height="110em" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png">
  <img height="70em" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/891.png">
</div>



