import {useState, useEffect, useCallback} from 'react';

const useModal = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    ref.current = {show, hide};
  }, [hide, ref, show]);
  const show = useCallback(() => {
    setIsVisible(true);
  }, []);
  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);
  const changeState = useCallback((v) => {
    setIsVisible(v);
  }, []);

  return [isVisible, changeState, hide];
};

export default useModal;
