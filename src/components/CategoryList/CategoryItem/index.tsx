import React from "react";
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../../global/theme";
import { styles } from "./styles";

type CategoryItemProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckbox?: boolean;
  checked?: boolean;
}

const CategoryItem = (
  { 
    title, 
    icon: Icon,
    hasCheckbox = false, 
    checked = false,
    ...rest 
  }: CategoryItemProps) => {
  const { 
    secondary30,    
    secondary60, 
    secondary70,      
  } = theme.colors;

  return (
    <RectButton {...rest} style={ checked ? { opacity: 1 } : { opacity: 0.8 }}>   
      <LinearGradient 
        colors={[secondary30, secondary70]}
        style={styles.container}
      >
        <LinearGradient 
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
          colors={[ secondary60, secondary70 ]}
        >
          { hasCheckbox && <View style={checked ? styles.checked : styles.check}/> }
          <Icon width={48} height={48}/>          
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>         
    </RectButton>
  ); 
};

export { CategoryItem };
