import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {   
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',   
   marginLeft: 24,
   paddingRight: 24,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18
  },
  game: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13
  },
});

export { styles };