import React, {useMemo} from 'react';
import {AppIcon, AppText, AppView} from '../../../common';
import {getTranslatedValue} from '../../../utils/List';
import FeeItem from './FeeItem';

const Fees = ({data}) => {
  const currency = useMemo(() => getTranslatedValue(data, 'currency'), [data]);
  return (
    <AppView stretch row spaceBetween>
      <AppView>
        <FeeItem
          color="thirdly"
          {...{currency}}
          value={data.fees.video30 + '/30 Min'}
        />
        <FeeItem
          color="foreground"
          {...{currency}}
          value={data.fees.video60 + '/60 Min'}
        />
      </AppView>
      <AppView>
        <AppView row>
          <AppIcon
            color="star"
            size={11}
            marginHorizontal={1}
            name="star"
            type="ant"
          />
          <AppText color="grey">{data.rating}</AppText>
        </AppView>
        <AppText color="grey">{`${data.reviewsCount} Visitors`}</AppText>
      </AppView>
      <AppView row>
        <AppText marginHorizontal={1}>{data.finishedSessionsCount}</AppText>
        <AppText size={5} color="grey">
          Sessions
        </AppText>
      </AppView>
    </AppView>
  );
};

export default Fees;
