import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer your_api_key_here' // Replace with your actual API key
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, [id]);

  // Function to handle back navigation
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="h-[100vh] w-full mt-10 flex flex-col items-center justify-center relative">
      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="absolute top-5 left-5 bg-blue-900 text-white rounded-full px-4 py-2 hover:bg-blue-300 transition duration-300 ease-in-out"
      >
        Back
      </button>

      {/* Video Player */}
      {apiData.key && (
        <iframe 
          width='90%' 
          height='90%' 
          src={`https://www.youtube.com/embed/${apiData.key}`} 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      )}
      
      {/* Video Description */}
      <div className="description flex items-center justify-between gap-10 p-2 text-white">
        <h2 className="text-lg font-bold">{apiData.name}</h2>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default VPlayer;
