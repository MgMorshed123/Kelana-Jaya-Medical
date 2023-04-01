import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import { format } from 'date-fns';


const AppointBanner = ({selectedDate, setSelectedDate}) => {





    return (
        <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div className='mr-6'>
  
                 <DayPicker
                 
                 mode='single'
                 selected={selectedDate}
                 onSelect={setSelectedDate}
                 
                 ></DayPicker>

              
          </div>
        </div>
      </div>
    );
};

export default AppointBanner;