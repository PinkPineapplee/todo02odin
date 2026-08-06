console.log("I am home.js");

import { createCalendar } from "./calender.js";
import {Todo, Project} from "./logic.js";



import book from "../images/round-icons-bnjMklTnCyc-unsplash.jpg";
import logoIcon from "../images/Adobe Express - file.png";
import mondayBg from "../images/simple-wallpapers-XPNNqo23w5o-unsplash.jpg";
import tuesdayBg from "../images/simple-wallpapers-Y9Di8fHq83A-unsplash.jpg";
import wednesdayBg from "../images/pragati-choudhari-sdpeC-aZq9Q-unsplash.jpg";
import thursdayBg from "../images/anna-magenta-mmlznoUSZwQ-unsplash.jpg";
import fridayBg from "../images/silali-banerjee-5MTWsd0p8bo-unsplash.jpg";
import saturdayBg from "../images/nidhi-shah-PL75tbZt9q8-unsplash.jpg";
import sundayBg from "../images/simple-wallpapers-_CeV6pk8c2c-unsplash.jpg";
import monthBg from "../images/tasha-kostyuk-RvZXcLdU2v0-unsplash.jpg";
import formBg from "../images/vectorelements-pWXhy2pjXkg-unsplash.jpg";

const div = document.querySelector(".page-layout");
const pagediv = document.createElement("div");
     pagediv.className = "pagedivider";

export function makeNavBar(){
     const container = document.querySelector(".page-layout");
    const div = document.createElement("div");
        div.className = "navBox";
    const nav = document.createElement("nav");
        nav.className = "nav-container";

    const ul1 = document.createElement("ul");
        ul1.className = "profile";
        const profilediv = document.createElement("div");
        profilediv.className= "profilediv";
        
        const profileIcon = document.createElement("span");
        profileIcon.className = "material-symbols-outlined";
        profileIcon.textContent = "man_3";
    
         let text = document.createElement("h3");
          text.textContent= "Profile";
        const sideIcon = document.createElement("span");
        sideIcon.className = "material-symbols-outlined";
        sideIcon.textContent = "side_navigation";
          profilediv.append(profileIcon, text, sideIcon);

    const l1 = document.createElement("li");
        l1.className = "Add";
        const addIcon = document.createElement("span");
        addIcon.className = "material-symbols-outlined";
        addIcon.textContent = "add_circle";
        
        let text1 = document.createElement("p");
          text1.textContent= "Add Task";
          l1.append(addIcon, text1);

    const l2 = document.createElement("li");
        l2.className = "search";
        const searchIcon = document.createElement("span");
        searchIcon.className = "material-symbols-outlined";
        searchIcon.textContent = "search";
        
        let text2 = document.createElement("p");
          text2.textContent= "Search";
          l2.append(searchIcon, text2);

    const l3 = document.createElement("li");
        l3.className = "today";
        const todayIcon = document.createElement("span");
        todayIcon.className = "material-symbols-outlined";
        todayIcon.textContent = "today";
        
        let text3 = document.createElement("p");
          text3.textContent= "Today";
          l3.append(todayIcon, text3);

    const l4 = document.createElement("li");
        l4.className = "week";
        const weekIcon = document.createElement("span");
        weekIcon.className = "material-symbols-outlined";
        weekIcon.textContent = "routine";
        
        let text4 = document.createElement("p");
          text4.textContent= "Weekly";
          l4.append(weekIcon, text4);

    const l5 = document.createElement("li");
        l5.className = "monthly";
        const monthIcon = document.createElement("span");
        monthIcon.className = "material-symbols-outlined";
        monthIcon.textContent = "calendar_month";
        
        let text5 = document.createElement("p");
          text5.textContent= "Monthly";
          l5.append(monthIcon, text5);


         const ul2 = document.createElement("ul");
        ul2.className = "myProjects";
        ul2.textContent = ` #  Projects`;

        ul1.append(profilediv,l1,l2,l3,l4,l5);
        nav.append(ul1,ul2);
        div.appendChild(nav);
        container.appendChild(div);


        //handle click event
        const navEvents ={
            events:[l1,l2,l3,l4,l5],
            func :[creatNewTodoForm, createSearch, createToday, createWeekly, createMonthly]
        };
        
        handleCLickEvent(l1, creatNewTodoForm);
        handleCLickEvent(l2, createSearch);
        handleCLickEvent(l3, createToday);
        handleCLickEvent(l4, createWeekly);
        handleCLickEvent(l5, createMonthly);
       
console.log("I am making a beautiful nav bar!")
}

