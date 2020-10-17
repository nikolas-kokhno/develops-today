import React from 'react';
import { useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { wrapper } from '../store/store';
import { getPostsList } from '../store/actions/posts';

const MyApp = (props:any) => {
  const { Component, pageProps } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsList());
}, []);

  return (
      <Component {...pageProps} />
  );
};

export default wrapper.withRedux(MyApp);