import React from 'react';
import {StyleSheet} from 'react-native';
import {AppText, AppView} from '../../../common';
import {getTranslatedValue} from '../../../utils/List';
import {boldStyle} from '../../../utils/styles';

const DoctorName = ({data, size, bold, ...rest}) => {
  return (
    <AppView {...rest}>
      <AppText
        color="foreground"
        style={bold ? boldStyle : {}}
        size={size || 6}>
        {getTranslatedValue(data, 'name')}
      </AppText>
    </AppView>
  );
};

DoctorName.defaultProps = {
  bold: true,
};

const styles = StyleSheet.create({
  name: {fontWeight: 'bold'},
});
export default DoctorName;
