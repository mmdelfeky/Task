import React from 'react';
import {AppIcon, AppText, AppView} from '../../common';
import {pop} from '../../common/Navigation';
import {boldStyle} from '../../utils/styles';

const Header = ({navigation}) => {
  return (
    <AppView stretch row spaceBetween>
      <AppText style={boldStyle} color="foreground" size={6}>
        Filters
      </AppText>
      <AppIcon
        onPress={() => pop(navigation)}
        name="close"
        type="ant"
        color="foreground"
        size={10}
      />
    </AppView>
  );
};

export default Header;
