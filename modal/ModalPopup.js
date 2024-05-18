import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Button,
  Linking,
  StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import styles from "./ModalStyles";

const ModalPopup = ({
  isVisible,
  onClose,
  title,
  content,
  hasButton,
  navigateHome,
  openUpgradePopup,
  hasLinkToSettings,
}) => {
  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalFormContainer}>
        <View style={styles.modalFormModal}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              onClose();
              if (navigateHome) navigation.navigate("Home");
            }}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalContent}>{content}</Text>
          {hasButton && (
            <Button
              title="Upgrade"
              onPress={() => {
                onClose();
                openUpgradePopup();
              }}
            />
          )}
          {hasLinkToSettings && (
            <Button
              title="Go to Settings"
              onPress={() => {
                onClose();
                Linking.openSettings();
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
    modalFormContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      marginTop: -75,
    },
    modalFormModal: {
      backgroundColor: "#fefefe",
      padding: 25,
      borderRadius: 10,
      alignItems: "center",
      maxWidth: "90%",
      width: 500,
      alignSelf: "center",
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    modalContent: {
      fontSize: 16,
      marginBottom: 10,
    },
    closeButton: {
      position: "absolute",
      top: 10,
      right: 15,
    },
    closeButtonText: {
      color: "#aaa",
      fontSize: 28,
      fontWeight: "bold",
      padding: 5,
    },
  });

export default ModalPopup;