import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useTabContext } from './TabContext';
import { getCalendarDateString } from "react-native-calendars/src/services";
import DisplayBox from '@/components/DisplayBox';
import React from 'react';
import { Surface, Text, Button } from 'react-native-paper';
import useButtonState from '@/hooks/useSetButtonState';


const addTodayToArray = (prevSelectedArray: string[]):string[] => {
  const calendarFormatNow = getCalendarDateString(new Date()) //todo store as set so i dont have to do this
  if (!prevSelectedArray.includes(calendarFormatNow)) {
      return [...prevSelectedArray,calendarFormatNow]
} 
  return prevSelectedArray
}
export default function HomeScreen() {
  const { setSelected, selected, wroteToday, setWroteToday } = useTabContext();
  const { buttonText, buttonActive } = useButtonState();

const didWritingYes = async() => {
setSelected((prevValues) => addTodayToArray(prevValues));
setWroteToday(true)
}
console.log(`wrote today is: ${wroteToday}`)

  return (
    <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:16 }}>
        <Button mode="contained" onPress={didWritingYes}  style={styles.button} accessibilityLabel="I wrote today" disabled={!buttonActive}>
          {buttonText}
        </Button>
              <DisplayBox/>
              </Surface>

  );
}

const styles = StyleSheet.create({

  stepContainer: {
    gap: 8,
    marginBottom: 8,
    alignItems: 'center'
  },
  button: {
    width: '20%', 
    paddingVertical: 8, 
    borderRadius: 4, // Rounded
  }
});
