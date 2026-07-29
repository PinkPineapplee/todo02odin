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
// checks the year
// return the number of days in that month.
//creates divs equivalent to the number of days.
// number the divs as days
// current day has a highlighter on the background.
}