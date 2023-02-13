import React from 'react';
import {
  Button,
  Container,
  HeaderText,
  HeaderView,
  Intro,
  ButtonText,
} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function GreetingsScreen() {
  const navigation = useNavigation();
  const handlePress = () => {
    //@ts-ignore
    navigation.navigate('homeScreen');
  };
  return (
    <Container>
      <HeaderView style={{elevation: 5}}>
        <HeaderText>Bem-vindo!</HeaderText>
      </HeaderView>
      <Intro>
        Este aplicativo foi desenvolvido com a finalidade de extrair lotes de
        medicamentos a partir da captura de imagem de uma embalagem. Na próxima
        tela, basta abrir a câmera e apontá-la para a impressão do lote. O campo
        onde o lote lido aparece é clicável e editável, caso algum ajuste seja
        necessário.
      </Intro>
      <Button
        style={{elevation: 10}}
        onPress={() => {
          handlePress();
        }}>
        <ButtonText>Para o App!</ButtonText>
      </Button>
    </Container>
  );
}
