let elements = document.getElementsByClassName("parent");

function display_children(event){
    let children_element = this.children /* return HTML collection*/
    console.log(children_element);
    children_element[0].style.display = "block"
}

function hide_childern(event){
    let children_element = this.children /* return HTML collection*/
    console.log(children_element);
    children_element[0].style.display = "none"
}

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener("mouseover",display_children)
}

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener("mouseout",hide_childern)
}
