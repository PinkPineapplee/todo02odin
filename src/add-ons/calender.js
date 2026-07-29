import { format, startOfDay , isToday, isTomorrow, isYesterday} from "date-fns";


export function dateForThings(){
const today = new date();
console.log(today);

const formattedDate = format(new Date(), "yyyy-MM-dd");

const todayStarts = startOfDay(new Date());

};


function createCalendar(){
//check today
const todayDate = new Date().getDate();
const day = new Date.getDay();
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday", "Friday","Saturday"];
let weekDay = week[day];
console.log(weekDay,today);
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
    const dayHeaderDiv = document.createElement("div");
    dayHeaderDiv.id = toString(i);
    dayHeaderDiv.textContent = headers[i];
    };

    // make day divs
    for(let y = 1 ; y <= num; y++){
    const dayDivs = document.createElement("div");
    dayDivs.className = "dayDivs";
    
    dayDivs.textContent = y;
    };

    //arrange daydivs to weekdaydivs

};
// number the divs as days
// current day has a highlighter on the background.
}