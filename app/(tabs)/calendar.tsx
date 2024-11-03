import { StyleSheet } from 'react-native';
import { Surface, Text, Button } from 'react-native-paper';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { clearAsyncStorage } from '@/utils/dataStorageMethods';
import React, {  } from 'react';
import { MainCalendar } from '@/components/mainCalendar';
import { useTabContext } from './TabContext';



export default function calendarTabScreen() {

  const { selected } = useTabContext();
  
  
    return (
 <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap:16 }}>
          <ThemedText type="title">{"Writing Days"}</ThemedText>
        <MainCalendar/>
        <Button mode="contained" onPress={clearAsyncStorage} accessibilityLabel="I wrote today">
          clear
        </Button>
  </Surface>
    )}
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
