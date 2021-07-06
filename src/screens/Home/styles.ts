import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + 26,    
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 39,
  },
  content: {
    marginTop: 40,    
  },
  matchesList: {
    marginTop: 24,
  },
  notMatchFoundText: {
    paddingHorizontal: 24,
    fontSize: 16,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    marginTop: 24,
  }
});

export { styles };
