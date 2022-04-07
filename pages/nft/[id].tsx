import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Css from '../../components/Layut/Css'
import Script from 'next/script'
import Link from 'next/link'
import { useAddress, useDisconnect, useMetamask ,useNFTDrop } from "@thirdweb-dev/react";



function NFTDrop() {

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
      <body data-bg-img="/assets/img/bg/page-bg.png">
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
        <> <br />
  <section className="pt-120 pb-120">
    <div className="container">
      <div className="row justify-content-between">
      <br />
        <div className="col-lg-6 order-1 order-lg-0">
          
          <div className="item-details ov-hidden">
            <h2 className="product-title">Animal Girl Painting</h2>
            <div className="favorites">
              <h6 className="available">Available 12</h6>
              <div className="love-react-wrap d-flex align-items-center">
                <div className="love-react style--two" />
                <div className="love-count">13.6k</div>
              </div>
            </div>
            <p>
              Anefty, a one-of-a-kind trading card is an NFTs – you can't just
              replace it with any others card. If you these different from
              fungible items, which are often the same as each othes you have
              something. differ from fungible item{" "}
              <a href="#" className="read-more c1">
                read more...
              </a>
            </p>
            <div className="row pt-1">
              <div className="col-sm-6">
                <div className="price mb-4 mb-sm-0">
                  <h6>Item Price</h6>
                  <h3>1.69 ETH</h3>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="countdown-wrapper">
                  <h6>Countdown</h6>
                  <ul className="countdown">
                    <li>
                      <h3 className="hours">00</h3>
                    </li>
                    <li className="ms-1 me-1">:</li>
                    <li>
                      <h3 className="minutes">00</h3>
                    </li>
                    <li className="ms-1 me-1">:</li>
                    <li>
                      <h3 className="seconds">00</h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mb-4 mt-30 pt-2">
              <div className="col-sm-6">
                <div className="item-quantity mb-4 mb-sm-0">
                  <h6>Item Quantity</h6>
                  <div className="quantity d-flex align-items-center justify-content-between">
                    <h6 className="mb-0">Quantity of</h6>
                    <div>
                      <input
                        type="text"
                        className="input-text qty text"
                        defaultValue={1}
                      />{" "}
                      <span className="plus">
                        <i className="fa fa-caret-up" />{" "}
                      </span>
                      <span className="minus">
                        <i className="fa fa-caret-down" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item-price">
                  <h6>Item Price</h6>
                  <div className="item-price-inner align-items-center d-flex justify-content-between">
                    <h6 className="mb-0">Amount</h6>
                    <h6 className="mb-0">1.69 ETH</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-group style--two">
              <a href="item-details.html" className="btn btn-border btn-sm">
                <img
                  src="/assets/img/icons/btn-buy-now-icon.svg"
                  alt=""
                  className="svg"
                />{" "}
                Buy Now
              </a>
              <a href="item-details.html" className="btn btn-sm">
                <img
                  src="/assets/img/icons/judge-icon.svg"
                  alt=""
                  className="svg"
                />{" "}
                Place Bid
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 order-0 order-lg-1">
          <div className="item-details-img mb-5 mb-lg-0">
          <br />
            <img src="/assets/img/media/item-details.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</>

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







      <Script src="//assets/js/jquery.min.js"></Script>
      <Script src="//assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="//assets/plugins/particles/particles.min.js"></Script>
      <Script src="//assets/js/menu.min.js"></Script>
      <Script src="//assets/plugins/swiper/swiper-bundle.min.js"></Script>
      <Script src="//assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></Script>
      <Script src="//assets/plugins/countdown/countdown.min.js"></Script>
      <Script src="//assets/plugins/nice-select/jquery.nice-select.min.js"></Script>
      <Script src="//assets/plugins/Isotope/isotope.pkgd.js"></Script>
      <Script src="//assets/plugins/counterup/waypoints.min.js"></Script>
      <Script src="//assets/plugins/counterup/jquery.counterup.min.js"></Script>
      <Script src="//assets/js/main.js"></Script>
      <Script src="//assets/js/custom.js"></Script>
      </body>


     
</>
)
}

export default NFTDrop