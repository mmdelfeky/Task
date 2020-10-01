import React from 'react';
import {AppIcon, AppText, AppView} from '../common';

const Help = () => {
  return (
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
  );
};

export default Help;
