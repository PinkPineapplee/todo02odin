//import {compareAsc, format} from "date-fns";
import { dateForThings } from "./calender.js";

console.log("I am logic.js");

let isClicked = false;
const projectBox = []

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
        projectBox.push(project)
        return project;

        //create new list in nav
        const listUi = document.createElement("li");
        listUi.className = "list";
        listUi.textContent = project.name;
        ul2.textContent += listUi;                                                                                                                  


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

console.log(newTask);

console.log("this the end of logic.js");