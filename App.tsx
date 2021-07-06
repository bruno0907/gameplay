import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes'
import { AuthProvider } from './src/hooks/auth';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { GradientBackground } from './src/components/GradientBackground';

LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded) return <AppLoading />

  return (    
    <GradientBackground>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent" 
        translucent
        />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GradientBackground>
  );
}
