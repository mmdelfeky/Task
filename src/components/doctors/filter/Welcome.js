import React from 'react';
import {StyleSheet} from 'react-native';
import {AppIcon, AppText, AppView} from '../../../common';
import {boldStyle} from '../../../utils/styles';

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
      <AppView row>
        <AppIcon
          marginHorizontal={2}
          color="grey"
          size={10}
          name="info-with-circle"
          type="entypo"
        />
        <AppText color="grey">Help</AppText>
      </AppView>
    </AppView>
  );
};

export default Welcome;
