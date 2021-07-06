import React from 'react';
import { View, Text } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { MemberProps } from '../../screens/MatchDetails';
import { GuildIcon } from '../GuildIcon';

import { theme } from '../../global/theme';
import { styles } from './styles';

type PlayersItemProps = {
  data: MemberProps;
}

function PlayersItem({ data }: PlayersItemProps) {  
  const { primary, on, busy } = theme.colors;
  const { avatar_url, username, status } = data;

  return (
    <View style={styles.container}> 
      <GuildIcon icon={ avatar_url }/>  

      <View style={styles.content}>        
        <Text style={styles.title}>{username}</Text>

        <View style={styles.footer}>
          <Octicons name="primitive-dot" size={16} color={
            status === 'online' ? on :
            status === 'dnd' ? primary : busy            
          } />
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>  
    </View>      
  );
};

export { 
  PlayersItem, 
};
