const list = null;
function addItems() {
    const item1 = document.createElement("li");
    const node1 = document.createTextNode("Macaroni");
    item1.appendChild(node1);
    const item2 = document.createElement("li");
    const node2 = document.createTextNode("Tagliatelle");
    item2.appendChild(node2);
    const item3 = document.createElement("li");
    const node3 = document.createTextNode("Rotelle");
    item3.appendChild(node3);
    const item4 = document.createElement("li");
    const node4 = document.createTextNode("Pappardelle");
    item4.appendChild(node4);
    const item5 = document.createElement("li");
    const node5 = document.createTextNode("Fettuccine");
    item5.appendChild(node5);

    const element = document.getElementById("list");
    element.appendChild(item1);
    element.appendChild(item2);
    element.appendChild(item3);
    element.appendChild(item4);
    element.appendChild(item5);
}

function removeItems(n) {
    for(let i = 0; i < n; i++) {
       var elmnt = document.getElementById("list").firstElementChild;
       elmnt.remove();
    }
}

function cloneItemList() {
    list = document.getElementById("list");
    console.log(list);
}

function displayItemList() {
    const newList = document.createElement("ol");
    newList.appendChild(list);
    
    const element = document.getElementById("body");
    element.appendChild(newList);
}
