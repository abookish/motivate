import { useTabContext } from '@/app/(tabs)/TabContext';
import { useEffect, useState } from 'react';

const useButtonState = () => {
  const [buttonActive, setButtonActive] = useState(true);
  const [buttonText, setButtonText] = useState('I wrote today');
  const { wroteToday } = useTabContext();
  const conditionalButtonText = wroteToday?'You wrote today!': 'I wrote today'

  const updateButtonState = () => {
    setButtonActive(!wroteToday); 
    setButtonText(conditionalButtonText); 
  };

  useEffect(() => {
  updateButtonState()
  }, [wroteToday]); 

  return { buttonActive, buttonText };
};

export default useButtonState;
