import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {
  AppButton,
  AppIcon,
  responsiveHeight,
  responsiveWidth,
} from '../../common';
import {push} from '../../common/Navigation';

const FilterBtn = ({navigation}) => {
  const pushFilteration = useCallback(
    () => push(navigation, 'Filteration', {}),
    [navigation],
  );
  return (
    <AppButton
      onPress={pushFilteration}
      style={styles.container}
      backgroundColor="foreground"
      center
      circleRadius={15}>
      <AppIcon name="filter" type="ant" color="white" size={12} />
    </AppButton>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: responsiveWidth(5),
    bottom: responsiveHeight(2),
  },
});

export default FilterBtn;
