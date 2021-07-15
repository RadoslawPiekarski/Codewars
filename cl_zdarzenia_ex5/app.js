let clickMeButtons = document.getElementsByClassName("btn-outline-primary")
let counter = 0;

function addCount(){
    console.log(clickMeButtons)

    let spanText = this.previousSibling;
    console.log(this);
    console.log(spanText);
    spanText.innerHTML = "dupa";
}

for (let i=0; i<clickMeButtons.length; i++){
clickMeButtons[i].addEventListener("click", addCount);
}
