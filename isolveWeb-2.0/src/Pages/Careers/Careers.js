import React from 'react';
import CareerPart from '../../components/CareerPart/CareerPart';
import CareerCard from '../../components/CareerCard/CareerCard';
import { useEffect } from 'react';

const Careers = () => {
    useEffect(() => {
        window.scroll(0,0);
      },[] )
    return (
        <div className='pt-40 bg-[#c6deff]'>
            <CareerPart></CareerPart>
            <CareerCard></CareerCard>
        </div>
    );
};

export default Careers;