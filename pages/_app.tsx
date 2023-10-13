import React from 'react';
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
