// const items = [];
// let item = {};

// function addItem(e){
//     e.preventDefault();

//    let value_1 = document.getElementById("itemName").value;
//    let value_2 = document.getElementById("itemQuantity").value;


//  let data = {
//     itemName: value_1,
//     itemQuantity: value_2
//  }
//  item = data;
//  console.log(item);
//  items.push(item);
//  console.log(items)
//  displayItems();

//  document.getElementById("itemName").value="";
//  document.getElementById("itemQuantity").value="";

// } 
// function displayItems(){
//     let list = document.getElementById("itemlist");
//     let result = '';

//     items.map((item, index) => {
//         result += `
//         <li>${item.itemName}: ${item.itemQuantity}
//         <button onclick=deleteItem(${index})>Delete</button></li>`
//     });
//     list.innerHTML = result;
// }
// function deleteItem(idx) {
//     console.log(idx);
//     items.splice(idx, 1);
//     displayItems();
// }




// const iteams = [];
// let iteam = {};

// function addIteam(e){
//     e.preventDefault();

//     let value_1 = document.getElementById("iteamName").value;
//     let value_2 = document.getElementById("iteamQuantity").value;



// let data = {
//    iteamName: value_1,
//    iteamQuantity: value_2
// };

// iteam = data;
// console.log(iteam);
// iteams.push(iteam);
// console.log(iteams);
// displayIteams();

// document.getElementById("iteamName").value = "";
// document.getElementById("iteamQuantity").value = "";
// }
// function displayIteams(){
//     let list = document.getElementById("iteamList")
//     let result = '';

//     iteams.map((iteam, index) => {

//     result +=`
//     <li>iteam.${iteam.iteamName}: ${iteam.iteamQuantity}
//     <button onclick=deleteIteam(${index}) >Delete</button>  </li>`;
// })
// list.innerHTML = result;
// }

// function deleteIteam(idx){
//     console.log(idx);
//     iteams.splice(idx,1);
//     displayIteams();
// }





// ***** 2 *****


const items = [];
let editIndex = null;

function addItem(e){
    e.preventDefault();
    let value_1 = document.getElementById("itemName").value;
    let value_2 = document.getElementById("itemQuantity").value;

    let data = {
        itemName:value_1,
        itemQuantity:value_2
    }
    
    if (editIndex !== null) {
        items[editIndex] = data;
        editIndex = null;
        document.getElementById("btn").innerText = "Add"
    } else {
        items.push(data);
    }
   displayItems();
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
}

    

function displayItems() {
    let list = document.getElementById("itemList");
    let result = '';
    items.map((item, index) => {
        result += `<li>${item.itemName}:${item.itemQuantity}
      <button onclick=deleteItem(${index})>Delete</button>
      <button onclick=editItem(${index})>Edit</button> </li> `;
    });
    list.innerHTML = result;
}

function deleteItem(idx) {
    console.log(idx);
    items.splice(idx, 1);
    displayItems();
}

function editItem(idx) {
    console.log(idx);
    editIndex = idx
    console.log(items[idx])

    document.getElementById("itemName").value = items[idx].itemName;
    document.getElementById("itemQuantity").value = items[idx].itemQuantity;

    document.getElementById("btn").innerText = "Update";

}

