import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Fanatastic FITNESS and JOINT Related Benefits!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pt-1.jpg'
              text='An Amazing Tool For Coaches To Program'
              label='Programming'
              path='/services'
            />
            <CardItem
              src='images/pt-2.jpg'
              text='Employers-Keep Your Workforce Fit, Healthy And Happy'
              label='Health Benefits'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/pt-3.jpg'
              text='We Look After Your Employees Joint Health Here At Joint Care PT'
              label='Joint Health'
              path='/services'
            />
            <CardItem
              src='images/pt-4.jpg'
              text='See Our Various Plans That Will Help Increase Your Companies Productivity'
              label='Fitness Plans'
              path='/products'
            />
            <CardItem
              src='images/pt-5.jpg'
              text='Sign Up Today!'
              label='Sign Up'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;