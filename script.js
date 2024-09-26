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
       
       const taskText=inputValue.value.trim();//If input is done with unneccesary tabs, the trim-method TRIMS the string.
       console.log("input value: ", taskText);

       const exception=document.querySelector("#exception");//pulling out the error message

        if (taskText===""){
            
            exception.style.display="block"; //A block with an error message
            return; //Getting out of the function
            } else{
                exception.style.display="none"; //Clearing the error message 
            }

        
        const li= document.createElement("li"); //Creating a li-element for the task
        li.classList.add("everySpecificTask"); //Making it a class for later styling
        li.textContent=taskText;//Placing both on the same place

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent= "X" ; //Tried a trashbin, but It`s just an ordinary string
        deleteBtn.classList.add("delete-btn");//adding a class for styling


        deleteBtn.addEventListener("click", function(){
            li.remove(); //Removing the task
            taskArray=taskArray.filter(task=>task.text !==taskText);/*Updating the taskArray that holds information in the form of objects.
            Every element has a string property to them. The filter method creates a new array based on a specific condition. 
            an Iteration process starts and the first array is basically compared to the new array. 
            If the function returns TRUE= the task is included in the array.
            If the function returns FALSE= the task will be deleted and the deleteBtn will do its work :-) */

            updateCounters();
            
        });

        li.appendChild(deleteBtn);//Deletebutton for every specific Task

        //Adding a listener to this function and CSS styling to make it work
        li.addEventListener("click", function(){
            li.classList.toggle("completed") //Toggle makes it possible to switch between two different conditions. The listener gets the click and the "toggle" happens. 
            updateCounters();
        });

        taskArray.push({text:taskText, completed: false}); //Pushing the Tasks to my Array
        
        taskList.appendChild(li); //Putting the Task to the list
        inputValue.value=""; //Emptying the input
        updateCounters(); 
        
    });

}

function clearAll(){
clearBtn.addEventListener("click", function (){
    
    taskArray=[];
    taskList.innerHTML="";
    updateCounters();
});    

}

function updateCounters(){

    const completedTasks= document.querySelectorAll(".completed").length;//Counting ALL
    const totalTasksInList=taskArray.length;// The whole array with all the tasks
    const pendingTasks=totalTasksInList-completedTasks;//Total tasks - Completed tasks = Pending tasks

    completedCount.textContent=completedTasks;
    pendingCount.textContent=pendingTasks;
    totalTasks.textContent=totalTasksInList;

    //Instead of adding strings and variables to a "long string", I Choose to work with Tempelate Literals with `bakfnuttar`
    console.log(`completed: ${completedTasks}, pending: ${pendingTasks}, Total: ${totalTasksInList}`);



}

updateCounters();
addTask();
clearAll();
