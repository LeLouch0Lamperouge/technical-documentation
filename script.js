
document.addEventListener("click", function(event) {
  if (event.target.matches("#menuOpen") ) {
      document.getElementById("sidebar").classList.remove("close");
      document.getElementById("menuOpen").style.display = "none";
      document.getElementById("menuClose").style.display = "block";
      const boxes = document.querySelectorAll('.sectors');
      for (const sectors of boxes) {
        sectors.style.width = "calc(100% - 260px)";
      }
  }
},
false
);

document.addEventListener("click", function(event) {
  if (event.target.matches("#menuClose") ) {
    document.getElementById("sidebar").classList.add("close");
    document.getElementById("menuOpen").style.display = "block";
    document.getElementById("menuClose").style.display = "none";
    const boxes = document.querySelectorAll('.sectors');
    for (const sectors of boxes) {
      sectors.style.width = "calc(100% - 78px)";
    }
  }
},
  false
);


