// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Paste the font link here */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Helvetica+Neue:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
