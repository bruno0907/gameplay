import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {        
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 1,    
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary75,    
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,   
    textAlignVertical: 'top' ,
  },
});

export { styles };
