import React, {useCallback} from 'react';

import {AppView, AppButton, AppIcon} from '../common';
import {pop} from '../common/Navigation';
import {APPBAR_HEIGHT} from '../common/utils/responsiveDimensions';
import Help from './Help';

const Header = ({navigation, title, rightItems}) => {
  const goBack = useCallback(() => {
    pop(navigation);
  }, [navigation]);

  const renderRight = () => {
    return (
      <AppView flex={2} center stretch>
        <Help />
      </AppView>
    );
  };

  const renderLeft = () => {
    return (
      <AppButton transparent flex onPress={goBack}>
        <AppIcon color="grey" flip name="md-arrow-back" type="ion" size={12} />
      </AppButton>
    );
  };

  const renderCenter = () => {
    return <AppView center flex={6} />;
  };
  return (
    <AppView
      center
      backgroundColor="white"
      stretch
      style={{
        height: APPBAR_HEIGHT,
      }}
      row
      spaceBetween>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </AppView>
  );
};

export default Header;
