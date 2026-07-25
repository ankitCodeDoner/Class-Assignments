
// const items = [];
// let editIdx = null;

// function addItem(e) {
//     e.preventDefault();
//     let value1 = document.getElementById("itemName").value;
//     let value2 = document.getElementById("Quantity").value;

//     let data = {
//         itemName: value1,
//         Quantity: value2
//     }
    
//     if(editIdx !== null){
//         items[editIdx] = data;
//         editIdx = null;
//         document.getElementById("btn").innerText="Add";
//     }
//     else {
//         items.push(data);
//     }
//     displayItems();
    
//     document.getElementById("itemName").value = "";
//     document.getElementById("Quantity").value = "";
// }

// function displayItems(){
//     let list = document.getElementById("itemList");
//     let result = "";
//     items.map((item,index)=>{
//         result += `<li>${item.itemName}: ${item.Quantity}
//         <button onclick=editItem(${index})>Edit</button>
//         <button onclick=deleteItem(${index})>Delete</button>
//         </li>`;
//     });
//     list.innerHTML = result;
// }

// function deleteItem(idx){
//     items.splice(idx,1);
//     displayItems();
// }
// function editItem(idx){
//     editIdx = idx;
//     document.getElementById("itemName").value = items[idx].itemName;
//     document.getElementById("Quantity").value = items[idx].Quantity;
//     document.getElementById("btn").innerText="Update";
// }


