import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';

const TeamDetails = ({ alternate }) => {
	return (
		<>

			<section className="team-details">
				<div className="container pb-100">
					<div className="team-details__top pb-70">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-left">
									<div className="team-details__top-img"> <img src="/images/resource/team-details.jpg" title='Oitech' />
										<div className="team-details__big-text"></div>
									</div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__top-right">
									<div className="team-details__top-content">
										<h3 className="team-details__top-name">Aleesha Brown</h3>
										<p className="team-details__top-title">Managing Director & CEO</p>
										<div className="team-details__social"> <Link href="#"><i className="fab fa-twitter"></i></Link> <Link href="#"><i className="fab fa-facebook"></i></Link> <Link href="#"><i className="fab fa-pinterest-p"></i></Link> <Link href="#"><i className="fab fa-instagram"></i></Link> </div>
										<p className="team-details__top-text-1">I help my clients stand out and  they help me grow.</p>
										<p className="team-details__top-text-3">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae </p>
										<p className="team-details__top-text-2">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="team-details__bottom pt-100">
						<div className="row">
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__bottom-left">
									<h4 className="team-details__bottom-left-title">Personal Experience</h4>
									<p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6">
								<div className="team-details__bottom-right">
									<div className="">
					                    <div className="skills">
					                        <div className="skill-item">
					                            <div className="skill-header">
					                                <h6 className="skill-title">Technology</h6>
					                            </div>
					                            <div className="skill-bar">
					                                <div className="bar-inner">
					                                    <div className="bar progress-line" data-width={77} style={{width: `77%`}} >
					                                        <div className="skill-percentage">
					                                            <div className="count-box">
					                                                <span className="count-text" data-speed={3000} data-stop={77}>77</span>%
					                                            </div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>
									</div>
									<div className="">
					                    <div className="skills">
					                        <div className="skill-item">
					                            <div className="skill-header">
					                                <h6 className="skill-title">Marketing</h6>
					                            </div>
					                            <div className="skill-bar">
					                                <div className="bar-inner">
					                                    <div className="bar progress-line" data-width={90} style={{width: `90%`}} >
					                                        <div className="skill-percentage">
					                                            <div className="count-box">
					                                                <span className="count-text" data-speed={3000} data-stop={90}>90</span>%
					                                            </div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>
									</div>
									<div className="">
					                    <div className="skills">
					                        <div className="skill-item">
					                            <div className="skill-header">
					                                <h6 className="skill-title">Business</h6>
					                            </div>
					                            <div className="skill-bar">
					                                <div className="bar-inner">
					                                    <div className="bar progress-line" data-width={99} style={{width: `99%`}} >
					                                        <div className="skill-percentage">
					                                            <div className="count-box">
					                                                <span className="count-text" data-speed={3000} data-stop={99}>99</span>%
					                                            </div>
					                                        </div>
					                                    </div>
					                                </div>
					                            </div>
					                        </div>
					                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="team-contact-form">
				<div className="container pb-100">
					<div className="row justify-content-center">

						<div className="col-lg-8">
							<div className="sec-title text-center">
								<span className="sub-title">Contact With Us Now</span>
								<h2 className="section-title__title">Feel Free to Write Our  Tecnology Experts</h2>
							</div>
							<form id="contact_form" name="contact_form" className="" action="#" >
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="mb-3">
											<input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
										</div>
									</div>
								</div>
								<div className="mb-3">
									<textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message" />
								</div>
								<div className="mb-3 text-center">
									<input name="form_botcheck" className="form-control" type="hidden" value="/page-team-details" />
									<button type="submit" className="theme-btn btn-style-one"><span className="btn-title">Send message</span></button>
									<button type="reset" className="theme-btn btn-style-one mx-3"><span className="btn-title">Reset</span></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};

export default TeamDetails;