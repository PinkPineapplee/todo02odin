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
const day = new Date().getDate();
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
let weekDay = week[day];
console.log(weekDay,day);
// checks the month and how many days it has.
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];
// checks the year
const year = d.getFullYear();
// return the number of days in that month.

function getDaysInMonthZeroIndexed(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

console.log(getDaysInMonthZeroIndexed(2024, 1)); // 28 (February is index 1)


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
        dayHeaderDiv[i].appendChild(dayDivs)
       } else if( isDayMonday === true){
         dayHeaderDiv[i].appendChild(dayDivs)
       } else if( isDayTuesday === true){
         dayHeaderDiv[i].appendChild(dayDivs)
       } else if( isDayWednesday === true){
         dayHeaderDiv[i].appendChild(dayDivs)
       } else if( isDayThursday === true){
         dayHeaderDiv[i].appendChild(dayDivs)
       } else if( isDayFriday === true){
         dayHeaderDiv[i].appendChild(dayDivs)
       } else if( isDaySaturday === true){
         dayHeaderDiv[i].appendChild(dayDivs)
       } else{
        return
       }

      container.appendChild(headers);
      
    };
     return container;
    };

    

  return container;
};
// number the divs as days
// current day has a highlighter on the background.
}


function handleCalendarEvent(day){
 day.addEventListener("click", ()=>{
    //open day Schedule


 })
}

console.log("Hey I am Calendar.js");