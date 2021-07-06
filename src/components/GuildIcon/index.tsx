import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import DiscordSVG from '../../assets/discord.svg';

import { theme } from '../../global/theme';
import { styles } from './styles';

type GuildIconProps = {
  icon: string;  
};

function GuildIcon({ icon }: GuildIconProps){
  const { secondary50, secondary70 } = theme.colors;  

  return (
    <LinearGradient colors={[secondary50, secondary70]} style={styles.container}>
      { icon 
      ? <Image 
          source={{ uri: icon }} 
          style={styles.icon}
        />
      : <DiscordSVG width={40} height={40}/>
      }
    </LinearGradient>
  );
};

export { GuildIcon };
