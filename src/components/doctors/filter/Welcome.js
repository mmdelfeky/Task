import React from 'react';
import {StyleSheet} from 'react-native';
import {AppIcon, AppText, AppView} from '../../../common';
import {boldStyle} from '../../../utils/styles';
import Help from '../../Help';

const Welcome = () => {
  return (
    <AppView marginTop={5} padding={5} stretch row spaceBetween>
      <AppView>
        <AppText color="white" size={7} style={boldStyle}>
          Hello, Amr
        </AppText>
        <AppText marginVertical={5} color="grey">
          how are you doing today ?
        </AppText>
      </AppView>
      <Help />
    </AppView>
  );
};

export default Welcome;
