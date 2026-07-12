console.log("I am home.js");

import {Todo, Project} from "./logic.js";





export function makeNavBar(){
    const div = document.createElement("div");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const l1 = document.createElement("li");
     const l2 = document.createElement("li");
      const l3 = document.createElement("li");
       const l4 = document.createElement("li");
        const l5 = document.createElement("li");
         const l6 = document.createElement("li");
          const l7 = document.createElement("li");
/* <nav>
    <ul> Vee 
        <li>Add Task</li>
        <li>Search</li>
        <li>Inbox</li>
        <li>Today</li>
        <li>Upcoming</li>
        <li>Filters & Labels</li>
        <li>Reporting</li>
    </ul>
    <ul class="myProjects"> My Projects
        <li>Copy of Home</li>
        <li>gift</li>
    </ul>
    <div>Help & resources</div>
</nav> */
console.log("I am making a beautiful nav bar!")
}

export function makeDisplayBar(){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const ul = document.createElement("ul");
    const l1 = document.createElement("li"); 
}


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
     options.textContent= `...`
       const optionsDiv =document.createElement("div");
       options.appendChild(optionsDiv);
    const formHr = document.createElement("hr");
    const inboxBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
          cancelBtn.className="cancelBtn"
          cancelBtn.textContent= `&#128197 + " Cancel " + &#x1F5D9`;
          const calendarDiv = document.createElement("div");
          cancelBtn.appendChild(calendarDiv);

    const addTasKBtn = document.createElement("button");

}
















console.log("I am the end to home.js");