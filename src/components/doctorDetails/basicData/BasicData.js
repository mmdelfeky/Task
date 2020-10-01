import React from 'react';
import {AppImage, AppView} from '../../../common';
import DoctorName from '../../doctors/doctorCard/DoctorName';
import DoctorSpeciality from '../../doctors/doctorCard/DoctorSpeciality';
import Fees from './Fees';
import OnlineStatus from './OnlineStatus';

const BasicData = ({data: {basics}}) => {
  return (
    <AppView
      elevation={1}
      marginBottom={5}
      padding={5}
      backgroundColor="white"
      stretch>
      <AppView stretch centerX>
        <AppImage
          marginTop={5}
          borderWidth={2}
          borderColor="thirdly"
          circleRadius={30}
          source={{uri: basics.profilePicFile}}
        />
        <DoctorName
          marginVertical={3}
          marginLeft={10}
          data={basics}
          bold={false}
          size={5}
        />
        <OnlineStatus status={basics.userStatus} />
      </AppView>
      <DoctorSpeciality data={basics} />
      <Fees data={basics} />
    </AppView>
  );
};

export default BasicData;
