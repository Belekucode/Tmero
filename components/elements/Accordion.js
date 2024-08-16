import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>


            <ul className="accordion-box wow fadeInRight">
                {/*Block*/}
                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>Is my technology allowed on tech?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">There are many variations of passages the majority have suffered alteration in some fo
                                injected humour, or randomised words believable.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>How to soft launch your business?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>How to turn visitors into contributors
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?
                        <div className="icon fa fa-angle-down" />
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.</div>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default Accordion;