import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';


const Courseone = ({ alternate }) => {
	return (
		<>

			<section className="course-details">
				<div className="container">
					<div className="row flex-xl-row-reverse">
						<div className="col-xl-8 col-lg-8">
							<div className="courses-details__content">

								<img src="images/resource/course-details.jpg" alt="" />
								<h2 className="mt-4">Course Overview</h2>
								<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.</p>
								<p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
								<div className="content mt-40">
									<div className="text">
										<h3>What You Will Learn?</h3>
										<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
									</div>
									<div className="row mt-30">

										<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
											<div className="inner-box">
												<div className="icon-box">
													<i className="icon flaticon-elearning"></i>
												</div>
												<h4 className="title">Online degree programs</h4>
												<span className="sub-title">26 Courses</span>
											</div>
										</div>

										<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
											<div className="inner-box">
												<div className="icon-box">
													<i className="icon flaticon-study-1"></i>
												</div>
												<h4 className="title">Non-degree programs</h4>
												<span className="sub-title">38 Courses</span>
											</div>
										</div>

										<div className="category-block-current-two col-lg-4 col-md-6 col-sm-6">
											<div className="inner-box">
												<div className="icon-box">
													<i className="icon flaticon-study"></i>
												</div>
												<h4 className="title">Off campus programs</h4>
												<span className="sub-title">13 Courses</span>
											</div>
										</div>
									</div>
								</div>


								<div className="mt-25">
									<h3>Frequently Asked Question</h3>
									<p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

									<Accordion/>
								</div>



							</div>
						</div>

						<div className="col-xl-4 col-lg-4 mt-md-50">
							<div className="course-sidebar">
								<ul className="course-details-info">
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-clock"></i></span>
										Durations: <span>10 hours</span>
									</li>
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-folder-open"></i></span>
										Lectures: <span>15</span>
									</li>
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-user-circle"></i></span>
										Students: <span>Max 50</span>
									</li>
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-flag"></i></span>
										Skill Level: <span>Advanced</span>
									</li>
									<li className="course-details-info-link">
										<span className="course-details-info-icon"><i className="far fa-bell"></i></span>
										Language: <span>English</span>
									</li>
								</ul>

								<div className="course-details-price">
									<p className="course-details-price-text">Course price</p>
									<p className="course-details-price-amount">$18.00</p>
									<a href="#" className="theme-btn btn-style-two course-details-price-btn">Buy This Course</a>
								</div>

								<div className="latest-course mb-30">
									<h4 className="latest-course-title mb-30">New Courses</h4>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src="images/resource/course-1.jpg" alt="" />
										</div>
										<div className="latest-course-content">
											<a className="latest-course-author" href="#">by <span>Advanced</span></a>
											<h5><a href="page-course-details.html">Modern Languages</a></h5>
											<div className="latest-course-stars">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<span>4.8</span>
											</div>
										</div>
									</div>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src="images/resource/course-2.jpg" alt="" />
										</div>
										<div className="latest-course-content">
											<a className="latest-course-author" href="#">by <span>Advanced</span></a>
											<h5><a href="page-course-details.html">Modern Technologies</a></h5>
											<div className="latest-course-stars">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<span>5.0</span>
											</div>
										</div>
									</div>
									<div className="latest-course-item">
										<div className="latest-course-img">
											<img src="images/resource/course-3.jpg" alt="" />
										</div>
										<div className="latest-course-content">
											<a className="latest-course-author" href="#">by <span>Advanced</span></a>
											<h5><a href="page-course-details.html">Development Studies</a></h5>
											<div className="latest-course-stars">
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<i className="fas fa-star"></i>
												<span>4.9</span>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</section>

		</>
	);
};

export default Courseone;