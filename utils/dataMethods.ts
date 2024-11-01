import AsyncStorage from '@react-native-async-storage/async-storage';


export async function storeData (value: any): Promise<any> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('selected-datstrings-motivate', jsonValue); 
    } catch (e) {
        throw new Error(`Data storage error: ${e}`)
    }
  };
  //todo useEffect with selected as a condition? or better to reformat each time? 
  export async function getData (): Promise<any> {
    try {
      const jsonValue = await AsyncStorage.getItem('selected-datstrings-motivate');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw new Error(`Data fetching error: ${e}`)

    }
  };


export const clearAsyncStorage = async() => {
  AsyncStorage.clear();
}

