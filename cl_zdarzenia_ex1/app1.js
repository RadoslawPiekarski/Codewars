let elements = document.getElementsByClassName("parent");

function display_children(event){
    let children_element = this.children /* return HTML collection*/
    children_element[0].style.display = "block"
}

function hide_childern(event){
    let children_element = this.children /* return HTML collection*/
    children_element[0].style.display = "none"
}

elements.forEach(function (element){
    elements.addEventListener("mouseover",display_children);
    elements.addEventListener("mouseout",hide_childern)
});

// for (let i = 0; i < elements.length; i++){
//     elements[i].addEventListener("mouseover",display_children)
// }
//
// for (let i = 0; i < elements.length; i++){
//     elements[i].addEventListener("mouseout",hide_childern)
// }


