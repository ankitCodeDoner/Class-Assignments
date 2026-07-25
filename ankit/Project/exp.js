const store = [];
let editIndex = null;

function addExpense(e){
    e.preventDefault();
    let name = document.getElementById("exName").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;
    let categary = document.getElementById("categary").value;

    let data = {
        exName: name,
        amount: amount,
        date: date,
        categary: categary
    }

    store.push(data);
    showExpense();

    document.getElementById("exName").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
    document.getElementById("categary").value = "";
}

function showExpense(){
    let list = document.getElementById("exList");
    let result = "";
    store.map((data, index)=>{
        result += `
            <li>${data.exName}: ${data.amount} ${data.date} ${data.categary} 
            <button onclick=deleteExpense(${index})>Delete</button></li>
        `;
    });
    list.innerHTML = result;
}

function deleteExpense(idx){
    editIndex = idx;
    store.splice(idx,1);
    showExpense();
}