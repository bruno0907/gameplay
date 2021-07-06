import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import { theme } from '../../global/theme';

type ButtonShareProps = {
  shareInvitation: () => void;
}

const ButtonShare = ({ shareInvitation }: ButtonShareProps) => {
  const { primary } = theme.colors
  
  return (
    <BorderlessButton onPress={shareInvitation}>
      <FontAwesome5 name="share-alt" size={24} color={primary} />
    </BorderlessButton>
  );
}

export { ButtonShare };
