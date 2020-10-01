import React from 'react';
import {AppStarRating, AppView} from '../../../common';
import DoctorFees from './DoctorFees';
import DoctorName from './DoctorName';
import DoctorRating from './DoctorRating';
import DoctorSpeciality from './DoctorSpeciality';

const DoctorData = ({data}) => {
  return (
    <AppView stretch marginHorizontal={5}>
      <DoctorName {...{data}} width={70} />
      <DoctorSpeciality {...{data}} width={50} />
      <DoctorRating {...{data}} />
    </AppView>
  );
};

export default DoctorData;
