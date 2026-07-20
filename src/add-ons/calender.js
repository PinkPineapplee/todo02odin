import { format, startOfDay , isToday, isTomorrow, isYesterday} from "date-fns";


export function dateForThings(){
const today = new date();
console.log(today);

const formattedDate = format(new Date(), "yyyy-MM-dd");

const todayStarts = startOfDay(new Date());

};


function createCalendar(){
//check today
// checks the month
// checks the year
// return the number of days in that month.
//creates divs equivalent to the number of days.
// number the divs as days
// current day has a highlighter on the background.
}