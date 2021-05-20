
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, instances);
  });

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});
let menu = document.querySelector(".menu");
let cox = document.querySelector(".stonks");
let container = document.querySelector(".container");
let collapse = document.querySelector(".collapsible");
let float = document.querySelector(".btn-floating");

let cart1 = document.querySelector(".cart");
let shop = document.querySelector(".shop");
/* float.addEventListener("click",function(){
  shop.classList.toggle("show")
  
}) */


let checkout = document.querySelector(".checkout");
checkout.addEventListener('click', function(){
  
})

