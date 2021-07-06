import React, { ReactNode } from 'react';
import {  View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ButtonGoBack } from '../ButtonGoBack';

import { styles } from './styles';
import { theme } from '../../global/theme';

type HeaderProps = {
  title: string;
  action?: ReactNode;
}

const Header = ({ title, action }: HeaderProps) => {
  const { secondary100, secondary40 } = theme.colors
  
  return (
    <LinearGradient style={styles.container} colors={[ secondary100, secondary40 ]}>
      <ButtonGoBack />
      <Text style={styles.title}>{title}</Text>
      { 
        action 
        ? <View>{action}</View>
        : <View />
      }      
    </LinearGradient>
  );
}

export { Header };
