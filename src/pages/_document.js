import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const metaData = {
  description: "Your site description",
  site_name: "SiteName",
  title: "SiteName",
  creator: "ZaHuPro@GitHub.com",
  app_url: "https://www.website.com",
  "image-1200x630": "https://www.website.com/image/1200x630.png",
  "image-600x314": "https://www.website.com/image/600x314.png",
  "image-180x110": "https://www.website.com/image/180x110.png",
};
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content={metaData.description} />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={metaData.title} />
          <meta
            name="og:description"
            property="og:description"
            content={metaData.description}
          />
          <meta property="og:site_name" content={metaData.site_name} />
          <meta property="og:url" content={metaData.app_url} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={metaData.title} />
          <meta name="twitter:description" content={metaData.description} />
          <meta name="twitter:site" content={metaData.site_name} />
          <meta name="twitter:creator" content={metaData.creator} />
          <meta property="og:image" content={metaData["image-1200x630"]} />
          <meta name="twitter:image" content={metaData["image-1200x630"]} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image" content={metaData["image-600x314"]} />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="314" />
          <meta property="og:image" content={metaData["image-180x110"]} />
          <meta property="og:image:width" content="180" />
          <meta property="og:image:height" content="110" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
          {/* {this.props.styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
