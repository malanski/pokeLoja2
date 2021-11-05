  <br>
  <div align="center">
    # PokéLoja<br>
    version 0.2 by Ulisses Malanski<br>
    <img height="320em" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/890.png">
    <img height="110em" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/889.png">
    <img height="70em" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/891.png">
  </div>
  <br>
  ##### This project is about creating a responsive web store using Html and Css(with a pinch os JavaScript too)
  #### Project Struture
  <br>
  ##### Gridzera is the name of de class in css, it is the grid that holds the whole structure of the Home(index.html).
   
 grid-template-areas:   
    'blankhl---------- header ----header -- header---blankhr'  
    'blanknl---------- nav ------ nav ----- nav ---- blanknr'  
    'costeleta-left--- **content -- content**-- aside----costeleta-right'  
    'costeleta-left--- **content -- content**-- aside----costeleta-right'  
    'costeleta-left--- **content -- content**-- aside----costeleta-right'  
    'costeleta-left--- **content -- content**-- aside----costeleta-right'  
    'blankfl---------- footer --- footer -- footer---blankfr';  
}
  
  #### the Content have inside of it another grid called grid-main.  
      
     main {  
    grid-area: "content";  
}      
main .__grid-main__ {     
     grid-template-areas:   
    'pok1- pok2- pok3- -pok4'  
    'pok5- pok6- pok7- -pok8'  
    'pok9- pok10 pok11- pok12'  
    'prox- prox- prox- -prox';
      
  #### those parts refered as pok'number' above are the spaces for the cards and they hold all the information for the porducts in the store.
  
