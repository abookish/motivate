import { getIsStartandIsEnd } from "./dateMethods"

export type calendarDatesObject = {[date:string]:{ 
    startingDay: Boolean,
    endingDay: Boolean,
    selected: Boolean
  }
  }

 export function createDateObject (clickedDates: string[]): any{
     if (!clickedDates|| clickedDates.length <1) {
    return null
} else {
    return Object.fromEntries(clickedDates?.map((date: any) => [
      date,
      {
        selected: true, 
        color: 'green' ,
        ...getIsStartandIsEnd(date, clickedDates as string[])
    }
    ])
  )
  }}
        
