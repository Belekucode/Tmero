import React from 'react';
import CountDown from '../elements/CountDown';

const CountdownOne = () => {
    const fixDate = new Date();
    return (
        <>
            <section className="countdown-section">
                <div className="bg-image zoom-two" style={{ backgroundImage: 'url(./images/background/2.jpg)' }} />
                <div className="auto-container">
                    <div className="content-box">
                        <div className="sec-title light text-center">
                            <span className="sub-title">Book your seat now</span>
                            <h2>Upcoming study trip</h2>
                        </div>
                        <div className="time-counter wow fadeInUp">
                            <CountDown endDateTime={fixDate.setDate(fixDate.getDate() + 15)} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountdownOne;