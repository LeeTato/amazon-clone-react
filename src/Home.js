import React from 'react'
import Header from './Header';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="
            NETGEAR Cable Modem CM500 - Compatible with All Cable Providers Including Xfinity by Comcast, Spectrum, Cox | for Cable Plans Up to 300 Mbps | DOCSIS 3.0"
            price={59.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51WfgjZu-cL._AC_SL1350_.jpg"
          />
          <Product
            id="49538094"
            title="NETGEAR Orbi Whole Home WiFi 6 System with DOCSIS 3.1 Built-in Cable Modem (CBK752) – Cable Modem Router + 1 Satellite Extender | Covers up to 5,000 sq. ft. 40+ Devices | AX4200 (Up to 4.2Gbps) "
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71E5cNHOy1L._AC_SL1500_.jpg"
          />
          <Product
          id="49538094"
          title="SYNCO MC4 Audio-Mixer-Bluetooth-USB-Record 4-Channel Mono Stereo Input Reverb Effects, 48V Phantom Power, Audio Interface Board for Stage Tuning, Home KTV, Studio Music, Sound Recording etc"
          price={59.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71y0PQ4COnL._AC_SL1200_.jpg"
        />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SYNCO MC4 Audio-Mixer-Bluetooth-USB-Record 4-Channel Mono Stereo Input Reverb Effects, 48V Phantom Power, Audio Interface Board for Stage Tuning, Home KTV, Studio Music, Sound Recording etc"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="
            VTech Pull and Sing Puppy"
            price={20.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/7108HSmwBeL._AC_SL1500_.jpg"
          />
          <Product
          id="90829333"
          title="Fire 7 Kids Edition Tablet, 7 Display 16 GB, Blue Kid-Proof Case"
          price={99.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61HqG%2BmJN1L._AC_SL1000_.jpg"
        />
        <Product
        id="90829334"
        title="Echo Show 5 (Charcoal) Kitchen Bundle with Food Network Kitchen Complimentary Subscription"
        price={89.98}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/51tc3DSH9mL._AC_.jpg"
      />
      <Product
      id="90829332"
      title="
      Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2019 release"
      price={.98}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/41fziVetM7L._AC_SL1000_.jpg"
    />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="
            Ethiopian Coffee, Yirgacheffe Region, Organic, Whole Bean, Fresh Roasted 16-ounce"
            price={1094.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71bQDNNAPXL._SL1500_.jpg"
          />
          <Product
          id="90829333"
          title="
          Zulay Professional Citrus Juicer - Manual Citrus Press and Orange Squeezer - Metal Lemon Squeezer - Premium Quality Heavy Duty Manual Orange Juicer and Lime..."
          price={99.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81aNmigq6aL._AC_SL1500_.jpg"
        />
        <Product
        id="90829334"
        title="Juicer Machine, Juice Extractor, Joerid Centrifugal Juicers Anti-Drip Dual Speed, Juice Maker For Vegetable and Fruit, BPA-Free & Easy to Clean, Juice.."
        price={89.98}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/714P-nIpD5L._AC_SL1500_.jpg"
      />
      <Product
      id="90829332"
      title="
      Dr. Seuss's Beginner Book Collection (Cat in the Hat, One Fish Two Fish, Green Eggs and Ham, Hop on Pop, Fox in Socks)"
      price={25.98}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/51PWDGLykIL._SX339_BO1,204,203,200_.jpg"
    />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          </div>
      </div>
    </div>
  );
}

export default Home;
