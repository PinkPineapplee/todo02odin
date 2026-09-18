import { format, startOfDay , isToday, isTomorrow, isYesterday, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday} from "date-fns";


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
//console.log("weekDay:"+weekDay,"day:"+todayDate);
// checks the month and how many days it has.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let thisMonth = months[d.getMonth()];
// checks the year
const thisYear = d.getFullYear();
// return the number of days in that month.
//console.log("month:"+month,"year:"+year);

function getDaysInMonthZeroIndexed(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

console.log(getDaysInMonthZeroIndexed(2026, 8)); // 28 (February is index 1)

let numOfdays= getDaysInMonthZeroIndexed(thisYear,thisMonth);
//creates div equivalent to the number of days.
function createCalendarUI(num, today, month, year ){
 
    const container = document.createElement("div");
    const headers = [" Sun ", " Mon ", " Tues ", " Wed "," Thurs ", " Fri ", " Sat "];
    for(let i = 0; i <= 6; i++){       
    const dayHeaderDiv = document.createElement("ul");
    dayHeaderDiv.id = toString(i);
    dayHeaderDiv.textContent = headers[i];


    // make day divs
    for(let y = 1 ; y <= num; y++){

    //arrange days of the week
    const isDaySunday = isSunday(new date (year, month, y));
    const isDayMonday = isMonday(new date (year, month, y));
    const isDayTuesday = isTuesday(new date (year, month, y));
    const isDayWednesday = isWednesday(new date (year, month, y));
    const isDayThursday = isThursday(new date (year, month, y));
    const isDayFriday = isFriday(new date (year, month, y));
    const isDaySaturday = isSaturday(new date (year, month, y));


    const dayDivs = document.createElement("li");
    dayDivs.className = "dayDivs";
    dayDivs.textContent = y;

       if(isDaySunday === true){
        const daySun = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(daySun)

       } else if( isDayMonday === true){
         const dayMon = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(dayMon)
       } else if( isDayTuesday === true){
         const dayTues = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(dayTues)
       } else if( isDayWednesday === true){
          const dayWed = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(dayWed);
       } else if( isDayThursday === true){
         const dayThurs = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(dayThurs)
       } else if( isDayFriday === true){
        const dayFri = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(dayFri);
       } else if( isDaySaturday === true){
        const daySat = document.createElement("li");
        dayDivs.className = "dayDivs";
        dayDivs.textContent = y;
        dayHeaderDiv[i].appendChild(daySat);

       } else{
        return
       }

     // container.appendChild(dayHeaderDiv);
      
    };
    container.appendChild(dayHeaderDiv);
     return container;
    };

   
  return container;
};

 createCalendarUI(numOfdays,thisDay,thisMonth, thisYear);
  console.log(createCalendarUI(numOfdays,thisDay,thisMonth, thisYear));
// number the divs as days
// current day has a highlighter on the background.
}


function handleCalendarEvent(day){
 day.addEventListener("click", ()=>{
    //open day Schedule


 })
}

console.log("Hey I am Calendar.js");