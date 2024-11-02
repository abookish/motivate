import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, {useState, useEffect}from 'react';
import {storeData} from '../utils/dataStorageMethods'
import { calendarDatesObject, createDateObject } from '@/utils/formatDates';
import { useTabContext } from '@/app/(tabs)/TabContext';
import { getDateStringsByMonthYear } from '@/utils/dateMethods';
import { isToday } from 'date-fns';

export function MainCalendar() {
    const { setSelected, selected, wroteToday, setWroteToday } = useTabContext();

    const [markedDates, setMarkedDates] = useState<calendarDatesObject | Object>({}) 
    const todayString= new Date().toISOString().split("T")[0]
  useEffect(() => {
    if (!!selected) {
      setMarkedDates(createDateObject(selected))
    }
    storeData(selected)
  }, [selected]);

  const toggleSelected = (selectedDayString: string, prevSelectedArray: string[]):string[] => {
    if (prevSelectedArray.includes(selectedDayString)) {
        return prevSelectedArray.filter(date => date !=selectedDayString)

    } else {
        return [...prevSelectedArray,selectedDayString]
    }
  }

  return (
    <div>
     
    <Calendar
    markingType={'period'}
    markedDates= {markedDates}
    onDayPress={(day:any) => {
      console.log(`${JSON.stringify(day)}`)
      if(day.dateString === todayString) {
        console.log("TODAY")
        setWroteToday(!wroteToday)
      } else {
        console.log(`${todayString} and ${day.dateString}`)
        console.log("not today")
      }

      setSelected((prevSelected: string[]) => toggleSelected(day.dateString, prevSelected))
    }
     }
  />

  </div> 
  
  );
}


const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
