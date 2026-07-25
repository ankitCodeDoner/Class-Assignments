const items = [];
let item ={};

function addItem(e){
    e.preventDefault();
    let value_1 = document.getElementById("itemName").value;
    let value_2 = document.getElementById("itemQuantity").value;
    let data={
        itemName: value_1,
        itemQuantity: value_2
    }
    item=data;
    console.log(item);
    items.push(item);
    console.log(items);
    displayItems();
    document.getElementById("itemName").value="";
    document.getElementById("itemQuantity").value="";
    
}

function displayItems(){
    let list = document.getElementById("itemList");
    let result = '';
    items.map((item, index) => {
        result += `<li>${item.itemName}: ${item.itemQuantity}
        <button onclick=deleteItem(${index})>Delete</button></li>`;
    });
    list.innerHTML = result;


    
}

function deleteItem(idx){
    console.log(idx);
    items.splice(idx, 1);
    displayItems();
    
}






// const items= []
// let item={}

// function additem(){
//     let value1=document.getElementById("itemName").value;
//     let value2=document.getElementById("itemQuantity").value;
//     let data ={
//         itemName= value1,
//         itemQuantity=value2
//     }
// }