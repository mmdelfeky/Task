import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store/store';
import {TabsNavigation} from './src/screens';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabsNavigation />
      </NavigationContainer>
    </Provider>
  );
}
