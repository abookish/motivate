import { addDays, getMonth, getYear, isThisMonth, isThisWeek, isThisYear, parseISO, subDays } from "date-fns";
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
    //month: MM, year: YYYY
    //getMonth gives The month index (0-11)
  export const getDateStringsByMonthYear = (year:number, month: number, dateStringArray: string[]): string[] => {
    return dateStringArray.filter(datestring=> getYear(parseISO(datestring)) === year && getMonth(parseISO(datestring)) === (month - 1)) 
    }
  export const countThisWeek = (dateStringArray: string[]): number => {
    console.log('supposed to be this week count')
    console.log(`supposed count week ${dateStringArray.filter(datestring=> isThisWeek(parseISO(datestring))).length}`)
    return dateStringArray.filter(datestring=> isThisWeek(parseISO(datestring))).length 


    }

  export const countThisMonth = (dateStringArray: string[]): number => {
    return dateStringArray.filter(datestring=> isThisMonth(parseISO(datestring))).length 
    }
  
    export const countThisYear = (dateStringArray: string[]): number => {
      console.log('supposed to be this year count')

      return dateStringArray.filter(datestring=> isThisYear(parseISO(datestring))).length 


    }