export function makeDisplayBar(){
              
    const headerDiv = document.createElement("div");
        headerDiv.className = "headerDiv";
        const sideIcon = document.createElement("span");
        sideIcon.className = "material-symbols-outlined";
        sideIcon.textContent = "side_navigation";
       
        const hdiv = document.createElement("div");
        
        const logo = document.createElement("img");
        logo.src = logoIcon;
        logo.className= "logo";
    const headerText = document.createElement("h3");
         headerText.className = "headerText";
         headerText.textContent = "Todo Bunny";
         hdiv.append(logo,headerText);
    const darkMode = document.createElement("span");
        darkMode.className = "material-symbols-outlined";
        darkMode.textContent = "bedtime";
        headerDiv.append(sideIcon,hdiv,darkMode);
         
   
    pagediv.append(headerDiv);   
    div.appendChild(pagediv);
     createToday();
   console.log("I am making a neat display!");
}


//Create for task form
export function creatNewTodoForm(){
   
    const formDiv = document.createElement("div");
    formDiv.className ="formDiv";

    const formImg = document.createElement("img");
    formImg.src = formBg;
    formDiv.style.backgroundColor = "white";

    const form = document.createElement("form");
        form.action = " ";
        form.method = "post";

   const inputDiv = document.createElement("div");
          inputDiv.className = "inputDiv";
          
    const titleInput = document.createElement("input");
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
         inputDiv.append(titleInput,description);

    const itemsDiv = document.createElement("div");
          itemsDiv.className="itemsDiv";
          
    const div1 = document.createElement("div");
          div1.className="div1"
         
        const todayIcon = document.createElement("span");
          todayIcon.className = "material-symbols-outlined";
          todayIcon.textContent = "today";
        const formText = document.createElement("p");
          formText.id = "formText";
          formText.textContent = " today "
        const dropDown = document.createElement("span");
        dropDown.className = "material-symbols-outlined";
        dropDown.id = "dropDown";
        dropDown.textContent = "dropdown";

        
        const calendarDiv = document.createElement("div");
          div1.appendChild(todayIcon, "today" ,dropDown);


    const div2 = document.createElement("div");
          div2.className = "div2";
          div2.textContent= `Priority`;
           const ribbonIcon = document.createElement("span");
          ribbonIcon.className = "material-symbols-outlined";
          ribbonIcon.textContent = "book_ribbon";
          div2.append(ribbonIcon);
    const priorityDiv = document.createElement("div");
  
          const high = document.createElement("input");
            high.name = "priority";
            high.type = "radio";
            high.value = "high";
            high.textContent = "High";
           const medium = document.createElement("input");
            medium.name = "priority";
            medium.type = "radio";
            medium.value = "medium";
            medium.textContent = "Medium";
           const low = document.createElement("input");
            low.name = "priority";
            low.type = "radio";
            low.value = "low"; 
            low.textContent = "Low"; 

           prioritydiv.append(high,medium,low);
           


    const div3 = document.createElement("div");
          div3.className="div3"
          div3.textContent= " Remainders ";
         
    const alarmIcon = document.createElement("span");
          alarmIcon.className = "material-symbols-outlined";
          alarmIcon.textContent = "alarm";
          div3.append(alarmIcon);
    
    const options = document.createElement("span");
          options.textContent= "more_horiz";
          options.className= "material-symbols-outlined";
          options.id = "optionsIcon"
    const optionsDiv = document.createElement("div");
          options.appendChild(optionsDiv);
        const select = document.createElement("select");
            let selectOptions = document.createElement("option");
              selectOptions.value = handleCLickEvent(selectOptions, getNotes)
              selectOptions.text = "notes";
        itemsDiv.append(div1,div2,div3,options)  
    const formHr = document.createElement("hr");

    const inboxBtn = document.createElement("button");
          inboxBtn.type = "button";
          inboxBtn.className = "inboxBtn";
          inboxBtn.textContent =" Inbox ";
          const inboxIcon = document.createElement("span");
          inboxIcon.textContent= "inbox_text";
          inboxIcon.className= "material-symbols-outlined";
          inboxBtn.append(inboxIcon)
    const cancelBtn = document.createElement("button");
          cancelBtn.type = "reset";
          cancelBtn.className = "cancelBtn";
          cancelBtn.textContent =" Cancel ";
    const calendarBox = document.createElement("div");
          cancelBtn.appendChild(calendarBox);

    const addBtn = document.createElement("button");
          addBtn.type = "submit";
          addBtn.className = "addBtn";
          addBtn.textContent = " Add Task ";

    form.append(inputDiv, itemsDiv, formHr,inboxBtn, cancelBtn, addBtn)
    formDiv.appendChild(form);
    pagediv.appendChild(formDiv);
    
console.log("I am making a beautiful todo form!")
}


