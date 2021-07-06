import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { FontAwesome5 } from '@expo/vector-icons';

import { theme } from '../../global/theme';

type DiscordServerProps = {
  icon: string;
  name: string;
  owner: string;
};

type ButtonSelectServerProps = RectButtonProps & {
  server?: DiscordServerProps | null;  
};

import { styles } from './styles';

const ButtonSelectServer = ({ server = null, ...rest }: ButtonSelectServerProps) => {
  const { colors } = theme; 

  return server ? (
    <RectButton {...rest}>        
      <View style={styles.selectedServerButton}>
        <Image source={{ uri: server.icon }} style={styles.serverIcon}/>
        <View style={styles.selectedServerInformation}>
          <Text style={styles.label}>{server.name}</Text>          
          <Text style={styles.information}>{server.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
        <FontAwesome5 name="angle-right" size={16} color={colors.heading} />          
      </View>
    </RectButton>
  ) : (
    <RectButton {...rest}>        
      <View style={styles.selectServerButton}>
        <LinearGradient 
            colors={[ colors.secondary75, colors.secondary40 ]}
            style={styles.serverIconWrapper}
          />                
        <Text style={styles.label}>Selecione um servidor</Text>
        <FontAwesome5 name="angle-right" size={16} color={colors.heading} />          
      </View>
    </RectButton> 
  );
};

export { ButtonSelectServer };
