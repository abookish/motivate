import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, {useState, useEffect}from 'react';
import {storeData} from '../utils/dataStorageMethods'
import { calendarDatesObject, createDateObject } from '@/utils/formatDates';

export function MainCalendar(
    

  props: { selected?: string[]}
) {
    const [markedDates, setMarkedDates] = useState<calendarDatesObject | Object>({}) 
    const [selectedDates, setSelectedDates] = useState<string[]>(props.selected|| [])
  useEffect(() => {
    if (!!selectedDates && selectedDates.length > 0) {
      setMarkedDates(createDateObject(selectedDates))
    }
    storeData(selectedDates)
  }, [selectedDates]);

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
      setSelectedDates((prevSelected: string[]) => toggleSelected(day.dateString, prevSelected))
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
//todo maybe this component should ONLY handle selected, pass selected to somewhere else to get the whole object and do operations
//like a DateObject thing that gets passed