const store = [];
let editIndex = null;

function addContact(e){
    e.preventDefault();
    let n = document.getElementById("name").value;
    let mob = document.getElementById("mobile").value;
    let em = document.getElementById("email").value;
    let adrs = document.getElementById("address").value;

    let data = {
        name: n,
        mobile: mob,
        email: em,
        address: adrs
    }
    if(editIndex !== null){
        // console.log(editIndex);
        store[editIndex] = data;
        editIndex = null;
        // console.log(editIndex);
        document.getElementById("btn").innerText = "Add Contact";
    }
    else{
        store.push(data);
    }
    displayCont();

    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
}

function displayCont(){
    let table = document.getElementById("contTable");
    let result = "";
    store.map((data, index)=>{
        result += `
            <tr>
                <td>${data.name}</td>
                <td>${data.mobile}</td>
                <td>${data.email}</td>
                <td>${data.address}</td>
                <td>
                    <button onclick=delContact(${index})>Delete</button>
                    <button onclick=editCont(${index})>Edit</button>
                </td>
            </tr>
        `;
    });
    table.innerHTML = result;
}


function delContact(idx){
    store.splice(idx,1);
    displayCont();
}

function editCont(idx){
    editIndex = idx;

    document.getElementById("name").value = store[idx].name;
    document.getElementById("mobile").value = store[idx].mobile;
    document.getElementById("email").value = store[idx].email;
    document.getElementById("address").value = store[idx].address;

    document.getElementById("btn").innerText = "Update Contact";
}