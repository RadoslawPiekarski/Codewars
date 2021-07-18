document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll("button");
  const container = document.querySelector("#container");

  function clickAction(){
    container.innerText = this.dataset.text;
  }

  buttons.forEach(function(element){
    element.addEventListener("click", clickAction)
  });
});
