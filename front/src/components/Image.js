import React from 'react';

const Image = ({ src }) => {
  return (
    <div className="image">
      <img src={src} alt="company logo" />
    </div>
  );
};

export default Image;