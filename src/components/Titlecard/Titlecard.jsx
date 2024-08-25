import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Titlecard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDk2OWFkMzVhZDc4NzQzMzI0MzAwODMzNmRmZTgzYiIsIm5iZiI6MTcyNDQ4Nzg3NS43Nzg2NjgsInN1YiI6IjY2Yzk5NmU0MzBiZGY3NDE5NWZiOTc0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5VdOe6ZsX0CWtNg3_rse6wktVoKHvVFBwPxOKk15JQ'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  const scrollLeft = () => {
    cardRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    cardRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    const cardList = cardRef.current;
    cardList.addEventListener('wheel', handleWheel);

    // Cleanup function to remove the event listener
    return () => {
      cardList.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className='titlecards mt-10 mb-5 relative '>
      <h2 className='mb-2'>{title ? title : "Popular on MovieFlix"}</h2>
      
      <button 
        className='absolute left-0 mt-28 z-10 bg-blue-800 text-white p-2 rounded-l-lg'
        onClick={scrollLeft}
      >
        &#8592;
      </button>

      <div 
        className='card-list flex items-center justify-start overflow-x-scroll scrollbar-hide' 
        ref={cardRef}
      >
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card relative m-2" key={index}>
            <img 
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} 
              alt="" 
              className='max-w-[240px]  rounded-lg cursor-pointer hover:scale-110 hover:rotate-3 hover:shadow-lg transition-transform duration-300 ease-in-out' 
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>

      <button 
        className='absolute right-0 -mt-[12vw] mr-5 z-10 bg-blue-800 text-white p-2 rounded-r-lg'
        onClick={scrollRight}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Titlecard;
