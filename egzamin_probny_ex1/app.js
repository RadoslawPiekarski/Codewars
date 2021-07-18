function contArray(arr1, arr2){
    return arr1.concat(arr2);
}



document.addEventListener("DOMContentLoaded", function () {

  const divElems = document.querySelectorAll("div.color");

  divElems.forEach(function(el){
    el.addEventListener("mouseover", function(){
      this.innerText = this.dataset.text;
      this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });

  });

});


