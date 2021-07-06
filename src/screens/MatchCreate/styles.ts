import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    marginTop: 28,
    marginBottom: 12,
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  alternative: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    color: theme.colors.highlight,
  },
  inlineContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }, 
  footer: {
    flex: 1,
    marginTop: 32,
    marginBottom: getBottomSpace() + 48,
    paddingHorizontal: 24,        
  },
  createButton: {
    width: '100%',
    height: 56,    
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,        
  },
  createButtonLabel: {
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    color: theme.colors.heading, 
  },
  bar: {
    alignSelf: 'center',
    width: 45,
    height: 2,
    backgroundColor: theme.colors.secondary30,
    marginTop: 13,
    marginBottom: 24,
  },
});

export { styles };
