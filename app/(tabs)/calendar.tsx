import { StyleSheet, Image, Button } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import { clearAsyncStorage, getData } from '@/utils/dataStorageMethods';
import React, { useEffect, useState } from 'react';
import { MainCalendar } from '@/components/mainCalendar';


export default function calendarTabScreen() {
  const [dataLoaded, setDataLoaded] = useState<Boolean>(false)
  const [stored, setStored] = useState<string[]>([])
  
const fetchData = async () => {
  const data = await getData()
  console.log(data)
  if (data?.length > 0) {
    setStored(data)
  }
  setDataLoaded(true)
}
  useEffect( () => {
    console.log("trying to fetch")
    fetchData()
  }, []);
  
   if (!dataLoaded) {
    return "Fetching data"
   }
  
    return (
      
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">{"Hello World"}</ThemedText>
          <HelloWave />
        </ThemedView>
        <MainCalendar selected={stored}/>
     <Button title="clear" onPress={clearAsyncStorage}>
  </Button>
      </ParallaxScrollView>
    );
  }

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
