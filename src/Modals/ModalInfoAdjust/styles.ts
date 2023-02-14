import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  background-color: 'white';
  position: absolute;
  align-self: center;
  top: 50px;
  width: 80%;
  border-radius: 10px;
`;

export const InfoAdjHeader = styled(Text)`
  position: absolute;
  margin-top: 8%;
  font-size: 16;
  margin-left: 4%;
  margin-right: 4%auto;
  color: #09035c;
  margin-bottom: 4%;
`;

export const InnerContainer = styled(View)`
  margin-right: 4%;
  align-items: flex-end;
  margin-top: 2%;
`;

export const AdjustInput = styled(TextInput)`
  margin-top: 8%;
  margin-bottom: 4%;
  font-size: 18px;
  color: #09035c;
  align-self: center;
  background-color: #aeaeb1;
  padding-left: 5%;
  padding-right: 5%;
  border-width: 1px;
  border-color: #09035c;
  border-style: dashed;
`;

export const AdjustButton = styled(TouchableOpacity)`
  align-self: center;
  border-width: 1px;
  border-color: #09035c;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 2%;
`;

export const AdjustButtonText = styled(Text)`
  font-size: 16px;
  color: #09035c;
`;
