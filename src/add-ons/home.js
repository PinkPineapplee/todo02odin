console.log("I am home.js");

import {Todo, Project} from "./logic.js";

import {book} from "src/images/round-icons-bnjMklTnCyc-unsplash.jpg";

iconNames = ["arrow_drop_down","add"];

export function makeNavBar(){
    const div = document.createElement("div");
        div.className = "navBox";
    const nav = document.createElement("nav");
        nav.className = "nav-container";

    const ul1 = document.createElement("ul");
        ul1.className = "profile";
        const profileIcon = document.createElement("span");
        profileIcon.className = "material-symbols-outlined";
        profileIcon.innerHTML = "man_3";
        ul1.appendChild(profileIcon);
        ul1.textContent += `&#128197 + " Profile " + &#x1F5D9`;

    const l1 = document.createElement("li");
        l1.className = "Add";
        const addIcon = document.createElement("span");
        addIcon.className = "material-symbols-outlined";
        addIcon.innerHTML = "add_circle";
        ul1.appendChild(addIcon);
        l1.textContent += `Add Task`;

    const l2 = document.createElement("li");
        l2.className = "search";
        const searchIcon = document.createElement("span");
        searchIcon.className = "material-symbols-outlined";
        searchIcon.innerHTML = "search";
        ul1.appendChild(searchIcon);
        l2.textContent += `Search`;

    const l3 = document.createElement("li");
        l3.className = "today";
        const todayIcon = document.createElement("span");
        todayIcon.className = "material-symbols-outlined";
        todayIcon.innerHTML = "today";
        ul1.appendChild(todayIcon);
        l3.textContent += `Today`;

    const l4 = document.createElement("li");
        l4.className = "week";
        const weekIcon = document.createElement("span");
        weekIcon.className = "material-symbols-outlined";
        weekIcon.innerHTML = "routine";
        ul1.appendChild(weekIcon);
        l4.textContent += `Weekly`;

    const l5 = document.createElement("li");
        l5.className = "monthly";
        const monthIcon = document.createElement("span");
        monthIcon.className = "material-symbols-outlined";
        monthIcon.innerHTML = "calendar_month";
        ul1.appendChild(monthIcon);
        l5.textContent += `Monthly`;


         const ul2 = document.createElement("ul");
        ul2.className = "myProjects";
        ul2.textContent = ` #  Projects`;

        ul1.append(l1,l2,l3,l4,l5);
        nav.append(ul1,ul2);
        div.appendChild(nav);
        document.appendChild(div);

console.log("I am making a beautiful nav bar!")
}

export function makeDisplayBar(){
    const div = document.querySelector(".page-layout");
    const header = document.createElement("header");
          const sideIcon = document.createElement("span");
        sideIcon.className = "material-symbols-outlined";
        sideIcon.innerHTML = "side_navigation";
        header.appendChild(sideIcon);

        const logo = document.createElement("img");
        logo.src = "src/images/Adobe Express - file.png";
    const darkMode = document.createElement("span");
        sideIcon.className = "material-symbols-outlined";
        sideIcon.innerHTML = "bedtime";
        header.appendChild(sideIcon);
         
   const content = document.createElement("div");
    content.textContent = createToday();
    div.append(header, content);
   console.log("I am making a neat display!")
}


//Create for task form
export function creatNewTodoForm(){
    const div = document.querySelector(".page-layout");
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

    form.append(titeInput,description,div1,div2,div3, options, formHr,inboxBtn, cancelBtn, addTasKBtn)
    formDiv.appendChild(form);
    div.appendChild(formDiv);
    
console.log("I am making a beautiful todo form!")
}


export function createToday(){
   // will have today, yesterday and tomorrow. 
  const container = document.createElement("div");
      container.className = "todayContainer";
  const header = document.createElement("h1");
      header.className = "todayHeader";
  header.textContent = book +"Today";
  const count = document.createElement("p");
     const span = document.createElement("span");
        span.className = "material-symbols-outlined";
        sideIcon.innerHTML = "check";
        count.textContent= span+ `${counter}` +"task";




  console.log("Today Bar created!");
};


export function createWeekly(month,num,day){
    // tasks will be seperated by days of the week.
    const container = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = `${month}+ "Week " + ${num} + "."`;
    const div = document.createElement("div");
    console.log("Weekly display created!")

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

 console.log("Monthly display created!")
}


export function createSearch(){
    const container = document.createElement("div");
    const header = document.createElement("h1");
console.log("Search Bar created!")
}







console.log("I am the end to home.js");