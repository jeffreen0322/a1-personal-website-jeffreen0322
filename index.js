function myFunction() {
    var x = document.getElementById("myLinks");
    var hamburger = document.getElementById("burger");
    if (x.style.display === "block") {
      x.style.display = "none";
      hamburger.style.display = "block";
    } else {
      x.style.display = "block";
      hamburger.style.display = none;
    }
  }