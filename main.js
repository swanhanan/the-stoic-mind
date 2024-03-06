
const qButton = document.getElementById("quote-button");

const changePage = () =>{

  qButton.setAttribute("href", "quote.html");
  
};


let randomNum = Math.floor(Math.random()*18) + 1;

let addr = "./media/" + randomNum + ".png" ;
console.log(addr);

document.getElementById("quote-image").setAttribute("src", addr);

const y_date = document.getElementById("year");
y_date.innerHTML = new Date().getFullYear();
