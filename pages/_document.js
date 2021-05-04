import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

import theme from '../styles/theme'
const { font } = theme;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* <link
            rel="preload"
            as="style"
            href={font.importUrl}
          /> */}
          {/* <link
            rel="stylesheet"
            href={fonts.importUrl}
            media="print"
            onLoad="this.media='all'" // This isn't working :/
          />
          <noscript> */}
            <link
              rel="stylesheet"
              href={font.importUrl}
            />
          {/* </noscript> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument