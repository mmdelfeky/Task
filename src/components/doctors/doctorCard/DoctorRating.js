import React from 'react';
import {StyleSheet} from 'react-native';
import {AppStarRating, AppText, AppView} from '../../../common';
import {boldStyle} from '../../../utils/styles';

const DoctorRating = ({data}) => {
  return (
    <AppView stretch row spaceBetween>
      <AppView row center>
        <AppStarRating marginBottom={2} size={5} rate={data.rating} />
        <AppText
          color="grey"
          marginHorizontal={1}>{`(${data.reviewsCount} Rev)`}</AppText>
      </AppView>
      <AppView row>
        <AppText marginHorizontal={1} style={boldStyle}>
          {data.finishedSessionsCount}
        </AppText>
        <AppText color="grey">Sessions</AppText>
      </AppView>
    </AppView>
  );
};

export default DoctorRating;
