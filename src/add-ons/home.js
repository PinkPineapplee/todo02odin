console.log("I am home.js");

import {Todo, Project} from "./logic.js";



export function makeNavBar(){
    const div = document.createElement("div");
        div.className = "navBox";
    const nav = document.createElement("nav");
        nav.className = "nav-container";

    const ul1 = document.createElement("ul");
        ul1.className = "profile";
        const profileIcon = document.createElement("span");
        profileIcon.className = "material-symbols-outlined";
        profileIcon.innerHTML = "side_navigation";
        ul1.appendChild(profileIcon);
        ul1.textContent = `&#128197 + " Profile " + &#x1F5D9`;

    const l1 = document.createElement("li");
        l1.className = "Add";
        ul2.textContent = `Add Task`;
    const l2 = document.createElement("li");
        l2.className = "search";
        ul2.textContent = `Search`;
    const l3 = document.createElement("li");
        l3.className = "today";
        ul2.textContent = `Today`;
    const l4 = document.createElement("li");
        l4.className = "week";
        ul2.textContent = `weekly`;
    const l5 = document.createElement("li");
        l5.className = "monthly";
        ul2.textContent = `Monthly`;
    const l6 = document.createElement("li");
        l6.className = "general";
    const l7 = document.createElement("li");
        l7.className = "search";


         const ul2 = document.createElement("ul");
        ul2.className = "myProjects";
        ul2.textContent = `Projects`;

        ul1.append(l1,l2,l3,l4,l5,l6,l7);
        nav.append(ul1,ul2);
        div.appendChild(nav);
        document.appendChild(div);
console.log("I am making a beautiful nav bar!")
}

export function makeDisplayBar(){
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
          const sideIcon = document.createElement("span");
        sideIcon.className = "material-symbols-outlined";
        sideIcon.innerHTML = "side_navigation";
        ul1.appendChild(sideIcon);
    const ul = document.createElement("ul");
    const l1 = document.createElement("li"); 
    const hr = document.createElement("hr");
    const addnewbtn = document.createElement("button");
   
}


//Create for task form

export function creatNewTodoForm(){
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
          cancelBtn.className = "cancelBtn";
          cancelBtn.textContent = `&#128197 + " Cancel " + &#x1F5D9`;
    const calendarBox = document.createElement("div");
          cancelBtn.appendChild(calendarBox);

    const addTasKBtn = document.createElement("button");

}


export function createToday(){
   // will have today, yesterday and tomorrow. 
  const container = document.createElement("div");
  const header = document.createElement("h1");
  header.textContent = ``+"Today";
  const div = document.createElement("div");
};


export function createWeekly(month,num,day){
    // tasks will be seperated by days of the week.
    const container = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = `${month}+ "Week " + ${num} + "."`;
    const div = document.createElement("div");

};


export function  createMonthly(){
    // tasks will be separated calendar format.
    const container = document.createElement("div");
    const header = document.createElement("h1");
    const div = document.createElement("div");

 for(let i= 0 ; i <= 11; i++){
    const monthBox = document.createElement("div");
    const monthHeader = document.createElement("div");


 }
}


export function createSearch(){
    const container = document.createElement("div");
    const header = document.createElement("h1");

}







console.log("I am the end to home.js");