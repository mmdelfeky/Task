import React, {useCallback} from 'react';
import {AppImage, AppView, TouchableView} from '../../../common';
import DoctorData from './DoctorData';

import {push} from '../../../common/Navigation';
import DoctorFees from './DoctorFees';
const DoctorCard = ({data, navigation}) => {
  const pushDetails = useCallback(() => {
    push(navigation, 'DoctorDetails', {permaLink: data.permaLink});
  }, [navigation, data]);
  return (
    <TouchableView
      onPress={pushDetails}
      padding={5}
      stretch
      marginHorizontal={5}
      marginVertical={2.5}
      elevation={2}
      borderRadius={10}>
      <AppView row flex stretch>
        <AppImage
          borderColor="thirdly"
          borderWidth={2}
          circleRadius={15}
          source={{uri: data.profilePicFile}}
        />
        <DoctorData {...{data}} />
      </AppView>
      <DoctorFees {...{data}} />
    </TouchableView>
  );
};

export default DoctorCard;
