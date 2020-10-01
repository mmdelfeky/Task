const {createStackNavigator} = require('@react-navigation/stack');
const {default: DoctorDetails} = require('./doctorDetails/DoctorDetails');
const {default: Doctors} = require('./doctors/Doctors');
const TabNavigator = createBottomTabNavigator();
import Tab from './tab/Tab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AppIcon} from '../common';
import Filteration from './filteration/Filteration';
const Stack = createStackNavigator();
export const DoctorsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DocotrsList" component={Doctors} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
      <Stack.Screen name="Filteration" component={Filteration} />
    </Stack.Navigator>
  );
};
const getTabOptions = (name, type, label) => ({
  tabBarLabel: label,
  tabBarIcon: ({color, size}) => (
    <AppIcon {...{name}} {...{type}} {...{color}} />
  ),
});
export const TabsNavigation = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen
        name="Doctors"
        component={DoctorsStack}
        options={getTabOptions(
          'account-group-outline',
          'material-community',
          'Therapists',
        )}
      />
      <TabNavigator.Screen
        name={'Tab 1'}
        component={Tab}
        options={getTabOptions('calendar', 'ant', 'Bookings')}
      />
      <TabNavigator.Screen
        name={'Tab 2'}
        component={Tab}
        options={getTabOptions('blog', 'font-awesome5', 'Blogs')}
      />
      <TabNavigator.Screen
        name={'Tab 3'}
        component={Tab}
        options={getTabOptions('more-horizontal', 'feather', 'More')}
      />
    </TabNavigator.Navigator>
  );
};
