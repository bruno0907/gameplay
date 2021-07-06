import React, { useState, useEffect } from 'react';
import { 
  ImageBackground, 
  View, 
  Text, 
  FlatList, 
  Alert, 
  Share, 
  Platform, 
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking'

import { GradientBackground } from '../../components/GradientBackground';
import { Header } from '../../components/Header';
import { ButtonShare } from '../../components/ButtonShare';
import { GuildProps } from '../../components/MatchesItem';
import { ListHeader } from '../../components/ListHeader';
import { PlayersItem } from '../../components/PlayersItem';
import { ListDivider } from '../../components/ListDivider';
import { ButtonSignIn } from '../../components/ButtonSignIn';
import { Loader } from '../../components/Loader';

import { discordApi } from '../../services/discordApi';

import { styles } from './styles';

type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;  
  status: string;
}

type MatchProps = {  
  id: string;
  category: string;
  date: string;
  title: string;
  description: string;
  guild: GuildProps;  
}

type ParamsProps = {
  data: MatchProps;
}

type GuildWidgetParams = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
}

function MatchDetails() {
  const route = useRoute();
  const [guildWidget, setGuildWidget] = useState<GuildWidgetParams>({} as GuildWidgetParams);
  const [loading, setLoading] = useState(true);

  const { data } = route.params as ParamsProps;

  const fetchGuildInfo = async () => {
    try {
      const response = await discordApi.get(`/guilds/${data.guild.id}/widget.json`)
      setGuildWidget(response.data);
      setLoading(false);

    } catch {
      Alert.alert('Verifique as configurações do servidor.')

    } finally {
      setLoading(false);

    }
  }

  const shareInvitation = () => {
    const message = Platform.OS === 'ios' 
    ? `Junte-se a ${data.guild.name}`
    : guildWidget.instant_invite

    Share.share({
      message,
      url: guildWidget.instant_invite
    })
  }

  const handleJoinDiscordServer = () => {
    Linking.openURL(guildWidget.instant_invite)
  }

  useEffect(() => {
    fetchGuildInfo();

  }, [])

  return (
    <GradientBackground>
      <Header 
        title="Detalhes" 
        action={
          guildWidget.instant_invite 
          && <ButtonShare shareInvitation={shareInvitation}/>
        }
      />
      <ImageBackground source={{ uri: 'https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/10/28123511/ElTI-Q0UcAA3EFg.jpg' }} style={styles.banner}>    
        <LinearGradient colors={[ 'rgba(18,29,51,0.1)', 'rgba(18,29,51,1)']}style={styles.container}>
          <Text style={styles.title}>{data.guild.name}</Text>
          <Text style={styles.description}>{data.description}</Text>
        </LinearGradient>
      </ImageBackground>
      { loading ? <Loader /> : !guildWidget.members ?
        <Text style={[styles.description, { paddingHorizontal: 24, marginTop: 64 }]}>
          Para visualizar este recurso o servidor precisa ter os widgets habilitados. 
          Habilite-os ou solicite ao administrador do mesmo.
        </Text> :
        <>
          <ListHeader 
            title="Jogadores"
            subtitle={`Total: ${guildWidget.members?.length || ''}`}
          />
          <FlatList
            style={styles.playersList}
            contentContainerStyle={{ paddingBottom: 69 }}
            data={guildWidget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <PlayersItem data={item} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
          />  
          <View style={styles.footer}>
            <ButtonSignIn 
              label="Entrar na partida"
              onPress={handleJoinDiscordServer}
            />
          </View>      
        </>      
        }      
      

    </GradientBackground>
  );
};

export { MatchDetails, MemberProps };
