//import {compareAsc, format} from "date-fns";
 import { dateForThings } from "./calender.js";

 import book from "../images/round-icons-bnjMklTnCyc-unsplash.jpg";

 //import { ul2, createNavBar} from "./home.js";

console.log("I am logic.js");

let isClicked = false;
const projectBox = []

const general = {

};

export class Project{

    constructor(name, date){
     this.name = name || "General";
     this.date = date;
     this.todos = [];
     this.isCompleted = false;
     this.id = "projects";}

    saveProject(obj){
        projectBox.push(obj);
                                                                                                                       
    }
    
    createPage(counter, task, obj){        
          const container = document.createElement("div");
              container.className = "todayContainer";
          const header = document.createElement("div");
              header.className = "todayHeaderdiv";
        
          const bookicon = document.createElement("img");
               bookicon.src = book;
               bookicon.className = "book-icon";
                let text6 = document.createElement("h1");
                text6.textContent = obj.name;
                header.append(bookicon, text6);
          const count = document.createElement("p");
             const span = document.createElement("span");
                span.className = "material-symbols-outlined";
                span.textContent = "check_circle";
                
            let text7 = document.createElement("p");
                text7.textContent= "tasks";
                count.append(span,`${counter + " "+ text7.textContent }` );
               
         const ul = document.createElement("ul");
         const dropDown = document.createElement("span");
                dropDown.className = "material-symbols-outlined";
                dropDown.id = "dropDown";
                dropDown.textContent = "stat_minus_1";
                
                 let text8 = document.createElement("p");
                  text8.textContent= "Overdue";
                  text8.id = "overdue";
                  let text9 = document.createElement("p");
                  text9.textContent= "Reschedule"; 
                  text9.style.color = "orangered";
                   
                  ul.append(dropDown, text8, text9);
           
               const todayHr1 = document.createElement("hr"); 
               const todoItem = document.createElement("li");
               todoItem.id = "todos";
               const radioBtn = document.createElement("span");
                radioBtn.className = "material-symbols-outlined";
                radioBtn.textContent = "radio_button_unchecked";
                
                let text10 = document.createElement("p");
                  text10.textContent= (task || " Edit Videos and post by 3pm.");
                  todoItem.append(radioBtn,text10);
               
                 const addTaskBtn = document.createElement("button");
                 addTaskBtn.className = "addTaskBtn";
            const plusIcon = document.createElement("span");
                plusIcon.className = "material-symbols-outlined";
                plusIcon.id = "plusIcon";
                plusIcon.textContent = "add_2"; 
                
                let text11 = document.createElement("p");
                  text11.textContent= "Add task";
                  addTaskBtn.append(plusIcon , text11);
            const todayHr = document.createElement("hr") ;   
             container.textContent="";
             container.append(header, count, ul, todayHr1,todoItem, todayHr, addTaskBtn);
             
             let numb = pagediv.childElementCount; console.log(numb)
             if (numb > 1){
                 pagediv.lastChild.replaceWith(container);
             }else {
               pagediv.append(container);
             }
              
            function pressRadioBtn(){
            // this function replaces radio icons for raddit icon when tasks are completed. updates todo.iscomplete objects.
            const rabbiticon = document.createElement("img");
               rabbiticon.src = rabbit;
               rabbiticon.className = "rabbit-icon";
               radioBtn.replaceWith(rabbiticon);
               Todo.checkList = true;
        };
        
              function collasibleDropdown(){
            // this function handles todolist ui collasping effects.
            const dropRight = document.createElement("span");
                dropRight.className = "material-symbols-outlined";
                dropRight.id = "dropRight";
                dropRight.textContent = "chevron_right";
           
                container.removeChild(todoItem);
                container.removeChild(todayHr);
                dropDown.replaceWith(dropRight);
        
                dropRight.addEventListener("click" , ()=>{
                container.removeChild(addTaskBtn);
                container.append(todoItem, todayHr, addTaskBtn);
        
                 dropRight.replaceWith(dropDown);
            })
        };
        
        function startRescheduleBtn(){      
            // this function creates ui for reschdule icon.and adds date to todos.
             const rescheduleDiv = document.createElement("div");
                 rescheduleDiv.className = "rescheduleDiv";
            const dateNow = document.createElement("p");
            dateNow.textContent = Date.now();
            const hr = document.createElement("hr");
            const selectreschedulers = document.createElement("select");
              selectreschedulers.name = "rescheduleers"; 
            const r1 = document.createElement("option");
              r1.value = "tomorrow";
              r1.textContent = "Tomorrow";
            const r2 = document.createElement("option");
            r2.value = "2 days";
            r2.textContent = "In 2 days";
            const r3 = document.createElement("option");
            r3.value = "1 week";
            r3.textContent = "In 1 Week";
            const r4 = document.createElement("option");
            r1.value = " ";
            r4.textContent = createCalendar();
        
            const time = document.createElement("button");
             time.id = "time-btn";
             time.textContent= "time";
            const repeat = document.createElement("button");
             repeat.id = "repeat-btn";
             repeat.textContent= "Repeat";
            selectreschedulers.append(r1,r2,r3,r4);
            rescheduleDiv.appendChild(dateNow, hr, selectreschedulers, time, repeat);
            pagediv.append(rescheduleDiv);
            
        };
        
              handleCLickEvent(radioBtn, pressRadioBtn);
              handleCLickEvent(addTaskBtn, creatNewTodoForm);
              handleCLickEvent(text9, startRescheduleBtn);
              handleCLickEvent(dropDown, collasibleDropdown);
            
          console.log("New Project page created!");
        
        
    }
    isProjectFinished(project){
        if (project.isCompleted === true){
         let index = projectBox.findIndex(project);
         projectBox.pop[index];
        }
    }
};

// build a large todo class
export class Todo extends Project{

    constructor(title ,description ,dueDate ,priority , notes, projects){
        super();
        this.id = self.crypto.randomUUID();
        this.title = title;
        this.class = "todos";
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = false;
    }

    printTodo(title, due,check){
        if(check === false){
       console.log( due ,title,"&#9744");
    }else{
         console.log( due ,title,"&#10005");
    }};

    //create new todos 
    addNew(){
       
        let todo = new Todo(title,description,dueDate,priority,notes, projects);  
        Storage.saveItem(todo);
        Storage.getItem(todo);
        this.printTodo(todo.title,todo.dueDate,todo.checkList);
        return todo;
    
        console.log("added new todo!")
    
    }  
};


class Storage{
     saveItem(todo){
          console.log ("task", " had been stored safely in localStorage.");
            localStorage.setItem("task",JSON.stringify(todo));
    }

    getItem(){
         let savedTodo = localStorage.getItem("task");
             Project.todos.push(savedTodo);
    }

    removeItem(todo){
        localStorage.removeItem(todo)
    }
};


// let newTask = new Todo("remain in the saloon till 1:30am", "seasons greetings", "medium", 34/3/23, "wish upon a star.", "tribute" )

// console.log(newTask);




console.log("this the end of logic.js");



