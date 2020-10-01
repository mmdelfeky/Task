import React, {useCallback, useContext, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SET_GENDER} from '../../actions/types';
import {AppButton, AppIcon, AppText, AppView} from '../../common';
import {DoctorFilterContext} from '../../contexts/DoctorsContext';
const FilterBtn = ({isSelected, onPress, title}) => {
  return (
    <AppButton
      {...{onPress}}
      backgroundColor={isSelected ? 'primary' : 'lightgrey'}
      width={20}
      margin={2}
      height={(4, 5)}
      borderRadius={20}
      color={isSelected ? 'white' : 'grey'}
      title={title}
    />
  );
};
const Gender = () => {
  const gender = useSelector((state) => state.filters.gender);
  const dispatch = useDispatch();
  const [selected, setselected] = useState(gender);
  const onPressMale = useCallback(() => {
    const newVal = selected === 'male' ? '' : 'male';
    setselected(newVal);
    dispatch({
      type: SET_GENDER,
      payload: newVal,
    });
  }, [selected, dispatch]);
  const onPressFeMale = useCallback(() => {
    const newVal = selected === 'female' ? '' : 'female';
    dispatch({
      type: SET_GENDER,
      payload: newVal,
    });
    setselected(newVal);
  }, [selected, dispatch]);
  return (
    <AppView marginTop={25} stretch>
      <AppView row>
        <AppIcon color="primary" name="transgender" type="font-awesome" />
        <AppText color="primary">Gender</AppText>
      </AppView>

      <AppView stretch row>
        <FilterBtn
          isSelected={selected === 'male'}
          onPress={onPressMale}
          title="Male"
        />
        <FilterBtn
          isSelected={selected === 'female'}
          onPress={onPressFeMale}
          title="Female"
        />
      </AppView>
    </AppView>
  );
};

export default Gender;
