import React from 'react';

interface BannerProps {
    children: React.ReactNode
}

const Banner: React.FC<BannerProps> = ({ children }) => {
    return (
        <div>
            <div className="text">
                <h1>SapceX</h1>
                <p>discripation</p>
            </div>
            <div className="search-input">
                {children}
            </div>
        </div>
    );
};

export default Banner;
