import React from 'react';
import {AppIcon, AppText, AppView} from '../../../common';

const FeeItem = ({color, value, currency, ...rest}) => {
  return (
    <AppView row {...rest}>
      <AppIcon size={10} color={color} name="dollar-bill" type="foundation" />
      <AppText marginHorizontal={1} color="grey">
        {value}
      </AppText>
      <AppText color="grey">{currency}</AppText>
    </AppView>
  );
};
export default FeeItem;
