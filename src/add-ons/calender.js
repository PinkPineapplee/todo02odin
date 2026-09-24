import { format, startOfDay , isToday, isTomorrow, isYesterday, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday} from "date-fns";

import {pagediv} from "./home.js";

 
export function dateForThings(){
const today = new Date();
console.log(today);

const formattedDate = format(new Date(), "yyyy-MM-dd");

const todayStarts = startOfDay(new Date());

return (formattedDate, todayStarts);
};


export function createCalendar(monthNum){   
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
let thisMonth = months[monthNum];
// checks the year
const thisYear = d.getFullYear();
// return the number of days in that month.
console.log("month:"+ month,"year:"+ thisYear);

function getDaysInMonthZeroIndexed(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}
console.log(monthNum);
console.log(thisMonth)
console.log(thisYear)

let numOfdays= getDaysInMonthZeroIndexed(thisYear,monthNum);
console.log(numOfdays);



//creates div equivalent to the number of days.
 function createCalendarUI(num, today, month, year ){
 
    const container = document.createElement("div");
    container.className = "calendarDiv";
    const headers = [" Sun ", " Mon ", " Tues ", " Wed "," Thurs ", " Fri ", " Sat "];
   
const dayHeaderDivs = [];

for(let i = 0; i <= 6; i++){       
    const dayHeaderDiv = document.createElement("ul");

    dayHeaderDiv.className = "dayHeaderDiv";
    dayHeaderDiv.id = headers[i].trim();
    dayHeaderDiv.textContent = headers[i];

    container.appendChild(dayHeaderDiv);

    dayHeaderDivs.push(dayHeaderDiv);
}
     
    

   makeDayDivs(num,dayHeaderDivs,year,monthNum)
   return container;
}  
      
  // return createCalendarUI(numOfdays,todayDate,month, thisYear);
   return createCalendarUI(numOfdays,todayDate,monthNum, thisYear);
};

 
// number the divs as days
// current day has a highlighter on the background.
 function makeDayDivs(num , weekNum, year, month){
    let mondayList =[];
    let tuesdayList = [];
    let wednesdayList = [];
    let thursdayList = [];
    let fridayList = [];
    let saturdayList = [];
    let sundayList =[];

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

   
       if(isDaySunday === true){
        let daySun = document.createElement("li");
        daySun.className = "dayDivs";
        daySun.textContent = y;
        sundayList.push(y);
        weekNum[0].append(daySun)
        console.log("hi I am sunday");

       } else if( isDayMonday === true){

        let dayMon = document.createElement("li");
        dayMon.className = "dayDivs";
        dayMon.textContent = y;
        mondayList.push(y);
        weekNum[1].append(dayMon)
        console.log("hi I am monday");

       } else if(isDayTuesday === true){

        let dayTues = document.createElement("li");
        dayTues.className = "dayDivs";
        dayTues.textContent = y;
        tuesdayList.push(y);
        weekNum[2].append(dayTues)
        console.log("hi I am tuesday");

       } else if(isDayWednesday === true){

        let dayWed = document.createElement("li");
        dayWed.className = "dayDivs";
        dayWed.textContent = y; 
        wednesdayList.push(y);
        weekNum[3].append(dayWed)
        console.log("hi I am wednesday");
       } else if(isDayThursday === true){

        let dayThurs = document.createElement("li");
        dayThurs.className = "dayDivs";
        dayThurs.textContent = y;
        thursdayList.push(y);
        weekNum[4].append(dayThurs)
        console.log("hi I am thursday");
       } else if(isDayFriday === true){

        let dayFri = document.createElement("li");
        dayFri.className = "dayDivs";
        dayFri.textContent = y;
        fridayList.push(y);
        weekNum[5].append(dayFri)
        console.log("hi I am friday");

       } else if(isDaySaturday === true){

        let daySat = document.createElement("li");
        daySat.className = "dayDivs";
        daySat.textContent = y;
        saturdayList.push(y);
        weekNum[6].append(daySat)
        console.log("hi I am saturday");

       } else{
         return;
       }   
    };
     
    if (weekNum[0][0] !== 1){
      let daydiv = document.createElement("li");
      daydiv.textContent = "";
      weekNum[0]= sundayList;
      weekNum[0].unshift(daydiv);
      weekNum.push(...sundayList);
    }

    //return (mondayList,tuesdayList,wednesdayList,thursdayList,fridayList,saturdayList,sundayList)
}

function makeWeekDivs(){

}
function handleCalendarEvent(day){
 day.addEventListener("click", ()=>{
    //open day Schedule


 })
}

console.log("Hey I am Calendar.js");