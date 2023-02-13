import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #a4e6bb;
`;

export const HeaderView = styled(View)`
  width: 90%;
  background-color: #ffffff;
  margin-top: 10%;
  height: 10%;
  justify-content: center;
  border-radius: 5px;
`;
export const HeaderText = styled(Text)`
  font-size: 35px;
  color: #1bcc91;
  align-self: center;
  font-weight: bold;
`;

export const Intro = styled(Text)`
  font-size: 20px;
  color: #ffffff;
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #ffffff;
  margin-top: 15%;
  padding: 15px;
  border-radius: 35px;
  padding-left: 20%;
  padding-right: 20%;
`;

export const ButtonText = styled(Text)`
  font-size: 25px;
  color: #1bcc91;
  align-self: center;
  font-weight: bold;
`;
