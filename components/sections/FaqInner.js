import React from 'react';
import Accordion from '../elements/Accordion';

const FaqOne = () => {
    return (
        <>
            <section className="faqs-section pt-100 pb-100">
                <div className="auto-container">
                    <div className="row">
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <Accordion />
                        </div>
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <Accordion />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqOne;