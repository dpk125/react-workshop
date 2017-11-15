import React from 'react';

const Card = ({ deck, value, click }) => {
  const backImage = 'http://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-2_grande.png?v=1494193481';
  const faceImage = 'https://deckofcardsapi.com/static/img/8C.png';

  return (
    <div className="card" onClick={click}>
      <div className="card__value">{value || 0}</div>
      <div className="card__image"
           style={{
             backgroundImage: `url(${deck ? backImage : faceImage})`
           }}
      />
    </div>
  )
};

export default Card;