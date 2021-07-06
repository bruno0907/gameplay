import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {        
    flexDirection: 'row',
    alignItems: 'center',      
  },
  profile: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,    
  },
  user: {
    fontFamily: theme.fonts.title700,        
  },
  motd: {
    fontSize: 13,
    color: theme.colors.heading,
    marginTop: -2,    
  },  
});

export { styles };
