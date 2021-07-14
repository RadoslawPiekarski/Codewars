let clickMeButtons = document.getElementsByClassName("btn-outline-primary")
let counter = 0;

function addCount(){
    counter +=1;
    let spanText = document.getElementsByClassName("counter");
    spanText[0].innerHTML = counter;
}

for (let i=0; i<clickMeButtons.length; i++){
clickMeButtons[i].addEventListener("click", addCount);
}
