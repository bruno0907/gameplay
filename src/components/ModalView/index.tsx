import React, { ReactNode } from 'react';
import { Modal, ModalProps, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

type ModalViewProps = ModalProps & {
  children: ReactNode;
  isVisible: boolean;  
  handleModalIsVisible: () => void;
}

const ModalView = ({ children, isVisible, handleModalIsVisible, ...rest}: ModalViewProps) => {  
  return (
    <Modal visible={isVisible} transparent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={handleModalIsVisible}>
        <View style={styles.overlay}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export { ModalView };
