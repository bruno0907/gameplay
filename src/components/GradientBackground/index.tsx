import React, { ReactNode } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/theme';

import { styles } from './styles';

type GradientBackgroundProps = {
  children: ReactNode;
};

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient colors={[ secondary80, secondary100 ]} style={styles.container}>
      {children}
    </LinearGradient>
  );
};

export { GradientBackground };
