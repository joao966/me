import Provider from 'src/context';
import ThemeProvider from 'src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
