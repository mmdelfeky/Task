import React, {useState} from 'react';
import {AppList, AppView} from '../../common';
import DoctorCard from '../../components/doctors/doctorCard/DoctorCard';
import {getResponseTransformed} from '../../utils/List';
import Filter from '../../components/doctors/filter/Filter';
import {StatusBar} from 'react-native';
import colors from '../../common/defaults/colors';
import FilterBtn from '../../components/doctors/FilterBtn';
import {useSelector} from 'react-redux';
const Doctors = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  const gender = useSelector((state) => state.filters.gender);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      <Filter {...{keyword}} {...{setKeyword}} />
      <AppView flex stretch backgroundColor="#ECEFF063">
        <AppList
          apiRequest={{
            url: `https://api-aws.shezlong.com/client/listTherapists?therapistName=${keyword}&gender=${gender}`,

            responseResolver: getResponseTransformed,
          }}
          rowRenderer={(listData) => {
            return <DoctorCard {...{navigation}} data={listData} />;
          }}
        />
      </AppView>
      <FilterBtn {...{navigation}} />
    </>
  );
};

export default Doctors;
