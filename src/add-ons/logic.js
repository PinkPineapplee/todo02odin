//import {compareAsc, format} from "date-fns";

import { getDate } from "date-fns";

const myDate = new date();
console.log(date);

const result = getDate(new Date (2012,1,20));


class Project{
    constructor(name){
     this.name = name;
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
        this.projects = Project.newProject();
        this.checkList = false;
    }
}