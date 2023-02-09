import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const MainNav: FC = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default MainNav;
