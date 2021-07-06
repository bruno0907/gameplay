import React from 'react'
import {
  View,
  Text,
  Image,
  Alert, 
  ActivityIndicator
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { GradientBackground } from '../../components/GradientBackground'
import { ButtonSignIn } from '../../components/ButtonSignIn'

import Hero from '../../assets/illustration.png'

import { styles } from './styles'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/theme'

function SignIn() {
  const { signIn, loading } = useAuth()

  async function handleSignIn() {
    try {
      await signIn();    
      
    } catch (error) {
      Alert.alert(error.message);
      
    }
  };

  return (    
    <GradientBackground>
      <View style={styles.container}>      
        <Image
          source={Hero}
          style={styles.hero}
          resizeMode="stretch" 
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>
          <Text style={styles.subTitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>
          { loading 
            ? <ActivityIndicator color={theme.colors.primary}/> 
            : <ButtonSignIn 
            label="Entrar com discord"          
            onPress={handleSignIn}
          />
          }
        </View>
      </View>
    </GradientBackground>
  )
}

export { SignIn }