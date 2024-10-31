import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const [stored, setStored] = useState<string[]>([])
const [dataLoaded, setDataLoaded] = useState<Boolean>(false)

export async function storeData (value: any): Promise<any> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('selected-datstrings', jsonValue); 
    } catch (e) {
        throw new Error(`Data storage error: ${e}`)
    }
  };
  //todo useEffect with selected as a condition? or better to reformat each time? 
  export async function getData (): Promise<any> {
    try {
      const jsonValue = await AsyncStorage.getItem('selected-datstrings');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw new Error(`Data fetching error: ${e}`)

    }
  };

const fetchData = async () => { //todo make this get/fetch combo more concise or something
const data = await getData()
console.log(data)
if (data?.length > 0) 
  {setStored(data)}
setDataLoaded(true)
}

