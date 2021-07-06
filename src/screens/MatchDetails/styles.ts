import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,    
  },
  banner: {
    width: '100%',
    height: 234,         
  },  
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 28,    
    color: theme.colors.heading,    
    marginBottom: 12,
  },
  description: {
    maxWidth: 311,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 21,
    color: theme.colors.heading    
  },
  content: {
    flex: 1,    
  },  
  playersList: {
    marginTop: 24,
  },
  footer: {
    padding: 24,
    marginBottom: getBottomSpace(),
  },
});

export { styles };
