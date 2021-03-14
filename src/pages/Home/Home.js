import React from 'react';

import Slide from '../../patterns/Slide/Slide';
import SearchCar from '../../patterns/SearchCar/SearchCar';
import srcBanner1 from '../../assets/img/slider1.jpg';
import srcBanner2 from '../../assets/img/slider2.png';
import srcBanner3 from '../../assets/img/slider3.png';
import srcBanner4 from '../../assets/img/slider4.jpg';
import './Home.scss';
import Showcase from '../../patterns/Showcase/Showcase';

const Home = () => {
  const slides = [
    {
      id: 'img1',
      imgUrl: srcBanner1,
    },
    {
      id: 'img2',
      imgUrl: srcBanner2,
    },
    {
      id: 'img3',
      imgUrl: srcBanner3,
    },
    {
      id: 'img4',
      imgUrl: srcBanner4,
    },
  ];

  return (
    <main className="home">
      <Slide slides={slides} />
      <SearchCar />
      <Showcase />
    </main>
  );
};

export default Home;
