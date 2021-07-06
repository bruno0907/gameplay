import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  selectServerButton: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderColor: theme.colors.secondary50,    
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 24,    
    overflow: 'hidden',
  },
  serverIconWrapper: {
    width: 68,
    height: '100%',
    borderRightWidth: 1,        
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderColor: theme.colors.secondary50,    
  },

  selectedServerButton: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderColor: theme.colors.secondary50,    
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    paddingRight: 24,        
  },
  selectedServerInformation: {
     paddingHorizontal: 24,
     marginRight: 'auto'
  },
  information: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  serverIcon: {
    width: 68,
    height: 68,
    borderRadius: 8,
    left: -1,       
  },
});

export { styles };
