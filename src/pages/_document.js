import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const setInitialTheme = `
    (function() {
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light';
      }
      document.documentElement.setAttribute('data-theme', getUserPreference());
    })();
  `;

  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
