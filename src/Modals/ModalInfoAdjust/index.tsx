import React from 'react';
import {Modal, View, Text, StyleSheet} from 'react-native';

import {
  AdjustButton,
  AdjustButtonText,
  AdjustInput,
  Container,
  InfoAdjHeader,
  InnerContainer,
} from './styles';

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
      <Container>
        <InnerContainer>
          <Text
            style={{fontSize: 20, color: '#09035c'}}
            onPress={() => {
              handleCloseModal();
            }}>
            X
          </Text>
        </InnerContainer>
        <InfoAdjHeader> Ajuste o lote conforme a embalagem :</InfoAdjHeader>

        {loteAdjust && (
          <AdjustInput
            value={lote}
            onChangeText={(text: React.SetStateAction<string>) => {
              setLote(text);
            }}></AdjustInput>
        )}

        <View>
          <AdjustButton
            onPress={() => {
              handleConfirmation();
            }}>
            <AdjustButtonText>Confirmar</AdjustButtonText>
          </AdjustButton>
        </View>
      </Container>
    </Modal>
  );
}
