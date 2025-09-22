import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieDetails = ({ movie, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);

  if (!movie) return null;

  // Map TMDB API fields to component props
  const backdropPath = movie.backdrop_path;
  const posterPath = movie.poster_path;
  const title = movie.title || movie.original_title;
  const rating = movie.vote_average;
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
  const description = movie.overview;
  const voteCount = movie.vote_count;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-netflix-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-[40vh]">
          {backdropPath ? (
            <img
              src={IMG_CDN_URL + backdropPath}
              alt={title}
              className="h-full w-full object-cover rounded-t-lg"
            />
          ) : (
            <div className="h-full w-full bg-gray-800 rounded-t-lg flex items-center justify-center">
              <span className="text-white">No backdrop image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-netflix-dark opacity-90 rounded-t-lg"></div>

          {/* Close Button */}
          <button
            className="absolute right-4 top-4 rounded-full bg-netflix-dark/80 hover:bg-netflix-dark/90 p-2"
            onClick={onClose}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>

              <div className="flex items-center gap-4 mb-6">
                {rating && (
                  <span className="text-green-500 font-medium">
                    {Math.floor(rating * 10)}% Match
                  </span>
                )}
                {releaseYear && <span className="text-white">{releaseYear}</span>}
                {voteCount && (
                  <span className="text-white">{voteCount} votes</span>
                )}
                <span className="border border-white/40 px-2 py-0.5 text-xs rounded text-white">
                  HD
                </span>
              </div>

              <div className="flex gap-4 mb-6">
                <button className="flex items-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-2 rounded">
                  <svg className="h-5 w-5 fill-black" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="border border-white/40 text-white hover:bg-white/10 px-4 py-2 rounded">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button className="border border-white/40 text-white hover:bg-white/10 px-4 py-2 rounded">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20.28a2 2 0 01-1.267-1.855V9.718a2 2 0 011.267-1.855l4-1.324A2 2 0 0112.664 6h1.71a2 2 0 011.626 3z" />
                  </svg>
                </button>
                <div className="flex-grow"></div>
                <button
                  className="border border-white/40 text-white hover:bg-white/10 px-4 py-2 rounded"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                </button>
              </div>

              {description && (
                <p className="text-white/80 mb-6">
                  {description}
                </p>
              )}

              <div className="text-sm text-white/60">
                {movie.adult && (
                  <div className="mb-2">
                    <span className="text-red-500">Adult Content</span>
                  </div>
                )}
                {movie.genre_ids && movie.genre_ids.length > 0 && (
                  <div className="mb-2">
                    <span className="text-white/80">Genres: </span>
                    {movie.genre_ids.map(id => `Genre ${id}`).join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
