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
    if(name == "" || amount == "" || date == "" || categary == ""){
        alert("Please fill all fields!");
        return;
    }

    if(editIndex !== null){
        store[editIndex] = data;
        editIndex = null;
        document.getElementById("btn").innerText = "Add Employee";
    }
    else{
        store.push(data);
    }
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
            <tr>
                <td>${data.exName}</td> 
                <td>${data.amount}</td>
                <td>${data.date}</td> 
                <td>${data.categary}</td>
                <td>
                    <button onclick=deleteExpense(${index})>Delete</button>
                    <button onclick=editExpense(${index})>Edit</button>
                </td>
            <tr>
        `;
    });
    list.innerHTML = result;
}

function deleteExpense(idx){
    editIndex = idx;
    store.splice(idx,1);
    showExpense();
}

function editExpense(idx){
    editIndex = idx;

    document.getElementById("exName").value = store[idx].exName;
    document.getElementById("amount").value = store[idx].amount;
    document.getElementById("date").value = store[idx].date;
    document.getElementById("categary").value = store[idx].categary;

    document.getElementById("btn").innerText = "Update Employee";
}