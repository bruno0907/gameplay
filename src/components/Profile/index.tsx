import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Avatar } from '../../components/Avatar'
import { SignOutModal } from '../SignOutModal';

import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

const Profile = () => {
  const { user } = useAuth(); 

  const [isVisible, setIsVisible] = useState(false);

  const handleModalIsVisible = () =>  setIsVisible(prevState => !prevState);

  return (
    <>
      <RectButton onPress={handleModalIsVisible}>
        <View style={styles.container}>
          <Avatar url={user.avatar}/>        
          <View>
            <Text style={styles.profile}>
              Olá, <Text style={styles.user}>{user.firstName}</Text>
            </Text>
            <Text style={styles.motd}>{user?.motd}</Text>
          </View>      
        </View>      
      </RectButton>

      <SignOutModal isVisible={isVisible} handleModalIsVisible={handleModalIsVisible} />
    </>
  );
};

export { Profile };
