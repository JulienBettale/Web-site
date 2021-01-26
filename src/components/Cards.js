import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Découvrez ces destinations EPIC!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-9.jpg"
              text="Explorez les cascades cachées au fond de la jungle Amazonienne"
              label="Aventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Voyagez à travers les îles de Bali lors d'une croisière privée"
              label="Luxe"
              path="/services"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="images/img-3.jpg"
              text="Naviguez dans l'océan Atlantique pour visiter des eaux inexplorées"
              label="Mystère"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Vivez le football au sommet des montagnes Himalayennes"
              label="Aventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Traversez le désert du Sahara lors d'une visite guidée à dos de chameau"
              label="Adrénaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
