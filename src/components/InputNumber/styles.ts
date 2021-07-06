import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderWidth: 1,    
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
    backgroundColor: theme.colors.secondary75,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },
});

export { styles };
