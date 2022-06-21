const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const cloneBtn = document.getElementById("clone-btn");
const displayBtn = document.getElementById("display-btn");

addBtn.addEventListener("click", addItems);
removeBtn.addEventListener("click", removeItems);
cloneBtn.addEventListener("click", cloneItemList);
displayBtn.addEventListener("click", displayItemList);

var list = null;
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

function removeItems() {
    let n = prompt("what number of items do you want to remove?", "0");
    for(let i = 0; i < n; i++) {
       var elmnt = document.getElementById("list").firstElementChild;
       elmnt.remove();
    }
}

function cloneItemList(id) {
    let dumblist = document.getElementById(id);
    //let listLi = dumblist.getElementsByTagName("li");
    //listLength = listLi.length;
    let node = dumblist.cloneNode(true);
    /*
    for (let i = 0; i < listLength; i++) {
        let node = $('ol li:eq(' + i + ')').text();
        let elmnt = node.cloneNode(true);
        list.appendChild(elmnt);
     }
     */
    //list = document.getElementById("list").innerHTML;
    console.log(node);
    return node;
}

function displayItemList() {
    /*const newList = document.createElement("ol");
    const list1 = document.createTextNode(list);
    newList.appendChild(list1);*/
    
    let newList = cloneItemList("list");

    const element = document.getElementById("body");
    element.appendChild(newList);
}

