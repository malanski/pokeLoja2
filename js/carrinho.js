
function Carrinho() {
  // Abre o carrinho de compras
  const btnCart = document.querySelector('#btn-cart');
  btnCart.addEventListener('click', function(event) {
    event.preventDefault();
    const openCartClass = 'carrinho-aberto';
    document.body.className.includes(openCartClass) ? document.body.className = '': document.body.className = openCartClass;

    keyboardPress = addEventListener('keydown', function(event){
        if(event.key === "Escape") {
        document.body.className = '';
      };
    });
       //  document.body.className.includes(openCartClass);
       //  document.body.className = openCartClass;
  });

  //  Fecha o Carrinho De Compras
  const btnCartClose = document.querySelector('#btn-cart-x');
  btnCartClose.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.className = '';

  //  document.body.classList.add();
  });
  
  const clickOutCart = document.querySelector('.opn-cart');
  clickOutCart.addEventListener('click', function(event) {
    event.preventDefault();
    document.body.className = '';

  });
}
      // btnCartClose.addEventListener('keypress', function(event) {
      //   event.preventDefault();

      //   document.body.className = '';
      // });


    //   document.body.classList.add('Esc', function() {
    //     alert("Esc pressed");
    // });
  
      //   document.addEventListener('keydown', function(event) {
    //     if(KeyboardEvent.keyCode: 27) {
    //     }
    // });




  
  // document.onkeydown = function(evt) {
  //   evt = evt || window.event;
  //   if (evt.key == 27) {
  //       alert('Esc key pressed.');
  //   }
  // };