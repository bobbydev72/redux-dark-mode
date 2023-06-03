import type { AppProps } from 'next/app';
import { store } from '../redux';
import { Provider, useSelector } from 'react-redux';
import { themeSelector } from '../redux/theme/selectors';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
