import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 102,
    height: 118,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    position: "relative",    
  },
  title: {
    fontSize: 15,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    marginTop: 8,
  },
  check: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-end',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    position: 'absolute',
    top: 5,
    right: 5,
  },
  checked: {
    position: 'absolute',
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,    
    borderRadius: 2,
    top: 8,
    right: 8,
  },  
})

export { styles };
