import { format, startOfDay , isToday, isTomorrow, isYesterday, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday} from "date-fns";

import {pagediv} from "./home.js";

export function dateForThings(){
const today = new date();
console.log(today);

const formattedDate = format(new Date(), "yyyy-MM-dd");

const todayStarts = startOfDay(new Date());

return (formattedDate, todayStarts);
};


export function createCalendar(){   
//check today
const todayDate = new Date().getDate();
const thisDay = new Date().getDay();
const thisWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
let weekDay = thisWeek[thisDay]; 
console.log("weekDay:"+weekDay,"day:"+todayDate);
// checks the month and how many days it has.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = d.getMonth()
let thisMonth = months[month];
// checks the year
const thisYear = d.getFullYear();
// return the number of days in that month.
console.log("month:"+ thisMonth,"year:"+ thisYear);

function getDaysInMonthZeroIndexed(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}
console.log(thisMonth)
console.log(thisYear)

let numOfdays= getDaysInMonthZeroIndexed(thisYear,d.getMonth());
console.log(numOfdays);



//creates div equivalent to the number of days.
function createCalendarUI(num, today, month, year ){
 
    const container = document.createElement("div");
    const headers = [" Sun ", " Mon ", " Tues ", " Wed "," Thurs ", " Fri ", " Sat "];
     let dayHeaderDiv;


     //make week divs
    for(let i = 0; i <= 6; i++){       
    dayHeaderDiv = document.createElement("ul");
    dayHeaderDiv.id = headers[i].replace(/^\s+|\s+$/g, "");
    console.log(dayHeaderDiv.id);
    dayHeaderDiv.textContent = headers[i];
    container.appendChild(dayHeaderDiv);
    }
    

   
   return container;
}  
     
    
  
  console.log(createCalendarUI(numOfdays,todayDate,month, thisYear));
  // return createCalendarUI(numOfdays,todayDate,month, thisYear);
   return createCalendarUI(numOfdays,todayDate,month, thisYear);
};

 
// number the divs as days
// current day has a highlighter on the background.
function makeDayDivs(num , weekNum, year, month){
    // make day divs
    for(let y = 1 ; y <= num; y++){

    //arrange days of the week
    let isDaySunday = isSunday(new Date(year, month, y));
    let isDayMonday = isMonday(new Date(year, month, y));
    let isDayTuesday = isTuesday(new Date(year, month, y));
    let isDayWednesday = isWednesday(new Date(year, month, y));
    let isDayThursday = isThursday(new Date(year, month, y));
    let isDayFriday = isFriday(new Date(year, month, y));
    let isDaySaturday = isSaturday(new Date(year, month, y));


    const dayDivs = document.createElement("li");
    dayDivs.className = "dayDivs";
    dayDivs.textContent = y;

       if(isDaySunday === true){
        const daySun = document.createElement("li");
        daySun.className = "dayDivs";
        daySun.textContent = y;
       weekNum.appendChild(daySun);
        console.log("hi I am sunday");

       } else if( isDayMonday === true){

        const dayMon = document.createElement("li");
        dayMon.className = "dayDivs";
        dayMon.textContent = y;
       dayNum.appendChild(dayMon);
        console.log("hi I am monday");

       } else if(isDayTuesday === true){

        const dayTues = document.createElement("li");
        dayTues.className = "dayDivs";
        dayTues.textContent = y;
       dayNum.appendChild(dayTues);
        console.log("hi I am tuesday");

       } else if(isDayWednesday === true){

        const dayWed = document.createElement("li");
        dayWed.className = "dayDivs";
        dayWed.textContent = y; 
       dayNum.appendChild(dayWed);
        console.log("hi I am wednesday");
       } else if(isDayThursday === true){

        const dayThurs = document.createElement("li");
        dayThurs.className = "dayDivs";
        dayThurs.textContent = y;
         
       dayNum.appendChild(dayThurs);
        console.log("hi I am thursday");
       } else if(isDayFriday === true){

        const dayFri = document.createElement("li");
        dayFri.className = "dayDivs";
        dayFri.textContent = y;
         
       dayNum.appendChild(dayFri);
        console.log("hi I am friday");

       } else if(isDaySaturday === true){

        const daySat = document.createElement("li");
        daySat.className = "dayDivs";
        daySat.textContent = y;
         
       dayNum.appendChild(daySat);
        console.log("hi I am saturday");

       } else{
        return
       }   
    };
}

function makeWeekDivs(){

}
function handleCalendarEvent(day){
 day.addEventListener("click", ()=>{
    //open day Schedule


 })
}

console.log("Hey I am Calendar.js");