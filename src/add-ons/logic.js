//import {compareAsc, format} from "date-fns";

import { getDate } from "date-fns";

const myDate = new date();
console.log(date);

const result = getDate(new Date (2012,1,20));
let isClicked = false;

class Project{
    constructor(name, date){
     this.name = name;
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
class Todo extends Project{
    constructor(title,description,dueDate,priority,notes, projects){
        this.title = title;
        this.class = "todos";
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.projects = Project.name;
        this.checkList = false;
    }

    printTodo(title, due,check){
        if(check === false){
       console.log( due ,title,"&#9744");
    }else{
         console.log( due ,title,"&#10005");
    }};

    addnew(){
        if (isClicked=== true){
        let todo = new Todo(title,description,dueDate,priority,notes, projects)
        Project.todos.push(todo);
        this.storeNewTodos();
        this.printTodo(todo.title,todo.dueDate,todo.checkList);
        return todo;
    }else{
        console.log("add new todo!")
    }
    }

    storeNewTodos(todo){
        for(let i=20;i<=0;i++){
            console.log ("todo"+i, " had been stored safely in localStorage.")
      localStorage.setItem("todo"+i,JSON.stringify(this.addnew()));}
    }
}