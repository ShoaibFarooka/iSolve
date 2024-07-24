import React from 'react';
import '../ContactBanner/ContactBanner.css';

const ContactForm = () => {
    return (
        <div className='lg:min-h-[450px] lg:py-8 pb-20'>
            <form action="" className='lg:mx-24 ml-6'>
                <div className='flex lg:justify-between flex-col lg:flex-row'>
                <input className='lg:w-[49%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-4 lg:py-6 border-b-2' placeholder='First name*' type="text" />
                <input className='lg:w-[49%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-4 lg:py-6 border-b-2' placeholder='Last name*' type="text" />
                </div>
                <div className='flex lg:justify-between flex-col lg:flex-row lg:pt-2'>
                <input className='lg:w-[49%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-4 lg:py-6 border-b-2' placeholder='Email' type="email" />
                <input className='lg:w-[49%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-4 lg:py-6 border-b-2' placeholder='Phone' type="number" />
                </div>
                <div className='flex lg:justify-between flex-col lg:flex-row lg:pt-2'>
                <input className='lg:w-[49%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-4 lg:py-6 border-b-2' placeholder='Organization' type="text" />
                <input className='lg:w-[49%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-4 lg:py-6 border-b-2' placeholder="I'm Looking For*" type="text" />
                </div>
                <div className='lg:flex lg:relative'>
                <input className='lg:w-[100%] w-[90%] bg-transparent placeholder-gray-600 focus:border-black border-gray-500 outline-none lg:text-2xl py-8 border-b-2' placeholder="Message" type="text" />
                <input className='bg-[#15B1FE] lg:absolute lg:bottom-2 lg:right-0 text-white float-left py-3 mb-2 px-12 lg:text-2xl cursor-pointer rounded mt-6' type="button" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;