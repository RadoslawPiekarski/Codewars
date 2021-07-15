function addCount() {
    let counter = parseInt(this.previousElementSibling.children[0].textContent);
    counter += 1;
    this.previousElementSibling.children[0].textContent = counter.toString();
}

let button1 = document.getElementById("button1");
button1.addEventListener("click", addCount);

let button2 = document.getElementById("button2");
button2.addEventListener("click", addCount);

let button3 = document.getElementById("button3");
button3.addEventListener("click", addCount);

