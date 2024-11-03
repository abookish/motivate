import * as React from 'react';
import { Surface, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useTabContext } from '@/app/(tabs)/TabContext';
import { countThisMonth, countThisWeek, countThisYear } from '@/utils/dateMethods';
import TimeIntervalPicker from './TimeIntervalPicker';
import { useEffect, useState } from 'react';

const DisplayBox = () =>  {
    const { setSelected, selected } = useTabContext();
    const theme = useTheme();
    const [selectedTimeInterval, setSelectedTimeInterval] = useState('month');
    const [displayNumber, setDisplayNumber] = useState('unknown');
    const onValueChangeFunction = (itemValue:string) => setSelectedTimeInterval(itemValue)
    useEffect(() => {
        let result
        console.log(`${selectedTimeInterval}`)
        switch (selectedTimeInterval) {
            case 'week':
                result = countThisWeek(selected)
                break;
            case 'year':
                result = countThisYear(selected)
                break;
            default:
                result = countThisMonth(selected)
        }
        setDisplayNumber(result.toString())
        console.log(result)
      }, [selectedTimeInterval, selected]);
return (
  <Surface style={styles.surface} elevation={2} backgroundColor={theme.colors.secondaryContainer}>
     <Text>You wrote {displayNumber} days this </Text> <TimeIntervalPicker selectedValue={selectedTimeInterval} onValueChangeFunction={onValueChangeFunction}/>
  </Surface>
)

}

export default DisplayBox;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: '20%',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});