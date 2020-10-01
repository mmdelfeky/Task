import axios from 'axios';
import {ApiErrorException, ApiErrorTypes} from './utils/errors';
export default class Doctors {
  getItems = async () => {
    try {
      const res = await axios.get(
        'https://www.postman.com/collections/daf922abad6513926745',
      );
      return res.data.item;
    } catch (error) {
      console.log('getItems  error', error.response);
      if (error.response) {
        throw new ApiErrorException(
          ApiErrorTypes.GENERAL_ERROR,
          error.response.data.message,
        );
      } else {
        throw new ApiErrorException(
          ApiErrorTypes.CONNECTION_ERROR,
          'ui-networkConnectionError',
        );
      }
    }
  };

  getDoctorProfile = async (permaLink) => {
    try {
      const res = await axios.get(
        `https://api-aws.shezlong.com/client/therapistProfile/${permaLink}`,
      );

      return res.data.data;
    } catch (error) {
      console.log('getDoctorProfile  error', error.response);
      if (error.response) {
        throw new ApiErrorException(
          ApiErrorTypes.GENERAL_ERROR,
          error.response.data.message,
        );
      } else {
        throw new ApiErrorException(
          ApiErrorTypes.CONNECTION_ERROR,
          'ui-networkConnectionError',
        );
      }
    }
  };
}
