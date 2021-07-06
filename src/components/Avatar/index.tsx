import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image } from 'react-native';
import { theme } from '../../global/theme';
import { styles } from './styles';

type AvatarProps = {
  url: string;
}

const Avatar = ({ url }: AvatarProps) => {  
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image source={{ uri: url }} style={styles.avatar}/>
    </LinearGradient>
  )
}

export { Avatar };
