
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


