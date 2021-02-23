
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
            <span class="card-title"> ${name}</span>
          </div>
            <div class="card-content">
              <p style="font-size:20px !important">Price: ${price}</p>
              
            </div>
          <div class="card-action">
            <a class="btn black white-text" href="#">Add to cart</a>
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

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
}
}
getData();


