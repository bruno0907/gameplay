import { StyleSheet } from 'react-native'

import { theme } from '../../global/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,      
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 40,
  },
  hero: {
    width: '100%',
    height: 360,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    marginBottom: 16,    
  },
  subTitle: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: 64,
  },
})

export { styles }