export function createToday(counter, task){ 
    
  const container = document.createElement("div");
      container.className = "todayContainer";
  const header = document.createElement("div");
      header.className = "todayHeaderdiv";

  const bookicon = document.createElement("img");
       bookicon.src = book;
       bookicon.className = "book-icon";
        let text6 = document.createElement("h1");
        text6.textContent = "Today"
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
   
       const todayHr1 = document.createElement("hr") ; 
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
  
    container.append(header, count, ul,todayHr1,todoItem, todayHr, addTaskBtn);
     pagediv.append(container);


      handleCLickEvent(addTaskBtn, creatNewTodoForm);
       handleCLickEvent(radioBtn, creatNewTodoForm);
        handleCLickEvent(text9, creatNewTodoForm);
  console.log("Today Bar created!");
};


export function createWeekly(month,num,day,counter,task){

    // tasks will be seperated by days of the week.  
    for (let i = 0; i <= 52; i++){
    const container = document.createElement("div");
      container.className = "weekContainer";
    const header = document.createElement("h1");
      header.className = week[0];
     header.textContent = `${month}+ "Week " + ${num} + "."`;
    const count = document.createElement("p");
    const span = document.createElement("span");
        span.className = "material-symbols-outlined";
        sideIcon.textContent = "check";
        count.textContent = span + `${counter}` + "task";
    const ul = document.createElement("ul");
    const dropDown = document.createElement("span");
        dropDown.className = "material-symbols-outlined";
        dropDown.id = "dropDown";
        dropDown.textContent = "dropdown";
        ul.textContent = dropDown + "Overdue" + "Reschedule";
       
 const todoItem = document.createElement("li");
       todoItem.id = "todos";
    const radioBtn = document.createElement("span");
        radioBtn.id = "radio-button";
        span.className = "material-symbols-outlined";
        radioBtn.textContent = "radion-button";
        todoItem.textContent = radioBtn + (task || "Edit Videos and post by 3pm.");
        ul.appendChild(todoItem);
    const addTaskBtn = document.createElement("button");
        addTaskBtn.className = "addTaskBtn";
    const plusIcon = document.createElement("span");
        plusIcon.className = "material-symbols-outlined";
        plusIcon.id = "plusIcon";
        plusIcon.textContent = "plus";    
        addTaskBtn.textContent = plusIcon + "Add task";
    const todayHr = document.createElement("hr");     
    pagediv.remove();
    pagediv.append(container);
};
    console.log("Weekly display created!");
};


