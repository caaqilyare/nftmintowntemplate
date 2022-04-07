import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Css from '../components/Layut/Css'
import Script from 'next/script'
import Link from 'next/link'
import { useAddress, useDisconnect, useMetamask ,useNFTDrop } from "@thirdweb-dev/react";

const Home: NextPage = () => {
    // Auth token
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();
  return (
      <>
      <Css />
      <Head>
            <title>Mint NFT</title>
        </Head>
        <body data-bg-img="assets/img/bg/page-bg.png">
        <header className="header">
            <div className="header-main love-sticky">
              <div className="container">
                <div className="header-inner position-relative">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-9 col-6">
                      <div className="d-flex align-items-center">  <Link href="/">
                        <div className="logo">
                       
                            <img src="/assets/img/logo-svg.png" className="main-logo" alt="" />{" "}
                          
                        </div></Link>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-3 col-6 d-flex align-items-center justify-content-end position-static">
                      <div className="nav-wrapper d-flex align-items-center">
                        <div className="nav-wrap-inner">
                        {address && (
                            <p className='text-center text-sm text-amber-600'>
                            You're logged in with wallet {address.substring(0,5)}.... {address.substring(address.length - 5)}
                            </p>
                            )} 
                        </div>
                        {address ? 
                        <div onClick={() => (address ? disconnect() : connectWithMetamask())} className="d-none d-md-flex align-items-center ms-4">
                        <button className="btn">
                          {" "}
                          Sign out
                        </button>
                        </div>
                       : 
                       <div onClick={() => (address ? disconnect() : connectWithMetamask())} className="d-none d-md-flex align-items-center ms-4">
                        <button className="btn">
                          {" "}
                          Connect Metamask
                        </button>
                     </div> 
                      }
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </header>
        <div className="banner ov-hidden">
          <div id="particles" data-bg-img="assets/img/bg/banner-bg.png" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-content text-white mt-xl-5 pt-xl-2 mb-5 mb-lg-0">
                  <h1>
                    Digital Collection &amp; Mint on <span>NFTs</span> Marketplace
                  </h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-img mb-60 mb-lg-0">
                  <img src="assets/img/media/banner-img.png" alt="" />
                  <div className="banner-img-content">
                    <h2>Do a Portrait Painting Artwork!</h2>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pt-120 pb-120">
            <div className="container">
              <div className="row">
                <Link href="/nft/mintnft">  
                <div className="col-lg-4 col-md-6">
                  <div className="single-product mb-30">
                    <img src="assets/img/product/product4.png" alt="" />
                    <div className="product-content">
                      <div className="product-top">
                        <h5>Colorful Abstract Painting</h5>
                        <div className="d-flex justify-content-between">
                          <h6>Tales of Tsuki is a collection of 9,999 beautiful, brave Waifus and their </h6>
                          <h6>Tsuki #8279</h6>
                        </div>
                      </div>
                      <div className="product-bottom">
                        <div className="button-group">
                          <a href="#" className="btn btn-border wallet-react btn-sm">
                            View more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content text-center text-white">
                      © 2022 - <span className="currentYear"></span>{" "}
                      <a className="text-white">
                        Munasar Abuukar
                      </a>{" "}
                      Networks, Inc. All Right Reserved.
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </footer>







        <Script src="assets/js/jquery.min.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/plugins/particles/particles.min.js"></Script>
        <Script src="assets/js/menu.min.js"></Script>
        <Script src="assets/plugins/swiper/swiper-bundle.min.js"></Script>
        <Script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></Script>
        <Script src="assets/plugins/countdown/countdown.min.js"></Script>
        <Script src="assets/plugins/nice-select/jquery.nice-select.min.js"></Script>
        <Script src="assets/plugins/Isotope/isotope.pkgd.js"></Script>
        <Script src="assets/plugins/counterup/waypoints.min.js"></Script>
        <Script src="assets/plugins/counterup/jquery.counterup.min.js"></Script>
        <Script src="assets/js/main.js"></Script>
        <Script src="assets/js/custom.js"></Script>
        </body>


       
</>
  )
}

export default Home
