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
        for(let i = 20;i <= 0; i++){
            console.log ("task"+i, " had been stored safely in localStorage.");
            localStorage.setItem("task"+i,JSON.stringify(todo));}
    }

    getItem(){
         let savedTodo = localStorage.getItem("task");
             Project.todos.push(savedTodo);
    }

    removeItem(todo){
        localStorage.removeItem(todo)
    }
};
console.log("this the end of logic.js");