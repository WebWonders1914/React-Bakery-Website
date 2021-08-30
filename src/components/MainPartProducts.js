import React from 'react';
import './MainPartProducts.css';
import CardItem from './CardItem';

function MainPartProducts() {
  return (
    <div className='cards'>
      <h1> Today's Best Deals Waiting For You!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h3> Cakes</h3>
          <ul className='cards__items'>
            <CardItem
               src='images/red-velvet-2.jpg'
              text='Get 25% OFF on your Favourite and Yummy Red Velvet'
              label='Offer'
              path='/services'
            />
            <CardItem
               src='images/hbd-cake.jpg'
              text='Customized Birthday cake at your door step just for Rs 499.'
              label='Offer'
              path='/services'
            />
            <CardItem
               src='images/dryfruit-cake.jpg'
              text='Munch some of our rich in protein Dry-Fruit cake with 50% special dicount. '
              label='Offer'
              path='/services'
            />
           <CardItem
               src='images/cherry-cake.jpg'
              text='Get some sclices of Cherry Cake for you kiddoz for only Rs 199.'
              label='Offer'
              path='/services'
            />
          </ul> <br />
          <h3> Biscuits</h3>
          <ul className='cards__items'>
           
            <CardItem
              src='images/bsct-1.webp'
              text='Get a pack of mixed Cream Biscuits for Rs 50 only'
              label='Offer'
              path='/services'
            />
            <CardItem
              src='images/bsct-2.webp'
              text='Special Pineapple Bicuits only for Limited period. '
              label='Offer'
              path='/sign-up'
            />
            <CardItem
              src='images/bsct-3.webp'
              text='Get a Flovour of crunchy biscuits with Cinamon touch.'
              label='Offer'
              path='/sign-up'
            />
          </ul> <br />
          <h3> Coffee</h3>
          <ul className='cards__items'>
            
            <CardItem
              src='images/cfe-1.jpg'
              text=' Enjoy the aroma of our Rare Arabic coffee.'
              label='Offer'
              path='/services'
            />
            <CardItem
              src='images/cfe-3.jpg'
              text=' black coffee large cup for Rs 59 only. '
              label='Offer'
              path='/sign-up'
            />
            <CardItem
              src='images/cf2-2.jpg'
              text='Cappuccino at it best with our free special cookies.  '
              label='Offer'
              path='/sign-up'
            />
          </ul> <br />
          <h3> Milk Shakes</h3>
          <ul className='cards__items'>
           
            <CardItem
              src='images/mlkshk-1.webp'
              text=' Buy Chocolate and Strawberry Milk Shake just for Rs 99'
              label='Offer'
              path='/services'
            />
            <CardItem
              src='images/mlkshk-22.jpg'
              text='Buy any 2 Flavours just for Rs 150 '
              label='Offer'
              path='/sign-up'
            />
            <CardItem
              src='images/mlkshk-3.jpg'
              text=' Season Special Alphonsos Hapoos Mango Flavour with 25% OFF '
              label='Offer'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainPartProducts;