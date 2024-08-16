import React from 'react';
import Brand from '../slider/Brand';

const ClientOne = () => {
    return (
        <>
            <section className="clients-section">
                <div className="auto-container">
                    {/* Sponsors Outer */}
                    <div className="sponsors-outer">
                        {/*clients carousel*/}
                        <div className="clients-carousel">
                            <Brand />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ClientOne;