import React from 'react';
import Gallery from '../slider/Gallery';

const GalleryOne = () => {
    return (
        <>
            <section className="gallery-section">
                <div className="anim-icons">
                    <span className="icon icon-line-1 spin-one" />
                    <span className="icon icon-dots-7 bounce-x" />
                </div>
                <div className="auto-container">
                    {/*clients carousel*/}
                    <div className="gallery-carousel wow fadeInUp">
                        <Gallery />
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryOne;