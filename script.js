let taskArray=[]; //Array declared for my List, so that it can be stored.

//I point to my HTML-elements and store them as constants.  
const completedCount= document.querySelector("#completedCount");
const pendingCount= document.querySelector("#pendingCount"); 
const totalTasks= document.querySelector("#totalTasks");

const taskList=document.querySelector("#theList");
let inputValue=document.querySelector("#textInput");

/* Functions that will be required:
# Add task (Btn)
# Clear all tasks (Btn)
# Update Counters*/

function addTask(){
    addBtn.addEventListener("click", function(){
        console.log("add-button is clicked");

       const taskText=inputValue.value.trim();
       console.log("input value: ", taskText);

        if (taskText===""){
            console.log("You must write something!");
            return;
        }
        const li= document.createElement("li");
        li.textContent=taskText;

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent= "U+1F5D1"; //Using emoji icon
        deleteBtn.classList.add("delete-btn");//adding a class for styling


        deleteBtn.addEventListener("click", function(){
            li.remove(); //Removing the task
            taskArray=taskArray.filter(task=>task.text !==taskText);
            updateCounters();
        })

        //Adding a listener to this function and CSS styling to make it work
        li.addEventListener("click", function(){
            li.classList.toggle("completed")
            updateCounters();
            console.log("Task completed:", li.textContent);
        });

        taskArray.push({text:taskText, completed: false}); //Pushing the Tasks to my Array
        console.log("Task array: ", taskArray);
        
        taskList.appendChild(li); //Putting the Task to the list
        inputValue.value=""; //Emptying the input
        updateCounters(); 
        
    });

}

function clearAll(){
clearBtn.addEventListener("click", function (){
    console.log("Clear-Button is clicked");
    
    taskArray=[];
    taskList.innerHTML="";
    updateCounters();
});    

}

function updateCounters(){

    const completedTasks= document.querySelectorAll(".completed").length;
    const totalTasksInList=taskArray.length;
    const pendingTasks=totalTasksInList-completedTasks;

    completedCount.textContent=completedTasks;
    pendingCount.textContent=pendingTasks;
    totalTasks.textContent=totalTasksInList;

    console.log("completed: ${completedTasks}, pending: ${pendingTasks}, Total: ${totalTasksInList}");



}


addTask();
clearAll();
