import NextNprogress from 'nextjs-progressbar';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height="5"
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
