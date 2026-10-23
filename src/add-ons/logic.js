//import {compareAsc, format} from "date-fns";
import { format, startOfDay , isToday, isTomorrow, isYesterday, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday} from "date-fns";
import {dateForThings, createCalendar , mondayList,tuesdayList,wednesdayList,thursdayList,fridayList,saturdayList,sundayList } from "./calender.js";

 import book from "../images/round-icons-bnjMklTnCyc-unsplash.jpg";

 //import { ul2, createNavBar} from "./home.js";

console.log("I am logic.js");

let isClicked = false;
const projectBox = [];
 export class Project{

    constructor(name, date){
     this.name = name || "General";
     this.date = date;
     this.id = self.crypto.randomUUID();
     this.isCompleted = false;
     this.id = "projects";   
    }

    saveProject(obj, id){
        localStorage.setItem(id, JSON.stringify(obj));
                                                                                                                       
    };
    
    getData( id, date){
        let projects = allStorageTodos.filter((id, date)=>{ 

            obj.todos = [];


            return obj
        
        });
       
        getTodoStorage(obj.name);
    };

     isProjectFinished(project){
        if (project.isCompleted === true){
         let index = projectBox.findIndex(project);
         projectBox.pop[index];
        }
    };
    
    
};

// build a large todo class
export class Todo extends Project{

    constructor(title ,description ,dueDate ,priority , notes, project){
        super();
        this.id = self.crypto.randomUUID();
        this.title = title;
        this.class = "todos";
        this.day = this.day;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.project = project;
        this.checkList = "false";
    }

    printTodo(title, due, check){
        if(check === false){
       console.log( due ,title);
    }else{
         console.log( due ,title);
    }};
 

    //create new todos 
    addNew(todo){
       setTodoStorage(todo.id,todo);
        let savedTask = getTodo(todo.id,todo.dueDate);
       console.log(savedTask);
       
       updateTodoUI(savedTask);
        console.log("added new todo in localStorage!")
        return savedTask;
    }; 

};


export function setTodoStorage(id,todo){
    
     localStorage.setItem(id, JSON.stringify(todo));
      
       console.log (id, " had been stored safely in localStorage.");
       
};

 export function getTodo( id, date){

let allStorageTodos = getAllStorage();
   

    //Use the filter method to sort the todos.
     let todo = allStorageTodos.filter(u => u.id === id);
      
     
        return todo;
};

function removeStorageItem(task){   
localStorage.removeItem(task);
 console.log(task , " has been sucessfully removed from storage.")
};  

   
function clearLocal(){
    localStorage.clear();
}

function getAllStorage(){
    let allTodos = [];
    for (var i = 0 ; i<localStorage.length; i++){
        allTodos.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    };
   
    return allTodos;
}
// let newTask = new Todo("rjemain in the saloon till 1:30am", "seasons greetings", "medium", 34/3/23, "wish upon a star.", "tribute" )

function getOldTodos(date, progect){
//arrange days of the week
    // let isDaySunday = isSunday(new Date(year, month, y));
    // let isDayMonday = isMonday(new Date(year, month, y));
    // let isDayTuesday = isTuesday(new Date(year, month, y));
    // let isDayWednesday = isWednesday(new Date(year, month, y));
    // let isDayThursday = isThursday(new Date(year, month, y));
    // let isDayFriday = isFriday(new Date(year, month, y));
    // let isDaySaturday = isSaturday(new Date(year, month, y));
   
    let allStorageTodos = getAllStorage();
  let todayTodos = allStorageTodos.filter(u => isToday(u.dueDate));
  let mondayTodos = allStorageTodos.filter(u => isMonday(u.dueDate));
  let tuesdayTodos = allStorageTodos.filter(u => isTuesday(u.dueDate));
  let wednesdayTodos = allStorageTodos.filter(u =>  isWednesday(u.dueDate));
  let thursdayTodos = allStorageTodos.filter(u =>  isThursday(u.dueDate));
  let fridayTodos = allStorageTodos.filter(u =>  isFriday(u.dueDate));
  let satTodos = allStorageTodos.filter(u =>  isSaturday(u.dueDate));
  let sunTodos = allStorageTodos.filter(u =>  isSunday(u.dueDate));
 // let projectTodos = allStorageTodos.filter(u => u.project === project.name);
  //let monthTodos = allStorageTodos.filter(u => u.dueDate === date);

 todayTodos.map(u => updateTodoUI(u, "today"));
 mondayTodos.map(u => updateTodoUI(u,"monday"));
 tuesdayTodos.map(u => updateTodoUI(u, "tuesday"));
 wednesdayTodos.map(u => updateTodoUI(u, "wednesday"));
 thursdayTodos.map(u => updateTodoUI(u, "thursday"));
 fridayTodos.map(u => updateTodoUI(u, "friday"));
 satTodos.map(u => updateTodoUI(u, "saturday"));
 sunTodos.map(u => updateTodoUI(u, "sunday"));
 //projectTodos.map(u => updateTodoUI(u));
// monthTodos.map(u => updateTodoUI(u));
 }
