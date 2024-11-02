import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { useTabContext } from './TabContext';
import { getCalendarDateString } from "react-native-calendars/src/services";
import DisplayBox from '@/components/DisplayBox';
import React from 'react';
import { Surface, Text, Button } from 'react-native-paper';


const addTodayToArray = (prevSelectedArray: string[]):string[] => {
  const calendarFormatNow = getCalendarDateString(new Date()) //todo store as set so i dont have to do this
  if (!prevSelectedArray.includes(calendarFormatNow)) {
      return [...prevSelectedArray,calendarFormatNow]
} 
  return prevSelectedArray
}
export default function HomeScreen() {
  const { setSelected, selected } = useTabContext();

const didWritingYes = async() => {
console.log("Yup")
setSelected((prevValues) => addTodayToArray(prevValues));
}
  return (
    <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:16 }}>
        <Button mode="contained" onPress={didWritingYes}  style={styles.button} accessibilityLabel="I wrote today">
          I wrote today
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
