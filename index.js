
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
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
async function getData() {
  const res  = await fetch("https://spreadsheets.google.com/feeds/list/1QuNTaRm_mgvSwVyaZgLQ9XgaHPdVVnKSswNa02ruk0Y/od6/public/values?alt=json");
  const data = await res.json();
  const data2 = data.feed.entry;
  let stonks = [];
 
  data2.forEach(numbers => {
    let price = numbers.gsx$number.$t;
    let name = numbers.gsx$name.$t;
    let category = numbers.gsx$category.$t;
    let image = numbers.gsx$image.$t;
    let id = numbers.gsx$id.$t;
    let info = { 
        category:category,
        price: price,
        name:name,
      
        image:image
      
      
      
    }

    let template2 = `
      
        <div class="col s12 m4 l4 categorie" data-filter="${category}">
        
        <div class="card ${category}">
          <div class="card-image">
            <img height="260" width="320" src="${image}">
            
          </div>
            
          <div class="card-content">
          <span class="card-title"> ${name}</span>  
          <p> Price </p>  
            <p style="font-size:20px !important" class="price"> ${price}</p>
              
               <button class="snipcart-add-item btn black buton white-text" onclick="getDetails(this)" style="margin-top:1.5rem !important"
  data-item-id="${id}"
  data-item-price="${price}"
  data-item-url="https://elcarlitoscafe.netlify.app/"
  
  data-item-image="${image}"
  data-item-name="${name}">
  Add to cart
</button>
            </div>
          
        </div>
      </div>
        
        
        
        `;


        cox.innerHTML+=template2;
        stonks.push(info);
         
        

        
  });

  
  let array = [];
  var grouped = _.groupBy(stonks, 'category');
  array.push(grouped);

  

  const entries = Object.values(array[0]); 

  let empty = [];
  entries.forEach(entry => {
    
      empty.push(entry);
      


      let template = `
        <li class="z-depth-1 broker" data-category ="${entry[0].category}" >
          <a class="  transparent black-text  ${entry[0].category}">${entry[0].category}</a> 
        </li>
      
      
      `;
      
      menu.innerHTML+=template;

  })
  let butoane = document.querySelector(".menu").children;
  let main = cox.children;
  
  
  /* console.log(main); */
  for (let i = 0;i<butoane.length;i++) {
    
    butoane[i].addEventListener('click',function () {
      for (let x = 0;x<butoane.length;x++) {
        butoane[x].classList.remove("active");
      }
      this.classList.add("active");
      const displayItems = this.getAttribute('data-category');

    /*   console.log(displayItems); */
      for(let z = 0;z<main.length;z++) {
        /* console.log(main[z]); */
        main[z].classList.add("hide");

        if((main[z].getAttribute('data-filter')==displayItems) ) {
          main[z].classList.remove("hide");
          main[z].classList.add("show");
          
        }
        
      }
    } )  
  }
  /* console.log(doc)
  console.log(empty[0][0].category); */
  
  
    
  
  



  
}

let cart = [];   
let total = document.querySelector(".total");
let id = 0;

function getDetails(element){
  
  let sum=0;
  let detail = {
    price:parseInt(element.closest("div").querySelector(".price").textContent),
    name:element.closest("div").querySelector(".card-title").textContent,
    id:id
  }
  cart.push(detail);
  id++;
  
  
  
  display(cart);
  
  console.log(cart);
}  
function delItem(id) {
    let index = cart.findIndex((item) => item.id === id);
    cart.splice(index, 1);
    display(cart);
}

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
}
}
getData();


function display(cart) {
  
  cart1.innerHTML=null;
  for(let i = 0;i<cart.length;i++) {
    cart1.innerHTML += `
  <li class="cart-item" id="${cart[i].id}">${cart[i].name} : ${cart[i].price} $  <a onclick="delItem(${cart[i].id})" class="btn-floating btn-small add waves-effect waves-light red "><i class="material-icons">remove</i></a></li>
  
  `;
  

   // getting the sum from the array 
  
  
  
  } 
  calcSum();
}

function calcSum(){
  let sum = 0;
  for(let i = 0; i<cart.length;i++) {
    sum+=cart[i].price;
  }
  total.innerHTML=sum;
}

let checkout = document.querySelector(".checkout");
checkout.addEventListener('click', function(){
  
})

