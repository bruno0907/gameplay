import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { MatchDetails } from '../screens/MatchDetails';
import { MatchCreate } from '../screens/MatchCreate';

import { theme } from '../global/theme';

const { Navigator, Screen } = createStackNavigator();

const screenOptions = {
  cardStyle: {
    backgroundColor: theme.colors.secondary100,
  },
}

const AppRoutes = () => {
  return (    
    <Navigator headerMode="none" screenOptions={screenOptions}>            
      <Screen name="Home" component={Home}/> 
      <Screen name="MatchDetails" component={MatchDetails}/>
      <Screen name="MatchCreate" component={MatchCreate}/>
    </Navigator>  
  );
};

export { AppRoutes };
