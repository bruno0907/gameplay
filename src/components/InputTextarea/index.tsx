import React from 'react';
import { TextInput, TextInputProps } from 'react-native';


import { styles } from './styles';

const InputText = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput style={styles.container} {...rest} /> 
  );
};

export { InputText };
