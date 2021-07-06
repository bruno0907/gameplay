import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

const styles = StyleSheet.create({  
  container: {    
    flex: 1,    
    justifyContent: 'flex-end',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOut: {
    width: '100%',
    height: 174,    
  },
  title: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 23,
  },
  button: {
    width: '48%',
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',        
  },
  buttonText: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    fontSize: 15,
  },
  cancel: {    
    borderColor: theme.colors.secondary30,                
  },
  confirm: {    
    borderColor: theme.colors.primary,
    backgroundColor: theme.colors.primary,
  }
});

export { styles };
