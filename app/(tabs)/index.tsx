import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTabContext } from './TabContext';
import { getCalendarDateString } from "react-native-calendars/src/services";
import DisplayBox from '@/components/DisplayBox';

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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}> 
        <ThemedText type="default">So?</ThemedText>
        <Button title="I wrote today" onPress={didWritingYes}>
        </Button>
      </ThemedView>
      <DisplayBox/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
