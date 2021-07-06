import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { GuildsModalItem } from "../../components/GuildsModalItem";
import { ListDivider } from "../../components/ListDivider";
import { Loader } from "../../components/Loader";
import { discordApi } from "../../services/discordApi";

const { CDN_IMAGE } = process.env;

import { styles } from "./styles";

type GuildProps = {
  id: string;
  name: string;
  game: string;
  icon: string;
  banner: string;
  members: string[];
  owner: string;
}

type GuildsProps = {
  handleSelectGuild: (guild: GuildProps) => void;
}

function Guilds({ handleSelectGuild }: GuildsProps) {   
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);
  
  async function fetchGuilds() {
    const { data } = await discordApi.get('/users/@me/guilds')

    const guildsData = data.map((guild: GuildProps) => {
      return {
        ...guild,
        icon: `${CDN_IMAGE}/icons/${guild.id}/${guild.icon}.png`
      }
    })

    setGuilds(guildsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();

  }, []);
  return loading 
    ? <Loader />
    : <FlatList 
        style={styles.container}
        contentContainerStyle={{ paddingVertical: 69 }}
        showsVerticalScrollIndicator={false}
        data={guilds} 
        keyExtractor={item => item.id} 
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => (
          <GuildsModalItem 
            data={item} 
            onPress={() => handleSelectGuild(item)}
        />
      )}
    />
}

export { Guilds, GuildProps }; 
