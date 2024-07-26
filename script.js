const form = document.getElementById("form");
const textInpute = document.getElementById("textInput");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("dateInput");
const msg = document.getElementById("msg-tesk-title");
const msgDate = document.getElementById("msg-due-date");
const msgDescription = document.getElementById("msf-description");
const tasks= document.getElementById("tasks");
const add = document.getElementById("add");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    formValidation();
      formValidationDate();
     formValidationDescription();
});


function formValidationDate(params) {
    if (dateInput.value === "") {
        console.log("Fail");
        msgDate.innerHTML = "Please Inpute date";
    }  else{
        console.log("Sucess");
        msgDate.innerHTML = "";
    }   
}
function formValidationDescription(params) {
    if(description.value === ""){
        console.log("Fail");
        msgDescription.innerHTML = "Please Inpute Description";
    } else{
        console.log("Sucess");
        msgDescription.innerHTML = "";
    }  

}


function formValidation (params) {
    if (textInpute.value === "") {
        console.log("Fail");
      msg.innerHTML = "Please Inpute Test";
    }
    
    // else if (dateInput.value === "") {
    //     console.log("Fail");
    //     msgDate.innerHTML = "Please Inpute date";
    // } 
    // else if(description.value === ""){
    //     console.log("Fail");
    //     msgDescription.innerHTML = "Please Inpute Description";
    // }

    else{
        console.log("Sucess");
        msg.innerHTML = ""; 
        // msgDate.innerHTML = "";
        // msgDescription.innerHTML = "";
      acceptData();

      add.setAttribute("data-bs-dismiss","modal");
      add.click();
      (()=>{
        add.setAttribute("data-bs-dismiss", "");
    })();

    }   

};

const data = {};
function acceptData () {
    data["text"] = textInpute.value;
    data["date"] = dateInput.value;
    data["textarea"] = descriptionInput.value;
    createTasks();
}

function createTasks(params) {
    tasks.innerHTML += `
      <div>
                <span class="task-1-2">${data.text}</span>
                <span class="date">${data.date}</span>
                <p>${data.textarea}</p>
                
                <span class="edit-delete">
                    <i  onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square edits"></i>
                    <i onClick="deleteTask(this)" class="fa-solid fa-trash edit"></i>
                </span>
        </div>   
    `;
    resetForm();
} 
let deleteTask = (event)=> { // anosmousFunction
   event.parentElement.parentElement.remove();
}
let editTask =(event) => {
    let selecctedTask = event.parentElement.parentElement;

    textInpute.value = selecctedTask.children[0].innerHTML
    dateInput.value = selecctedTask.children[1].innerHTML
    descriptionInput.value = selecctedTask.children[2].innerHTML
    
    selecctedTask.remove();
}

function resetForm(params) {
    textInpute.value = "";
    dateInput.value = "";
    descriptionInput.value = "";

}