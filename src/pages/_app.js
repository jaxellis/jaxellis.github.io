import { ThemeProvider } from '../context/ThemeContext';
import '../styles/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
