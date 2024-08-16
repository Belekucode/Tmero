import React from 'react';

const TeamOne = () => {
    const data = [
        {
            img: "team-1.jpg",
            title: "Edward norton",
            desig: "Musician"
        },
        {
            img: "team-2.jpg",
            title: "Jane seymour",
            desig: "Designer"
        },
        {
            img: "team-3.jpg",
            title: "Mike hardson",
            desig: "Developer"
        },
        {
            img: "team-4.jpg",
            title: "Christine eve",
            desig: "Artisit"
        },
        {
            img: "team-4.jpg",
            title: "Edward norton",
            desig: "Musician"
        },
        {
            img: "team-3.jpg",
            title: "Jane seymour",
            desig: "Designer"
        },
        {
            img: "team-2.jpg",
            title: "Mike hardson",
            desig: "Developer"
        },
        {
            img: "team-1.jpg",
            title: "Christine eve",
            desig: "Artisit"
        },
    ];
    return (
        <>
            <section className="team-section">
                <div className="auto-container">
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="team-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><a href="/page-team-details"><img src={`images/resource/${item.img}`} title="Edulrns" /></a></figure>
                                        <span className="share-icon fa fa-share-alt" />
                                        <div className="social-links">
                                            <a href="#"><i className="fab fa-twitter" /></a>
                                            <a href="#"><i className="fab fa-facebook-f" /></a>
                                            <a href="#"><i className="fab fa-pinterest-p" /></a>
                                            <a href="#"><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="info-box">
                                        <h4 className="name"><a href="#">{item.title}</a></h4>
                                        <span className="designation">{item.desig}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamOne;