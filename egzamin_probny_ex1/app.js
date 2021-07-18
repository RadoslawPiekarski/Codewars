document.addEventListener("DOMContentLoaded", function () {

  const divElems = document.querySelectorAll("div.color");

  divElems.forEach(function(element){
    element.addEventListener("mouseover", function(){
      this.innerText = this.dataset.text;
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
    
    element.addEventListener("mouseout", function() {
      this.innerHTML = null;
    });
  });
});