//getOldTodos();


 function updateTodoUI(todo){

        let getTask = todo;
       // todo.printTodo(getTask.title,getTask.dueDate,getTask.checkList);
        
        const todayUl = document.querySelector("ul#today");
        const mondaybutton = document.querySelector("button#Monday");
        const tuesdaybutton = document.querySelector("button#Tuesday");
        const wednesdaybutton = document.querySelector("button#Wednesday");
        const thursdaybutton = document.querySelector("button#Thursday");
        const fridaybutton = document.querySelector("button#Friday");
        const satbutton = document.querySelector("button#Saturday");
        const sunbutton = document.querySelector("button#Sunday");

        const dayContainerul = document.querySelectorAll(".ul");
        const dayContainerBtn = document.querySelectorAll(".addTaskBtn");

       // this function creates a new list ui for a newgetTask and add it to the page. 
     const Hr1 = document.createElement("hr"); 
     let todoItem = document.createElement("li");
       todoItem.className = "todos";
       const radioBtn = document.createElement("span");
        radioBtn.className = "material-symbols-outlined";
        radioBtn.textContent = "radio_button_unchecked";
        
     const listBox = document.createElement("div");
        let list = document.createElement("p");
            list.textContent = todo.title;
        let listDes = document.createElement("p"); 
            listDes.textContent = todo.description;
        let dateElem = document.createElement("p");
            dateElem.textContent = todo.dueDate;
            listBox.append(list,listDes, dateElem);
            todoItem.append(Hr1, radioBtn,listBox);

                if (todo.class === "monday"){
                mondayUl.after(todoItem);
            } else if (todo.class === "tuesday"){
                tuesdayUl.after(todoItem);
            }else if (todo.class === "wednesday"){
                wednesdayUl.after(todoItem);
            }else if (todo.class === "thursday"){
                thursdayUl.after(todoItem);
            }else if (todo.class === "friday"){
                fridayUl.after(todoItem);
            }else if (todo.class === "saturday"){
                satUl.after(todoItem);
            }else if (todo.class === "sunday"){
                sundayUl.after(todoItem);
            }else {
                todayUl.after(todoItem);
            }
      
              
        
         
}  

export function createPage(counter, task){ 

    
        let [formattedDate, todayFullDate] = dateForThings();
      let splitDate = formattedDate.split("-");
      console.log(splitDate, formattedDate, todayFullDate);
      
      
        const container = document.createElement("div");
            container.className = "dayContainer";
        const header = document.createElement("div");
            header.className = "dayHeaderdiv";
      
        const bookicon = document.createElement("img");
             bookicon.src = book;
             bookicon.className = "book-icon";
              let text6 = document.createElement("h1");
              text6.textContent = "Today";
      
               let text6i = document.createElement("p");
               text6i.textContent= todayFullDate;
              header.append(bookicon, text6, text6i);
        const count = document.createElement("p");
           const span = document.createElement("span");
              span.className = "material-symbols-outlined";
              span.textContent = "check_circle";
              
          let text7 = document.createElement("p");
              text7.textContent= "tasks";
              count.append(span,`${counter + " "+ text7.textContent }` );
             
       const ul = document.createElement("ul");
          ul.id = "today";
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
                text10.textContent= ( " Edit Videos and post by 3pm.");
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
           };
           
          function pressRadioBtn(){
          // this function replaces radio icons for raddit icon when tasks are completed. updates todo.iscomplete objects.
          const rabbiticon = document.createElement("img");
             rabbiticon.src = rabbit;
             rabbiticon.className = "rabbit-icon";
             radioBtn.replaceWith(rabbiticon);
             Todo.checkList = true;
      };
      
            function collapsibleDropdown(){
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
          const today = new Date();
          const tomorrow = new Date(today);
          tomorrow.setDate(today.getDate() + 1);
      
          const twoDays = new Date(today);
          twoDays.setDate(today.getDate() + 2);
      
           const oneWeek = new Date(today);
          oneWeek.setDate(today.getDate() + 7);
        
          // this function creates ui for reschdule icon.and adds date to todos.
           const rescheduleDiv = document.createElement("div");
               rescheduleDiv.className = "rescheduleDiv";
          const dateNow = document.createElement("p");
             dateNow.className = "formatDateNow"
              dateNow.textContent = formattedDate;
          const hr = document.createElement("hr");
          const selectreschedulers = document.createElement("select");
            selectreschedulers.className = "rescheduleers"; 
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
          const hr4 = document.createElement("hr");
      
          
           
          const calendarDiv = document.createElement("div");
          calendarDiv.className = "rescheduleCalendar"
            calendarDiv.append(createCalendar(8));
           
          const time = document.createElement("button");
           time.id = "time-btn";
           time.textContent= "time";
          const repeat = document.createElement("button");
           repeat.id = "repeat-btn";
           repeat.textContent= "Repeat";
           selectreschedulers.append(r1,r2,r3);
           rescheduleDiv.append(dateNow, hr, selectreschedulers, hr4 ,calendarDiv,hr, time, repeat);
           container.append(rescheduleDiv);
          
           
             rescheduleDiv.addEventListener("mouseleave",()=>{
               container.removeChild(rescheduleDiv);
             })
            
        if (selectreschedulers.value === "tomorrow"){
          return tomorrow;
        } else if (selectreschedulers.value === "2 days"){
         return twoDays;
        }else if (selectreschedulers.value === "1 week"){
         return oneWeek;
        }else{
          return today;
        }
      
      };
      
            handleCLickEvent(radioBtn, pressRadioBtn);
            handleCLickEvent(addTaskBtn, creatNewTodoForm);
            handleCLickEvent(text9, startRescheduleBtn);
            handleCLickEvent(dropDown, collapsibleDropdown);
          
        console.log("Today Bar created!");
      
      

 

 };


console.log("this the end of logic.js");



