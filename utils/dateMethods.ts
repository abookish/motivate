import { addDays, parseISO, subDays } from "date-fns";
import { getCalendarDateString } from "react-native-calendars/src/services";

export const getIsStartingDay = (date: Date, dateStringArray: string[]):Boolean =>{
    const prevDay = subDays(date,1);
    return !dateStringArray.includes(getCalendarDateString(prevDay))
  } 
  export const getIsEndingDay = (date: Date, dateStringArray: string[]):Boolean =>{
    const nextDay = addDays(date,1)
    return !dateStringArray.includes(getCalendarDateString(nextDay))
  } 
  
  export const getIsStartandIsEnd = (dateString: string, dateStringArray: string[]):Object =>{ //get is start and is end, do the iterating in here, 
    const date = parseISO(dateString)
    
    return {
    startingDay: getIsStartingDay(date, dateStringArray),
    endingDay: getIsEndingDay(date, dateStringArray)
    } 
    
    }