export function  createMonthly(){
    // tasks will be separated calendar format.
    const container = document.createElement("div");
    const header = document.createElement("h1");
    const div = document.createElement("div");

 for(let i= 0 ; i <= 11; i++){
    const monthBox = document.createElement("div");
    const monthDiv = document.createElement("div");
    monthDiv.style.backgroundImage.src = monthBg ;
    monthDiv.appendChild(monthHeader)
    const monthHeader = document.createElement("h2");
    monthBox.append(monthDiv, createCalendar());
  
    pagediv.append(container);
 }

 console.log("Monthly display created!")
}


export function createSearch(){
    
    const container = document.createElement("modal");
    const searchIcon = document.createElement("span");
        searchIcon.className = "material-symbols-outlined";
        searchIcon.id = "searchIcon";
        searchIcon.textContent = "search";
        
    const searchInput = document.createElement("input");
        searchInput.type = 'text';
        searchInput.name = 'search';
        searchInput.placeholder = "Attend Mr Steven's anulguration ceremony";
        searchInput.required = true; // Boolean attributes take true/false
        searchInput.id = 'search';

  container.append(searchIcon, searchInput);

  pagediv.appendChild(container);

console.log("Search Bar created!")
}


function handleCLickEvent(elem, func){
    elem.addEventListener("click", func);
   if(elem.isClicked === true){
    return func();
   }
}


function startAddTask( ){
      // this function creates a new list ui for a newTodo and add it to the page.
      let task = {
        title: titleInput.value,
        description: description.value,
      }
      Todo.addNew(titleInput.value,description.value,dueDate,priorityElem.selected,notes, projects);
      const Hr1 = document.createElement("hr") ; 
     const todoItem = document.createElement("li");
       todoItem.id = "todos";
       const radioBtn = document.createElement("span");
        radioBtn.className = "material-symbols-outlined";
        radioBtn.textContent = "radio_button_unchecked";
        
        const listBox = document.createElement("div");
        let title = document.createElement("p");
          title.textContent= (task || " Edit Videos and post by 3pm.");
        let description = document.createElement("p"); 
        let dateElem = document.createElement("p");
          todoItem.append(radioBtn,title,description, dateElem);

};



function getNotes(){
    
    const noteDiv = document.createElement("div");
    const notetitle = document.createElement("h5");
          notetitle.className = "notetitle";
          notetitle.textContent = "Add notes or comments."
    const noteP = document.createElement("p");
          noteP.className = "noteP";
    const noteText = document.createElement("textarea");
          noteText.placeholder= "I think we should launch that campaign.";
          noteText.rows = "20";
          noteText.cols = "60";
    noteP.appendChild(noteText);
    const add = document.createElement("button");
       add.id = "addNotes";
       add.type = "submit";
     
    noteDiv.append(notetitle,noteP,add);

    add.addEventListener("click", ()=>{
        let content = noteText.textContent;
        return content;
    });
   return content;
};


function startCancelBtn(){
   // This function removes todoform from webpage.
};
function startReminderBtn(){
    // this function creates ui for reminder with some reminder functionality.
};
function startRescheduleBtn(){
    // this function creates ui for reschdule icon.and adds date to todos.
};
function startPriorityBtn(){
    // this function creates ui for priority bar and updates todo objects.
};
function pressRadioBtn(){
    // this function replaces radio icons for raddit icon when tasks are completed. updates todo.iscomplete objects.
};

function startNewProject(){
   // this function creates ui for new projects and adds projects objects.
};
function collasibleDropdown(){
    // this function handles todolist ui collasping effects.
};
function startDarkMode(){
    // this function handles all darkmode operations for app.
}
 
function handleMultiplePageDisplay(){
    // this function stops pages already displaying in webpage to not display more than once.
};


function findSearchItem(){
    // this function executes search that sort though todo array.
}
















































console.log("I am the end to home.js");