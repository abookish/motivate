import * as React from 'react';
import { Surface, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { useTabContext } from '@/app/(tabs)/TabContext';
import { countThisMonth } from '@/utils/dateMethods';

const DisplayBox = () =>  {
    const { setSelected, selected } = useTabContext();
    const theme = useTheme();
return (
  <Surface style={styles.surface} elevation={2} backgroundColor={theme.colors.secondaryContainer}>
     <Text>You wrote for {countThisMonth(selected)} days this month</Text>
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