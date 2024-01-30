let randomNum = Math.floor(Math.random()*18) + 1;

let addr = "media/" + randomNum + ".png" ;

$("#quote-image").attr("src", addr);
