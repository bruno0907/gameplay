import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/theme';

const ButtonGoBack = () => {
  const navigation = useNavigation()  
  
  const { heading } = theme.colors
  
  return (
    <BorderlessButton onPress={() => navigation.goBack()}>
      <Feather 
        name="arrow-left"
        size={24}
        color={heading}
      />
    </BorderlessButton>
  );
}

export { ButtonGoBack };
