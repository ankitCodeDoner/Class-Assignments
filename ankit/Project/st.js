
const StudnetInfo = [];
let editIndex = null;

function addStudent(e){
    e.preventDefault();
    let name = document.getElementById("stName").value;
    let roll = document.getElementById("rollNo").value;
    let course = document.getElementById("course").value;
    

    let info = {
        stName: name,
        rollNo: roll,
        course: course
    };

    if(name == "" || roll == "" || course == ""){
        alert("Please fill all fields");
        return;
    }
    
    if(editIndex !== null){
        StudnetInfo[editIndex] = info;
        editIndex = null;
        document.getElementById("btn").innerText="Add";
    }
    else{
        StudnetInfo.push(info);
    }
    
    showStudent();
    document.getElementById("stName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("course").value = "";
}

function showStudent(){
    let list = document.getElementById("studentList");
    let result = "";
    StudnetInfo.map((info, index)=>{
        result += `
        <tr>
            <td>${info.stName}</td> 
            <td>${info.rollNo}</td> 
            <td>${info.course}</td>
            <td>
                <button onclick=deletest(${index})>Delete</button>
                <button onclick=editSt(${index})>Edit</button>
            </td>
        </tr>`;
    });
    list.innerHTML = result;
}

function deletest(idx){
    StudnetInfo.splice(idx,1);
    showStudent();
}

function editSt(idx){
    editIndex = idx;
    document.getElementById("stName").value = StudnetInfo[idx].stName;
    document.getElementById("rollNo").value = StudnetInfo[idx].rollNo;
    document.getElementById("course").value = StudnetInfo[idx].course;
    document.getElementById("btn").innerText = "Update";
}