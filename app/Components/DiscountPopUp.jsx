"use client"

import React, { useState, useEffect } from 'react';

const DiscountPopUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
            const timeout = setTimeout(() => setIsVisible(false), 3000);

            return () => clearTimeout(timeout);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleClose = () => setIsVisible(false);

    return (
        <div>
            {isVisible && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
                    color: 'black',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                }}>
                    <form onClick={e => e.stopPropagation()} className="bg-sky-100" onBlur={handleClose} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', padding: '50px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <h2 className="text-3xl">Special Discount!</h2>
                        <p className="text-xl">Get 20% off your next purchase!</p>
                        <input type="text" placeholder="Enter your email" required className="border-2 border-black w-full rounded-md" style={{ margin: '10px', padding: '10px' }} />
                        <div className="flex md:space-x-4 flex-col md:flex-row justify-center items-center">
                            <button type="submit" className="bg-black text-white rounded-md" style={{ padding: '10px 20px' }}>Submit</button>
                            <button type="button" className="bg-red-400 text-white rounded-md" onClick={handleClose} style={{ padding: '10px 20px' }}>Close</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default DiscountPopUp;
