import React from 'react';
import {AppView} from '../../common';
import Gender from '../../components/filteration/Gender';
import Header from '../../components/filteration/Header';

const Filteration = ({navigation}) => {
  return (
    <AppView flex stretch paddingTop={10} paddingHorizontal={5}>
      <Header {...{navigation}} />
      <Gender />
    </AppView>
  );
};

export default Filteration;
