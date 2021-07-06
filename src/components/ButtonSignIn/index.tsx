import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import DiscordIconSVG from '../../assets/discord.png';
import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  label: string;
}

const ButtonSignIn = ({ label, ...rest }: ButtonProps) => {  
  return (
    <RectButton
      style={styles.buttonContainer}      
      {...rest}
    >   
      <View style={styles.iconContainer}>
        <Image source={DiscordIconSVG} style={styles.icon}/>
      </View>        
      <Text style={styles.label}>{label}</Text>  
    </RectButton>
  );
};

export { ButtonSignIn };
