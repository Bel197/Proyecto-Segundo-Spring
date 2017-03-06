var mostrar = function(divtexte) {
  var divtexte = document.getElementById(divtexte);
  if(divtexte.style.display == "block") {
    divtexte.style.display = "none";
  } else {
    divtexte.style.display = "block";
  }
}
