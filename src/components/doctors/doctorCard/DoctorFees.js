import React, {useMemo} from 'react';
import {AppButton, AppIcon, AppText, AppView} from '../../../common';
import {getTranslatedValue} from '../../../utils/List';
const FeeItem = ({value, currency, ...rest}) => {
  return (
    <AppView row {...rest}>
      <AppIcon size={10} color="thirdly" name="dollar-bill" type="foundation" />
      <AppText marginHorizontal={1} color="grey">
        {value}
      </AppText>
      <AppText color="grey">{currency}</AppText>
    </AppView>
  );
};
const DoctorFees = ({data}) => {
  const currency = useMemo(() => getTranslatedValue(data, 'currency'), [data]);
  return (
    <AppView marginVertical={3} stretch spaceBetween row>
      <FeeItem value={data.fees.video60} {...{currency}} />
      <AppButton
        width={50}
        size={6}
        height={4}
        borderRadius={3}
        title="Book Now"
      />
    </AppView>
  );
};

export default DoctorFees;
