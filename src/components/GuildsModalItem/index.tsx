import React from "react";
import { View, TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { GuildProps } from "../../screens/Guilds";
import { styles } from "./styles";
import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/theme";

type GuildsModalItemProps = TouchableOpacityProps & {
  data: GuildProps;  
};

function GuildsModalItem({ data, ...rest }: GuildsModalItemProps) {
  const { heading } = theme.colors
  
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.container}>      
      <GuildIcon icon={data.icon} />      
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.game}>{data.owner ? 'Adminstrador' : 'Convidado'}</Text>
      </View>
      <FontAwesome5 name="angle-right" size={16} color={heading} />
    </TouchableOpacity>
  );
};

export { GuildsModalItem };
