import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import MovieDetails from './MovieDetails';

const MovieCard = ({ posterPath, movie }) => {
  const [showModal, setShowModal] = useState(false);

  if (!posterPath) return null;

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className='w-36 md:w-48 pr-2 cursor-pointer transform transition-transform duration-200 hover:scale-105'
        onClick={handleClick}
      >
        <img
          alt='Movie card'
          src={IMG_CDN_URL + posterPath}
          className="rounded-md"
        />
      </div>

      {showModal && (
        <MovieDetails
          movie={movie}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default MovieCard;
