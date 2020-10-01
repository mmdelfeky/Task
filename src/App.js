import {Navigation} from 'react-native-navigation';
import regterScreens from './screens';
import {AppNavigation} from './common';
import appLaunchConfig from './utils/AppLaunchConfig';
export default () => {
  //appLaunch
  Navigation.events().registerAppLaunchedListener(async () => {
    //default app config

    //navigation config
    AppNavigation.setNavigationDefaultOptions();

    //screens
    regterScreens();
    await appLaunchConfig();

    AppNavigation.navigateToHome();
  });
};
