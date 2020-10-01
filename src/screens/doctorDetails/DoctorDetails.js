import React, {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {AppScrollView, AppView} from '../../common';
import {LoadingView, useFetch} from '../../components';
import BasicData from '../../components/doctorDetails/basicData/BasicData';
import Profile from '../../components/doctorDetails/Profile/Profile';
import Header from '../../components/Header';
import {DoctorsRepo} from '../../repo';
const doctrosRepo = new DoctorsRepo();
const DoctorDetails = ({
  navigation,
  route: {
    params: {permaLink},
  },
}) => {
  const getDoctorProfile = useCallback(() => {
    return doctrosRepo.getDoctorProfile(permaLink);
  }, [permaLink]);

  const {isLoading, data} = useFetch(getDoctorProfile);

  if (isLoading) {
    return <LoadingView />;
  }
  if (!data) {
    return <AppView />;
  }
  console.log(data);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Header {...{navigation}} />
      <AppScrollView flex stretch>
        <BasicData {...{data}} />
        <Profile data={data.oldProfile} />
      </AppScrollView>
    </>
  );
};

export default DoctorDetails;
