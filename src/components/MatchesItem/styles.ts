import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',      
  },
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  category: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  matchDate: { 
    flexDirection: 'row',
    alignItems: 'center'
  },
  date: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    color: theme.colors.heading,   
    marginLeft: 8, 
  },
  matchHoster: { 
    flexDirection: 'row',
    alignItems: 'center',    
 },
  isHoster: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.primary,
    marginLeft: 8
  },
  isVisitor: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.on,
    marginLeft: 8
  },
});

export { styles };
