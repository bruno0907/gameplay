import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: getStatusBarHeight() + 14,
    paddingHorizontal: 24
  },
  title: {    
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
});

export { styles };
