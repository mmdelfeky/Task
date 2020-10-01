import React from 'react';
import {AppIcon, AppText, AppView} from '../../../common';
import {getTranslatedValue} from '../../../utils/List';

const Certificates = ({data}) => {
  const certificates = data ? getTranslatedValue(data, 'certif') : [];
  return (
    <AppView stretch row>
      <AppView stretch center backgroundColor="white" width={20}>
        <AppIcon
          color="foreground"
          size={15}
          name="university"
          type="font-awesome"
        />
      </AppView>
      <AppView stretch marginHorizontal={3} width={75}>
        {certificates[0] && <AppText size={5}>{certificates[0]}</AppText>}
        {certificates[1] && (
          <AppText size={5} marginVertical={2} color="grey">
            {certificates[1]}
          </AppText>
        )}
        {certificates[1] && (
          <AppText size={5} color="foreground">
            {certificates[1]}
          </AppText>
        )}
      </AppView>
    </AppView>
  );
};

export default Certificates;
