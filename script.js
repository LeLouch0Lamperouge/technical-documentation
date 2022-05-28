
document.addEventListener("click", function(event) {
  if (event.target.matches("#menuOpen") ) {
      document.getElementById("sidebar").classList.remove("transform");
  }
},
false
);

document.addEventListener("click", function(event) {
  if (event.target.matches("#menuClose") ) {
    document.getElementById("sidebar").classList.add("transform");
  }
},
  false
);


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
