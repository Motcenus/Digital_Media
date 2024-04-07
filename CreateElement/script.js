let add = document.getElementById("add");
let remove = document.getElementById("remove");



add.onclick = function addBox() {
    let box = document.createElement("div");
    box.classList.add("box");
    document.body.appendChild(box);
}

remove.onclick =  function removeBox() {
    let boxlist = document.querySelectorAll(".box");
    boxlist[0].remove();
}