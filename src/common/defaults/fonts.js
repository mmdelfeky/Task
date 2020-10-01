import {Platform} from 'react-native';

export default Platform.OS === 'android'
  ? {
      normal: 'JF-Flat-medium',
      bold: 'JF-Flat-medium',
      boldIsStyle: true,
    }
  : {
      normal: 'JF Flat',
      bold: 'JF Flat',
      boldIsStyle: true,
    };
