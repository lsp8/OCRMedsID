import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';

import {
  Container,
  InnerContainer,
  DataContainer,
  LoteView,
  Data,
  CamButton,
  Clear,
  Header,
  Label,
  BlockCard,
  ModalBlocks,
  Loading,
} from './styles';
import {Text, View, FlatList} from 'react-native';
import TextRecognition from 'react-native-text-recognition';
import ImageCropPicker from 'react-native-image-crop-picker';

export default function HomeScreen() {
  const [lote, setLote] = useState<string>('');
  const [blocks, setBlocks] = useState<string[]>([]);
  const [modalBlocksVis, setModalBlocksVis] = useState<boolean>(false);
  const [blocksAmount, setBlocksAmount] = useState<number>(0);
  const [OCRLoading, setOCRLoading] = useState<boolean>(false);

  const takePhotoFromCamera = () => {
    setLote('');
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(async image => {
      setOCRLoading(true);
      const result = await TextRecognition.recognize(image.path);
      setOCRLoading(false);
      console.log('IMAGEM=', image);
      console.log('RESULT=', result);
      setBlocks(result);
      countBlocks(result);
    });
  };

  const countBlocks = (o: string[]) => {
    setBlocksAmount(o.length);
  };

  const renderBloco = (block: string) => (
    <BlockCard>
      <Text
        onPress={() => {
          setModalBlocksVis(false);
        }}>
        {block}
      </Text>
    </BlockCard>
  );

  const wipeData = () => {
    setLote('');
  };

  useEffect(() => {
    const fullReading = blocks.join();
    let includesL = false;
    let multiBlocks = false;
    let loteLonelyBlock = false;
    let hasColon = false;
    let lWithSpace = false;
    let isFullWord = false;
    for (let i = 0; i <= blocks.length; i++) {
      if (blocks[i]?.length >= 6) {
        if (blocks[i]?.includes('LOTE')) {
          console.log('CENARIO 0');
          isFullWord = true;
          let rawLote = blocks[i];
          let LOTEPosition = blocks[i].indexOf('LOTE') + 4;
          setLote(rawLote.slice(LOTEPosition));
          if (blocks[i]?.includes('FAB')) {
            let FABPosition = blocks[i].indexOf('FAB');
            setLote(rawLote.slice(LOTEPosition, FABPosition).replace(/ /g, ''));
          }
        }

        if (!isFullWord) {
          //dois pontos
          if (blocks[i]?.includes('L:')) {
            includesL = true;
            hasColon = true;
            console.log('entrou no primeiro cenario');
            let LPosition = blocks[i].indexOf('L:');
            let rawLote = blocks[i];
            let FPosition = 0;
            setLote(
              rawLote.slice(LPosition + 2, rawLote.length).replace(/ /g, ''),
            );
            if (blocks[i]?.includes('F:')) {
              console.log('Entrou no F: do primeiro cenário');
              FPosition = blocks[i].indexOf('F:');
              if (FPosition > LPosition) {
                setLote(
                  rawLote.slice(LPosition + 2, FPosition).replace(/ /g, ''),
                );
              }
            }
          }
          //sem pontos
          if (blocks[i]?.includes('L ')) {
            includesL = true;
            lWithSpace = true;
            let loteBegin = blocks[i].indexOf('L ');
            let loteEnd = 0;
            console.log('entrou no segundo cenario');
            if (blocks[i]?.includes('F')) {
              let FPosition = blocks[i].indexOf('F');
              loteEnd = FPosition;
              console.log('entrou no if do F');
            }
            if (!multiBlocks) {
              let FPosition = blocks[i].indexOf('F');
              loteEnd = FPosition;
              let rawLote = blocks[i];
              if (FPosition > 0) {
                let spacedLote = rawLote.slice(loteBegin + 2, loteEnd);
                setLote(spacedLote.replace(/ /g, ''));
                console.log('Entrou no if do !multiblocks FPosition>0');
              } else {
                let spacedLote = rawLote.slice(loteBegin + 2);
                setLote(spacedLote.replace(/ /g, ''));
                console.log('Entrou no if do !multiblocks FPosition -1');
              }

              console.log('POSIÇÃO F:', FPosition);
            }
          }
          if (
            blocks[i]?.includes('L') &&
            blocks[i]?.indexOf('L') == 0 &&
            !hasColon &&
            !lWithSpace
          ) {
            console.log('Entrou no terceiro cenário');
            loteLonelyBlock = true;
            setLote(blocks[i].replace(/ /g, '').slice(1));
          }
          if (!includesL && !loteLonelyBlock) {
            console.log('Entrou no quarto cenário');
            setLote(fullReading?.replace(/ /g, '').slice(0, 6));
          }
        }
      }
    }
  }, [blocks]);

  //OCR LOG:
  //TESTELOTE1 = OK -Entrou no F: do primeiro cenário
  //TESTELOTE2 = OK ---POSSÍVEL F SEM DOIS PONTOS- LOW PRIORITY -Entrou no F: do primeiro cenário
  //TESTELOTE3 = OK, MAS AS VEZES FALHANDO PARA LER O F -Entrou no if do !multiblocks FPosition>0
  //TESTELOTE4 = FALHA OCR, leitura parcial
  //TESTELOTE5 = FALHA OCR, leitura parcial
  //TESTELOTE6 = OK, MAS OCR FALHANDO POR IMPRESSÃO FRACA- Entrou no não inclui L
  //TESTELOTE7 = OK SEM ALTERAÇÕES DE CODIGO -Entrou no if do !multiblocks FPosition>0
  //TESTELOTE8 = OK, ALTERAÇÃO DE CÓDIGO(ANTERIORES VALIDADOS), PRIMEIRO ELSE. IDENTIFICADA NECESSIDADE DE SWITCH CASE - Entrou no if do !multiblocks FPosition -1
  //TESTELOTE9 = OK, ALTERAÇÃO DE CÓDIGO(ANTERIORES VALIDADOS). -Entrou no terceiro cenário
  //TESTELOTE10 = OK SEM ALTERAÇÕES DE CODIGO-Entrou no F: do primeiro cenário
  //TESTELOTE11 = PARCIALMENTE TESTADO. BLOCOS ESTRANHOS. REVISAR <<<<<<<<<<<<<
  //TESTELOTE12 = OK SEM ALTERAÇÕES DE CODIGO - Entrou no if do !multiblocks FPosition -1
  //TESTELOTE13 = OK SEM ALTERAÇÕES DE CODIGO - Entrou no if do !multiblocks FPosition -1 && Entrou no terceiro cenário
  //TESTELOTE14 = OK, ALTERAÇÃO DE CÓDIGO(ANTERIORES VALIDADOS), - Entrou no cneário 0
  //TESTELOTE15 = OK SEM ALTERAÇÕES DE CODIGO - Entrou no primeiro cenário && entrou no F: do primeiro cenário
  //TESTELOTE16 = OK SEM ALTERAÇÕES DE CODIGO - Entrou no F: do primeiro cenário
  //TESTELOTE17 = OK SEM ALTERAÇÕES DE CODIGO - Entrou no if do !multiblocks FPosition -1 && Entrou no terceiro cenário
  //TESTELOTE18 = OK SEM ALTERAÇÕES DE CODIGO - Entrou no terceiro cenário

  return (
    <Container>
      <InnerContainer>
        <CamButton onPress={takePhotoFromCamera}>
          <Header>Abrir Câmera</Header>
        </CamButton>
        <LoteView>
          {lote.length > 1 && (
            <View>
              <Header>Lote:</Header>
              <DataContainer>
                <Data
                  value={lote}
                  multiline={true}
                  onChangeText={(text: React.SetStateAction<string>) => {
                    setLote(text);
                  }}
                  blurOnSubmit={true}></Data>
              </DataContainer>
              <TouchableOpacity
                onPress={() => {
                  wipeData();
                }}>
                <Clear>Limpar</Clear>
              </TouchableOpacity>
            </View>
          )}
        </LoteView>
      </InnerContainer>
      {modalBlocksVis && (
        <ModalBlocks>
          <View style={{marginRight: '5%', alignItems: 'flex-end'}}>
            <Text
              style={{fontSize: 20}}
              onPress={() => {
                setModalBlocksVis(false);
              }}>
              X
            </Text>
          </View>
          <Label> Número de blocos= {blocksAmount}</Label>
          <Label>Selecione o campo que contém o lote:</Label>

          <FlatList
            renderItem={({item}) => renderBloco(item)}
            data={blocks}
            keyExtractor={item => item}
            showsVerticalScrollIndicator={true}
          />
        </ModalBlocks>
      )}
      {OCRLoading && <Loading size="large" color="#36c0f7"></Loading>}
    </Container>
  );
}
