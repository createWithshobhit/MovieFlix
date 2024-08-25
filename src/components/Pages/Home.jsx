import React from 'react';
import Navbar from '../Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Titlecard from '../Titlecard/Titlecard';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className='Home'>
      <Navbar />
      <div className='hero relative'>
        <img 
          src={hero_banner} 
          alt="Hero Banner" 
          className='banner-img w-full h-auto object-cover'
        />
        <div className="hero-caption absolute w-full pl-4 md:pl-10 lg:pl-20 bottom-0 "> {/* Added mt-8 here */}
          <img 
            src={hero_title} 
            alt="Hero Title" 
            className='caption-img w-[80%] sm:w-[90%] md:max-w-[420px] mb-10' 
          />
          <p className='text-sm mb-6 max-w-[700px] sm:text-base'>
            Discover his ties to a secret ancient order, a young man living in 
            modern Istanbul embarks on a quest to save the city from the immortal enemy.
          </p>
          <div className="hero-btn flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 mb-10">
            <button className="bg-gradient-to-r from-blue-700 to-red-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
              <img src={play_icon} alt="Play" className="h-[15px] w-[15px]" />
              Play
            </button>

            <button className="bg-red-800 text-white font-semibold py-2 px-5 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2">
              <img src={info_icon} alt="More Info" className="h-[15px] w-[15px]" />
              More Info
            </button>
          </div>
          <Titlecard />
        </div>
      </div>
      <div className="morecards px-4 md:px-10 lg:px-20 mt-6">
        <Titlecard title={"Blockbuster's Movies"} category={"top_rated"} />
        <Titlecard title={"Only On MovieFlix"} category={"popular"} />
        <Titlecard title={"Upcoming"} category={"upcoming"} />
        <Titlecard title={"Top Picks For You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
