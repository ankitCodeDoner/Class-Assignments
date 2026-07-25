const empInfo = [];
let editIdx = null;

function addEmp(e) {
    e.preventDefault();
    let name = document.getElementById("empName").value;
    let id = document.getElementById("empId").value;
    let dept = document.getElementById("dept").value;
    let salary = document.getElementById("salary").value;
    
    if (name == "" || id == "" || dept == "" || salary == "") {
        alert("Please fill all fields");
        return;
    }

    let data = {
        empName: name,
        empId: id,
        dept: dept,
        salary: salary
    }

    if(editIdx !== null){
        empInfo[editIdx] = data;
        editIdx = null;
        document.getElementById("btn").innerText = "Add";
    }
    else{
        empInfo.push(data);
    }
    // console.log(empInfo);  
    showEmp();

    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("salary").value = "";

}

function showEmp() {
    let table1 = document.getElementById("emptable");
    let result = "";
    empInfo.map((data, index) => {
        result += `
        <tr>
            <td>${data.empName}</td> 
            <td>${data.empId}</td> 
            <td>${data.dept}</td>
            <td>${data.salary}</td>
            <td>
                <button onclick=deleteEmp(${index})>Delete</button>
                <button onclick=editEmp(${index})>Edit</button>
            </td>
        </tr>
        `;
    });
    table1.innerHTML = result;
}

function deleteEmp(idx) {
    empInfo.splice(idx, 1);         // complete row delete
    showEmp();          // show after delete
}
function editEmp(idx) {
    editIdx = idx;      // asain index value

    document.getElementById("empName").value = empInfo[idx].empName;        //array se input me value la rhe h
    document.getElementById("empId").value = empInfo[idx].empId;
    document.getElementById("dept").value = empInfo[idx].dept;
    document.getElementById("salary").value = empInfo[idx].salary;

    document.getElementById("btn").innerText = "Update";    // add ki jaga Update button 
}

