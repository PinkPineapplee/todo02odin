import { format, startOfDay , isToday, isTomorrow, isYesterday} from "date-fns";


export function dateForThings(){
const today = new date();
console.log(today);

const formattedDate = format(new Date(), "yyyy-MM-dd");

const todayStarts = startOfDay(new Date());

};