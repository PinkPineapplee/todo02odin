//import {compareAsc, format} from "date-fns";
import { dateForThings } from "./calender.js";

console.log("I am logic.js");

let isClicked = false;

export class Project{
    constructor(name, date){
     this.name = name || "General";
     this.date = date;
     this.todos = [];
     this.isCompleted = false;
     this.id = toString(this.name);
    }

    newProject(){
        console.log("what will you call this great quest?");
        const inputName = prompt("what will you call this great adventure?")
        const project = new Project( inputName);
        this.name = project;
        return project;

    }
}



// build a large todo class
export class Todo extends Project{

    constructor(title ,description ,dueDate ,priority ,notes , projects){
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
        if (isClicked=== true){
        let todo = new Todo(title,description,dueDate,priority,notes, projects)
       
        Storage.saveItem(todo);
        Storage.getItem(todo);
        this.printTodo(todo.title,todo.dueDate,todo.checkList);
        return todo;
    }else{
        console.log("add new todo!")
    }
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


let newTask = new todo("remain in the saloon till 1:30am", )

//Create for task form

function creatNewTodoForm(){
    const formDiv = document.createElement("div");
    formDiv.className ="formDiv";
    const form = document.createElement("form");


    const titeInput = document.createElement("input");
            titleInput.type = 'text';
            titleInput.name = 'title';
            titleInput.placeholder = "Attend Mr Steven's anulguration ceremony";
            titleInput.required = true; // Boolean attributes take true/false
            titleInput.id = 'title';


    const description = document.createElement("input");
            description.type = 'text';
            description.name = 'description';
            description.placeholder = "Description";
            description.required = false; // Boolean attributes take true/false
            description.id = 'description';


    const div1 = document.createElement("div");
          div1.className="div1"
          div1.textContent= `&#128197 + " today " + &#x1F5D9`;
          const calendarDiv = document.createElement("div");
          div1.appendChild(calendarDiv);


    const div2 = document.createElement("div");
          div2.className = "div2";
          div2.textContent= `Priority`;
          const priorityDiv = document.createElement("div");
          const priorityList = document.createElement("ul");
          const high = document.createElement("li");
          const medium = document.createElement("li");
          const low = document.createElement("li");
           priorityList.append(high,medium,low);
           priorityDiv.appendChild(priorityList);


    const div3 = document.createElement("div");
          div3.className="div3"
          div3.textContent= `&#328397 + " Remainders " + &#x3F5D9`;
         

    
    const options = document.createElement("div");
       const optionsDiv =document.createElement("div");
       options.appendChild(optionsDiv)
           const formHr = document.createElement("hr");
    const inboxBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const addTasKBtn = document.createElement("button");

}
















console.log("this the end of logic.js");