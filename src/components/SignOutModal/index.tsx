import React, { useState } from "react"

import { View, Text, TouchableOpacity } from "react-native"
import { useAuth } from "../../hooks/auth"
import { GradientBackground } from "../GradientBackground"
import { ModalView } from "../ModalView"

import { theme } from "../../global/theme"
import { styles } from "./styles"

type SignOutModalProps = {
  handleModalIsVisible: () => void;
  isVisible: boolean;
}

const SignOutModal = ({ handleModalIsVisible, isVisible }: SignOutModalProps) => {
  const { handleSignOut} = useAuth(); 

  const { primary} = theme.colors;

  return (
    <ModalView 
      isVisible={isVisible} 
      handleModalIsVisible={handleModalIsVisible}
      onRequestClose={handleModalIsVisible}
    >
      <View style={styles.container}>
        <View style={styles.signOut}>
          <GradientBackground>
            <View style={styles.content}>
              <Text style={styles.title}>
                Você deseja sair do <Text style={{ fontWeight: 'bold' }}>Game
                <Text style={{ color: primary }}>Play</Text>?
              </Text>
              </Text>
              <View style={styles.buttons}>
                <TouchableOpacity 
                  style={[styles.button, styles.cancel]}
                  activeOpacity={0.7}
                  onPress={handleModalIsVisible}
                >
                  <Text style={styles.buttonText}>Não</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.button, styles.confirm]}
                  activeOpacity={0.7}
                  onPress={handleSignOut}
                >
                  <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </GradientBackground>
        </View>
      </View>
    </ModalView>
  );
};

export { SignOutModal };
