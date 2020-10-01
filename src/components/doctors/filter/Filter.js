import React, {useCallback, useRef} from 'react';
import {AppIcon, AppInput, AppView, TouchableView} from '../../../common';
import Welcome from './Welcome';
const Filter = ({setKeyword, keyword}) => {
  const inputRef = useRef();
  const text = useRef('');
  const onChange = useCallback((val) => {
    text.current = val;
  }, []);

  const onSubmitEditing = useCallback(
    (val) => {
      setKeyword(val);
    },
    [setKeyword],
  );
  return (
    <AppView
      marginBottom={10}
      borderBottomRightRadius={30}
      borderBottomLeftRadius={30}
      stretch
      backgroundColor="primary">
      <Welcome />
      <AppView marginVertical={-5} stretch row spaceBetween>
        <AppInput
          placeholder="Search therapist by name name"
          placeholderColor="grey"
          flex
          stretch
          elevation={2}
          borderWidth={0}
          backgroundColor="white"
          marginHorizontal={5}
          returnKeyType="search"
          onChange={onChange}
          ref={inputRef}
          value={keyword}
          onSubmitEditing={onSubmitEditing}
          leftItems={
            <AppIcon
              onPress={() => {
                onSubmitEditing(text.current);
              }}
              margin={5}
              name="search1"
              type="ant"
              color="grey"
              size={10}
            />
          }
        />
      </AppView>
    </AppView>
  );
};

export default Filter;
