import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>  Delicacies are waitng for YOU!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
               src='images/cake-2.jpg'
              text='Get your Special Occasion Cakes Anytime Anywhere'
              label='Cakes'
              path='/services'
            />
            <CardItem
               src='images/biscuit-1.jpg'
              text='Grab a bite of our Freashly Baked Biscuits'
              label='BIscuits'
              path='/services'
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/coffee-1.webp'
              text='Feeling Low? Try our Energetic Coffee'
              label='Coffee'
              path='/services'
            />
            <CardItem
              src='images/shakes-1.jpg'
              text='Creamy and Fruitfull Juices are Waiting For You'
              label='Milk-Shakes'
              path='/services'
            />
            

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;