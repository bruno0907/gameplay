import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',    
    paddingHorizontal: 24,
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
  },
  total: {
    fontSize: 13,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
  },
})

export { styles };
