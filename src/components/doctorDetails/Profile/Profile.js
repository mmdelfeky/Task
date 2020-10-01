import React from 'react';
import {AppText, AppView} from '../../../common';
import {boldStyle} from '../../../utils/styles';
import Certificates from './Certificates';

const Profile = ({data}) => {
  return (
    <AppView stretch margin={5}>
      <AppText marginVertical={5} size={7} color="grey" style={boldStyle}>
        Certificates
      </AppText>
      <Certificates {...{data}} />
    </AppView>
  );
};

export default Profile;
