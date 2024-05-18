import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import LoadingModalStyles from './LoadingModalStyles';

const LoadingModal = ({ isVisible, onClose }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={LoadingModalStyles.upgradePopupOverlay}>
        <View style={LoadingModalStyles.upgradePopup}>
          <ActivityIndicator size="large" color="#3f51b5" />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
