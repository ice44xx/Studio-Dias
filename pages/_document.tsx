import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta http-equiv='Content-Language' content='pt-BR' />
          <meta property='og:title' content='Studio Emily Dias' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://studioemilydias.com/' />
          <meta property='og:site_name' content='Studio Emily Dias' />
          <meta name='robots' content='index' />
          <meta name='keywords' content='lash Lifting,extensão de cilios,brow lamination,design de sobrancelhas,sobrancelhas,sobrancelhas canoas' />
          <meta
            name='description'
            content='Sou designer de Sobrancelhas e inaugurei meu Studio, fazendo somente designer de sobrancelhas hoje em dia temos diversos procedimentos como lash lifting, brow lamination e extensões de cílios.'
          />
          <meta name='google-site-verification' content='mMvRPaOnLKeSMC14m_wRbcN3xTkBsRfv4nheepivZEM' />
          <link rel='shortcut icon' href='/assets/logo-min.png' />
          <link href='https://fonts.googleapis.com/css2?family=Allura&family=Montserrat:wght@100;300;400;500&display=swap' rel='stylesheet' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
            integrity='sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
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
