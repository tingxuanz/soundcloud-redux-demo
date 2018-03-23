import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, index) => (
          <div className='track' key={index}>
            {track.title}
          </div>
        ))
      }
    </div>
  );
}

export default Stream;