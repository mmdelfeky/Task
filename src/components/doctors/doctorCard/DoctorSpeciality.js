import React, {useMemo} from 'react';
import {AppText, AppView} from '../../../common';
import {getTranslatedValue} from '../../../utils/List';

const DoctorSpeciality = ({data, ...rest}) => {
  const mainSpec1 = useMemo(() => {
    return getTranslatedValue(data, 'mainSpec1');
  }, [data]);
  const mainSpec2 = useMemo(() => {
    return getTranslatedValue(data, 'mainSpec2');
  }, [data]);
  const showSpecialized = useMemo(() => {
    return mainSpec1 || mainSpec2;
  }, [mainSpec1, mainSpec2]);
  return (
    <AppView row marginVertical={2} left {...rest}>
      {showSpecialized && <AppText>Specialized in:</AppText>}

      <AppText marginHorizontal={2} color="grey">{`${
        mainSpec1 ? mainSpec1 : ''
      }  ${mainSpec2 ? `and ${mainSpec2}` : ''}`}</AppText>
    </AppView>
  );
};

export default DoctorSpeciality;
