import { Provider } from 'react-redux';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark">
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
