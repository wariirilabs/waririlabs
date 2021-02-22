

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  
  

  let stock = document.querySelector(".stock");
  let order = document.querySelector(".order");

stock.addEventListener('click', function (){
  let forma = document.querySelector(".forma");
  
  forma.classList.remove("hide");
  forma.classList.add("show");
  this.classList.add('active');
  order.classList.remove("active");

})

order.addEventListener('click', function (){
  let forma = document.querySelector(".forma");
  
  forma.classList.remove("show");
  forma.classList.add("hide");
  this.classList.add('active');
  stock.classList.remove("active");

})




