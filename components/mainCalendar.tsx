import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import React, {useState, useEffect}from 'react';
import {storeData} from '../utils/dataStorageMethods'
import { calendarDatesObject, createDateObject } from '@/utils/formatDates';
import { useTabContext } from '@/app/(tabs)/TabContext';

export function MainCalendar() {
    const { setSelected, selected } = useTabContext();

    const [markedDates, setMarkedDates] = useState<calendarDatesObject | Object>({}) 
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
