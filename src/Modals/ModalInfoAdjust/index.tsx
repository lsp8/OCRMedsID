import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

interface ModalProps {
  visible: boolean;
  handleModalVisibility: () => void;
  setLote: React.Dispatch<React.SetStateAction<string>>;
  loteAdjust: boolean;
  lote: string;
}
export function ModalInfoAdjust({
  visible,
  handleModalVisibility,
  setLote,
  loteAdjust,
  lote,
}: ModalProps) {
  const handleCloseModal = () => {
    handleModalVisibility();
  };

  const handleConfirmation = () => {
    handleModalVisibility();
  };
  return (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={handleCloseModal}>
      <View style={styles.infoAdjustContainer}>
        <View
          style={{
            marginRight: '4%',
            alignItems: 'flex-end',
            marginTop: '2%',
          }}>
          <Text
            style={{fontSize: 20, color: '#09035c'}}
            onPress={() => {
              handleCloseModal();
            }}>
            X
          </Text>
        </View>
        <Text style={styles.infoAdjHeader}>
          {' '}
          Ajuste o lote conforme a embalagem :
        </Text>

        {loteAdjust && (
          <TextInput
            style={styles.adjustInput}
            value={lote}
            onChangeText={(text: React.SetStateAction<string>) => {
              setLote(text);
            }}></TextInput>
        )}

        <View>
          <TouchableOpacity
            style={styles.adjustButton}
            onPress={() => {
              handleConfirmation();
            }}>
            <Text style={styles.adjustButtonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  infoAdjustContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    top: 50,

    width: '80%',
    borderRadius: 10,
  },
  infoAdjHeader: {
    position: 'absolute',
    marginTop: '8%',
    fontSize: 16,
    marginHorizontal: '4%',
    color: '#09035c',
    marginBottom: '4%',
  },
  adjustInput: {
    marginTop: '8%',
    marginBottom: '4%',
    fontSize: 18,
    color: '#09035c',
    alignSelf: 'center',
    backgroundColor: '#aeaeb1',
    paddingHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#09035c',
    borderStyle: 'dashed',
  },
  adjustButton: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#09035c',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: '2%',
  },
  adjustButtonText: {
    fontSize: 16,
    color: '#09035c',
  },
});
