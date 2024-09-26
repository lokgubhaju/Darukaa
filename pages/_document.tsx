import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* HTML Meta Tags */}
        <meta name="description" content="" />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.darukaa.earth" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Darukaa Earth | Home" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/cf1a3e4f-a126-49b0-a4c2-0684e4fbd4ed.png?token=ahb95d2qm2Ha1YVqnFlcJU6FFZ3ziPeAYLJR1ibx0fE&height=480&width=852&expires=33263307438"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="darukaa.earth" />
        <meta property="twitter:url" content="https://www.darukaa.earth" />
        <meta name="twitter:title" content="Darukaa Earth | Home" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/cf1a3e4f-a126-49b0-a4c2-0684e4fbd4ed.png?token=ahb95d2qm2Ha1YVqnFlcJU6FFZ3ziPeAYLJR1ibx0fE&height=480&width=852&expires=33263307438"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
