let taskArray=[]; //Array declared for my List, so that it can be stored.

//I point to my HTML-elements and store them as constants.  
const completedCount= document.querySelector("#completedCount");
const pendingCount= document.querySelector("#pendingCount"); 
const totalTasks= document.querySelector("#totalTasks");
const taskList=document.querySelector("#theList");
const alertText=document.querySelector("#alert");
const addBtn=document.querySelector("#addBtn");

let completedTasksCount=0;
let inputValue=document.querySelector("#textInput");

function addTask(){
    addBtn.addEventListener("click", function(){
    const taskText=inputValue.value.trim();//If input is done with unneccesary tabs, the trim-method TRIMS the string.
        
        if (taskText===""){
            alertText.classList.add("blink"); //Blink class to add animation
            alertText.style.display="block"; //alert text visible
            return; //getting out of the function if text is empty
            
        } else{
            alertText.classList.remove("blink"); //Clearing the error animation
            alertText.style.display="none"; //Hiding alert
        }

        
        const li= document.createElement("li"); //Creating a li-element for the task
        li.classList.add("everySpecificTask"); //Making it a class for later styling
      
        const taskTextSpan=document.createElement("span");
        taskTextSpan.textContent=taskText; //Input from user and textcontent are merged
        taskTextSpan.classList.add("task-text"); //Adding a class
        li.appendChild(taskTextSpan);//Appending a child to the list. 
        
        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="🗑️";
        deleteBtn.classList.add("delete-btn");//adding a class for styling
       


        deleteBtn.addEventListener("click", function(){
            li.remove(); //Removing the list-element from list
            taskArray=taskArray.filter(task=>task.text !==taskText);/*Updating the taskArray that holds information in the form of objects.
            Every element has a string property to them. The filter method creates a new array based on a specific condition. 
            an Iteration process starts and the first array is basically compared to the new array. 
            If the function returns TRUE= the task is included in the array.
            If the function returns FALSE= the task will be deleted and the deleteBtn will do its work :-) */

            updateCounters();
            
 });

        li.appendChild(deleteBtn);//Deletebutton for every specific Task is placed in the list
        taskList.appendChild(li); //Adding list to the task-list

        const taskCount = taskList.children.length; //Counting total tasks in list
        li.style.marginLeft=`${taskCount * 20}px` //Increasing margin left and right for every new task
        li.style.marginRight=`${taskCount * 20}px` 
        taskArray.push({text:taskText,completed:false}); //Pushing the Tasks to my Array with text and status



        //Adding a listener to this function and CSS styling to make it work
        li.addEventListener("click", function(){
            li.classList.toggle("completed") //Toggle makes it possible to switch between two different conditions. The listener gets the click and the "toggle" happens. 
            const taskIndex=taskArray.findIndex(task=>task.text===taskText); //Finding the index for the task in the array
            
            if (taskIndex!==-1){ //If find-Index returns -1, there is no task in the list//If taskIndex is the opposite = +1- A task is found in the array
                taskArray[taskIndex].completed=!taskArray[taskIndex].completed;
                //! is a Logic operator ! This makes the toggle work so it can switch between modes.
                //If completed is true (task completed), it will return false (not completed). This is so hard for me to understand.. It`s like double negatives and tvärtomspråket.
            }
            updateCounters();

        });
        
        taskList.appendChild(li); //Putting the Task to the list
        inputValue.value=""; //Emptying the input
        updateCounters(); 
        
    });   

}

function updateCounters(){
   
    completedTasksCount= taskArray.filter(task=>task.completed).length;//All completed tasks are counted
    const totalTasksInList=taskArray.length;// The whole array with all the tasks are counted
   

    completedCount.textContent=completedTasksCount; //Updating the display of completed tasks
    /*pendingCount.textContent=pendingTasks;
    totalTasks.textContent=totalTasksInList;*/
    //Instead of adding strings and variables to a "long string", I Choose to work with Tempelate Literals with `bakfnuttar`
    console.log(`completed: ${completedTasksCount}, Total: ${totalTasksInList}`); //Displays all the completed tasks and total tasks still in list.


}

//Function for completed tasks. ++ means 1 added task.
function completedTasks(){
    completedTasks++;
    document.querySelector('.completedCount').textContent=completedTasks; //Tasks are in order, with the right ID:s.
    //task are also displayed
}


updateCounters();
addTask();


