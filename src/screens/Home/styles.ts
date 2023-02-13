import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  background-color: #a4e6bb;
  flex: 1;
  padding: 10px;
`;

export const InnerContainer = styled(View)`
  justify-content: space-evenly;
  flex: 1;
`;
//bugado aqui v
export const DataContainer = styled(View)`
  justify-content: center;
  flex: 1;
  background-color: #fff;
  border-color: white;
  border-width: 1px;
`;

export const LoteView = styled(View)`
  justify-content: space-around;
`;

export const Data = styled(TextInput)`
  color: '#000';
  font-size: 50px;
  align-self: center;
`;

export const CamButton = styled(TouchableOpacity)`
  border-radius: 15px;
  background-color: #ffffff;
  width: 60%;
  height: 10%;
  align-self: center;
  justify-content: center;
`;

export const Clear = styled(Text)`
  color: #8d8c8c;
  font-size: 20px;
  align-self: center;
`;

export const Header = styled(Text)`
  font-size: 20px;
  align-self: center;
  font-weight: bold;
  color: '#8d8c8c';
`;

export const Label = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export const BlockCard = styled(View)`
  padding: 15px;
  border-bottom-width: 1px;
  z-index: 1;
`;

export const ModalBlocks = styled(View)`
  z-index: 1;
  background-color: '#fff';
  position: absolute;
  align-self: center;
  top: 20px;
  padding: 5px;
  width: 95%;
  display: flex;
  height: 90%;
`;

export const Loading = styled(ActivityIndicator)`
  position: absolute;
  margin-top: 70%;
  z-index: 1;
  align-self: center;
`;
