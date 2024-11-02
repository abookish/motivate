import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useTabContext } from '@/app/(tabs)/TabContext';
import { countThisMonth } from '@/utils/dateMethods';

const DisplayBox = () =>  {
    const { setSelected, selected } = useTabContext();


return (
    <View style={styles.container}>
  <Surface style={styles.surface} elevation={2}>
     <Text>You wrote for {countThisMonth(selected)} days this month</Text>
  </Surface>
  </View>
)

}

export default DisplayBox;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
      },
  surface: {
    padding: 8,
    height: '20%',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});