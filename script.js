
document.addEventListener("click", function(event) {
  if (event.target.matches("#menuOpen") ) {
      document.getElementById("sidebar").classList.remove("close");
      document.getElementById("menuOpen").style.display = "none";
      document.getElementById("menuClose").style.display = "block";
      const boxes = document.querySelectorAll('.sectors');
      for (const sectors of boxes) {
        sectors.style.width = "calc(100% - 260px)";
      }
      const flexo = document.querySelectorAll('.atract');
      for (const atract of flexo) {
        atract.style.display = "flex";
      }
      const mediaQuery = window.matchMedia('(max-width: 400px)')
      if (mediaQuery.matches) {
        const widthi = document.querySelectorAll('.sectors');
        for (const sectors of widthi) {
          sectors.style.width = "calc(100% - 78px)";
        }
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
    const flexo = document.querySelectorAll('.atract');
    for (const atract of flexo) {
      atract.style.display = "none";
    }
    const mediaQuery = window.matchMedia('(max-width: 400px)')
    if (mediaQuery.matches) {
      const widthi = document.querySelectorAll('.sectors');
      for (const sectors of widthi) {
        sectors.style.width = "100%";
      }
    }
  }
},
  false
);


