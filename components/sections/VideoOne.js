import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const VideoOne = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="video-section">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/6.jpg)' }} />
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <h2 className="title">Take a video tour to learn<br /> intro of campus</h2>
                            <a href="page-about.html" className="theme-btn btn-style-one bg-theme-color3">Discover more</a>
                        </div>
                        <div className="video-box wow fadeInUp">
                            <span className="float-icon icon-arrow-2" />
                            <a className="play-btn lightbox-image" onClick={() => setOpen(true)}><i className="icon fa fa-play" /></a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default VideoOne;