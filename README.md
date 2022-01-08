
<div align="left">
  
# PokeSTORE - AWARI FullStack Course

</div>

<div align="right">
https://github.com/malanski/pokeLoja2/
</div>

<div align="left">
    
### HTML + (SASS)SCSS + JavaScript with API 
    
</div> 


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

##### This project is one of my first attempt of creating a responsive web store using Html and Css, also javaScript an API manipulation.

#### Project Struture <br>

##### Gridzera is the name of de class in css, it is the grid that holds the whole structure of the Home(index.html).
   
    grid-template-areas:   
      'header -- header--'  
      'nav ----- nav ----'  
      'content - aside---'  
      'footer -- footer--;  
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
    }
      
  #### those parts refered as pok'number' above are the spaces for the cards and they hold all the information for the porducts in the store.
  
  #### For Media Queries every grid shape change to 2 columns
    
         grid-template-areas:
            'header  '
            'nav     '
            'content '
            'aside   '
            'footer  ';  
        
        grid-template-areas:
            'pok1 pok2'
            'pok3  pok4'
            'pok5 pok6'
            'pok7  pok8'
            'pok9 pok10'
            'pok11 pok12'
            'prox prox';
  
  
  ##### Page#1 é um local de testes prara exercícios CSS.
  
