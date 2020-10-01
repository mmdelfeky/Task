import {DoctorsApi} from '../api';
export default class Doctors {
  constructor() {
    this.doctorsApi = new DoctorsApi();
  }

  getItems = async () => {
    let data = true;
    try {
      data = await this.doctorsApi.getItems();
    } catch (error) {
      alert(error.msg);
      data = false;
    } finally {
      return data;
    }
  };
  getDoctorProfile = async (permaLink) => {
    let data = true;
    try {
      data = await this.doctorsApi.getDoctorProfile(permaLink);
    } catch (error) {
      alert(error.msg);
      data = false;
    } finally {
      return data;
    }
  };
}
