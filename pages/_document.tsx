import Document, { Head, Html, Main, NextScript } from "next/document";
import { Hocuspocus } from "@hocuspocus/server";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <link href="/favicon.svg" type="image/svg+xml" rel="icon" />
        </Head>
        <body>
          <Main />
          <div id="modal-container" />
          <NextScript />
          <span
            id="acknowledgements"
            dangerouslySetInnerHTML={{
              __html: `<!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->`,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
