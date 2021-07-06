import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,         
    marginBottom: 8,        
  },
  content: {
    flex: 1,         
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
    marginBottom: 4,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  status: {    
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
    marginLeft: 8,    
  },  
});

export { styles };
