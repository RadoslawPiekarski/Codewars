function contArray(arr1, arr2){
    return arr1.concat(arr2);
}



document.addEventListener("DOMContentLoaded", function () {

  const divElems = document.querySelectorAll("div.color");

  divElems.forEach(function(element){
    element.addEventListener("mouseover", function(){
      console.log("Working!")
    });
  });
});


