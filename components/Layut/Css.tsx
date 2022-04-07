import Head from 'next/head'
import React from 'react'
import script from 'next/script'
function Css() {
  return (
    <div>
         <Head>
     {/* css */}
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <link rel="shortcut icon" href="favicon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/assets/css/all.min.css" />
          <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/plugins/swiper/swiper-bundle.min.css" />
          <link
            rel="stylesheet"
            href="/assets/plugins/magnific-popup/magnific-popup.css"
          />
          <link rel="stylesheet" href="/assets/plugins/nice-select/nice-select.css" />

          <link rel="stylesheet" href="/assets/css/style.css" />
          <link rel="stylesheet" href="/assets/css/custom.css" />
      </Head>
    </div>
  )
}

export default Css