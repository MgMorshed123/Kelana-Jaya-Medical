import React from 'react';

const AppointmentOption = ({options}) => {

     const {name , slots} =options;



    return (
<div className="card w-96 bg-base-100 shadow-xl mt-10">
  <div className="card-body text-center">
    <h2 className=" text-primary text-2xl  text-center ">{name}</h2>
    <p> {slots.length > 0 ? slots[0] : 'Try another Day'} </p>

    <p>{slots.length}  {slots.length >1 ? "spaces " : "space"} available </p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book Appointment </button>
    </div>
  </div>
</div>
    );
};

export default AppointmentOption;