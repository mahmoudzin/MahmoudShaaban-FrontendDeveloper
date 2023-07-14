import React from 'react';
import './index.scss'
import { ReactComponent as BammerShip } from './banner.svg';

const Banner: React.FC = () => {
    return (
        <div className="flex justify-between items-center flex-wrap mb-8 h-screen bg-black p-6 bg-cover bg-no-repeat bg-center"
            style={{ background: 'url(background.jpg)'}}
        >            
            <div className="w-full text-center lg:w-1/2 lg:text-start">
                <div className="animate-pulse">
                    <h1 className="font-bold text-9xl text-violet-500 mb-12">SapceX</h1>
                </div>
                <div>
                    <h4 className="font-bold text-xl text-gray-300 mb-3">Search About Capsules</h4>
                    <p className="font-bold text-gray-500 max-w-md lg:mx-0 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum blanditiis repellat beatae? Reprehenderit eaque at ex alias id excepturi mollitia aspernatur. Ratione vitae nihil ab enim ipsum consectetur distinctio adipisci dolorem ad nesciunt, aliquid aspernatur.</p>
                </div>
            </div>
            <div className="animate-bounce w-full lg:w-1/2 flex items-center">
                <BammerShip />
            </div>
        </div>
    );
};

export default Banner;
