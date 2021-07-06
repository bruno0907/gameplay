import { StyleSheet} from 'react-native';
import { theme } from '../../global/theme';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: theme.colors.primary,    
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',    
  },
  iconContainer: {    
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
    width: 56,
    height: 56, 
  },
  icon: {
    height: 18,
  },
  label: {
    flex: 1,
    fontSize: 15,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    textAlign: 'center',
  },
});

export { styles };