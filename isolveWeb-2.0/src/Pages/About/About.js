import {React,useEffect} from 'react';
import AboutTitle from '../../components/AboutTitle/AboutTitle';
import AboutThreeCard from '../../components/AboutThreeCard/AboutThreeCard';
import AboutCard from '../../components/AboutCard/AboutCard';


const About = () => {
    useEffect(() => {
        window.scrollTo(
           0,0
          
        );
      }, );
    return (
        <div className='pt-40 bg-slate-900'>
            <AboutTitle></AboutTitle>
            <AboutThreeCard></AboutThreeCard>
            <AboutCard></AboutCard>
        </div>
    );
};

export default About;