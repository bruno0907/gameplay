import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GuildIcon } from '../GuildIcon';

import PlayerSVG from '../../assets/player.svg'
import CalendarSVG from '../../assets/calendar.svg'

import { theme } from '../../global/theme';
import { styles } from './styles';

import { categories } from '../../utils/categories';
import { GuildProps } from '../../screens/Guilds';

type MatchProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type MatchesItemProps = RectButtonProps & {
  data: MatchProps;
}

function MatchesItem({ data, ...rest}: MatchesItemProps) {  
  const navigation = useNavigation()
  const { primary, on } = theme.colors;
  
  const { date, guild } = data  
  
  const [category] = categories.filter(category => category.id === data.category);  

  function handleMatchDetails(data: MatchProps) {
    navigation.navigate('MatchDetails', { data })
  }  

  return (
    <RectButton style={styles.container} onPress={() => handleMatchDetails(data)}{...rest}>
      <GuildIcon icon={guild.icon} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{guild.name}</Text>
          <Text style={styles.category}>{category.title}</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.matchDate}>
            <CalendarSVG 
              fill={primary} 
              width={16}
              height={16}
            />
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.matchHoster}>
            <PlayerSVG  
              fill={guild.owner ? primary : on}  
              width={16}
              height={16}
            />
            <Text style={ guild.owner ? styles.isHoster : styles.isVisitor }>
              { guild.owner ? 'Anfitrião' : 'Visitante' }
            </Text>
          </View>
        </View>        
      </View>
    </RectButton>
  );
};

export { 
  MatchesItem, 
  GuildProps,
  MatchProps
};
