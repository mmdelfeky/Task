import React from 'react';
import {AppText, AppView} from '../../../common';

const OnlineStatus = ({status}) => {
  return (
    <AppView row>
      <AppView
        circleRadius={3}
        backgroundColor={status === 'online' ? 'thirdly' : 'danger'}
      />
      <AppText marginHorizontal={2} color="primary">
        {status}
      </AppText>
    </AppView>
  );
};

export default OnlineStatus;
