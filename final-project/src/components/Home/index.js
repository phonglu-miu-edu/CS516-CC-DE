import ContactButton from "components/ContactButton";
import Introduction from "components/Introduction";
import './index.scss';
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const NavBar = () => (
        <nav className="navbar">
            <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                    <ul className="navbar-nav main-bg d-flex justify-content-end">
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="0"><span>Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="1"><span>Services</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="2"><span>About</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="3"><span>Portfolio</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="4"><span>Price</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="5"><span>Contact</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="6"><span>Blog</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    const Price = () => (
        <div className="sec-box price section-padding" data-scroll-index="4">
            <div className="sec-head mb-80">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h6 className="sub-title opacity-7 mb-15">Best Pricing</h6>
                        <h3><span className="main-color">Flexible</span> Pricing Plan</h3>
                    </div>
                </div>
            </div>
            <div className="row md-marg">
                <div className="col-lg-4 valign">
                    <div className="item full-width md-mb50">
                        <div className="top-curv">
                            <span className="left"></span>
                            <h6 className="type">Basic</h6>
                            <span className="right"></span>
                        </div>

                        <div className="content">
                            <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                                <h2 className="main-color">$19</h2>
                                <p className="ml-20 fz-20">/ hour</p>
                            </div>
                            <div className="feat">
                                <ul className="rest">
                                    <li><i className="fas fa-check"></i> <span>Need your wireframe</span>
                                    </li>
                                    <li><i className="fas fa-check"></i>
                                        <span>Design with Figma, Framer</span></li>
                                    <li><i className="fas fa-check"></i> <span>Implement with Webflow, React, WordPress, Laravel/PHP</span>
                                    </li>
                                    <li><i className="fas fa-check"></i> <span>Support 6 months</span></li>
                                </ul>
                            </div>
                            <div className="text-center mt-50">
                                <div className="butn-presv">
                                    <a href="#" className="butn butn-md butn-bord radius-5 text-u full-width">
                                        <span>Get Started</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 valign">
                    <div className="item full-width md-mb50">
                        <div className="top-curv">
                            <span className="left"></span>
                            <h6 className="type">Popular</h6>
                            <span className="right"></span>
                        </div>

                        <div className="content">
                            <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                                <h2 className="main-color">$39</h2>
                                <p className="ml-20 fz-20">/ hour</p>
                            </div>
                            <div className="feat">
                                <ul className="rest">
                                    <li><i className="fas fa-check"></i> <span>Need your wireframe</span>
                                    </li>
                                    <li><i className="fas fa-check"></i>
                                        <span>Design with Figma, Framer</span></li>
                                    <li><i className="fas fa-check"></i> <span>Implement with Webflow, React, WordPress, Laravel/PHP</span>
                                    </li>
                                    <li><i className="fas fa-check"></i> <span>Support 6 months</span></li>
                                    <li><i className="fas fa-check"></i> <span>Your project alway be priority</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center mt-50">
                                <div className="butn-presv">
                                    <a href="#" className="butn butn-md butn-bord radius-5 text-u full-width">
                                        <span>Get Started</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 valign">
                    <div className="item full-width">
                        <div className="top-curv">
                            <span className="left"></span>
                            <h6 className="type">Premium</h6>
                            <span className="right"></span>
                        </div>

                        <div className="content">
                            <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                                <h2 className="main-color">$59</h2>
                                <p className="ml-20 fz-20">/ hour</p>
                            </div>
                            <div className="feat">
                                <ul className="rest">
                                    <li><i className="fas fa-check"></i> <span>Need your wireframe</span>
                                    </li>
                                    <li><i className="fas fa-check"></i>
                                        <span>Design with Figma, Framer</span></li>
                                    <li><i className="fas fa-check"></i> <span>Implement with Webflow, React, WordPress, Laravel/PHP</span>
                                    </li>
                                    <li><i className="fas fa-check"></i> <span>Support 6 months</span></li>
                                </ul>
                            </div>
                            <div className="text-center mt-50">
                                <div className="butn-presv">
                                    <a href="#" className="butn butn-md butn-bord radius-5 text-u full-width">
                                        <span>Get Started</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const Contact = () => (
        <div className="sec-box contact section-padding bord-thin-top" data-scroll-index="5">
            <div className="row">
                <div className="col-lg-5">
                    <div className="sec-head md-mb80">
                        <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
                        <h2 className="fz-50">Let's make your brand brilliant!</h2>
                        <p className="fz-15 mt-10">If you would like to work with me or just want to get in
                            touch, I'd love to hear from you!</p>
                        <div className="phone fz-30 fw-600 mt-30 underline">
                            <a href="#" className="main-color">+1 641 819 2482</a>
                        </div>
                        <ul className="rest social-text d-flex mt-60">
                            <li className="mr-30">
                                <a href="https://twitter.com/lutaiphong"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="mr-30">
                                <a href="https://www.linkedin.com/in/phongtailu"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-7 valign">
                    <div className="full-width">
                        <form id="contact-form" method="post" action="contact.php">
                            <div className="messages"></div>
                            <div className="controls row">
                                <div className="col-lg-6">
                                    <div className="form-group mb-30">
                                        <input id="form_name" type="text" name="name" placeholder="Name"
                                               required="required" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mb-30">
                                        <input id="form_email" type="email" name="email" placeholder="Email"
                                               required="required" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group mb-30">
                                        <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea id="form_message" name="message" placeholder="Message" rows="4"
                                                  required="required"></textarea>
                                    </div>
                                    <div className="mt-30">
                                        <button type="submit">
                                            <span className="text">Send A Message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    const Blog = () => (
        <div className="sec-box blog section-padding bord-thin-top" data-scroll-index="6">
            <div className="sec-head mb-80">
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="sub-title opacity-7 mb-15">My Blog</h6>
                        <h3>Latest News & <span className="main-color">Blog</span></h3>
                    </div>
                    <div className="col-lg-6 valign">
                        <div className="go-more full-width d-flex justify-content-end">
                            <Link to="/blog" className="d-flex">
                                <span>View All Posts
                                    <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34.2 32.3" xmlSpace="preserve" style={{strokeWidth: 2}}>
                                        <line x1="0" y1="16" x2="33" y2="16"></line>
                                        <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                                        <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="item md-mb30">
                        <div className="img">
                            <img src="assets/imgs/blog/1.jpg" alt="" />
                        </div>
                        <div className="box">
                            <div className="cont">
                                    <span className="date"><i className="fas fa-calendar-alt mr-10 main-color"></i> 6 , Aug
                                        2022</span>
                                <h5><a href="blog-details.html">12 unique examples of portfolio
                                    websites.</a></h5>
                            </div>
                            <div className="info d-flex align-items-center">
                                <div>
                                    <span><i className="fas fa-comments fz-12 mr-5"></i> 2 Comments</span>
                                </div>
                                <div className="ml-auto">
                                    <a href="blog-details.html">Read
                                        More <svg className="ml-5" width="18" height="18"
                                                  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                                                fill="currentColor"></path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item md-mb30">
                        <div className="img">
                            <img src="assets/imgs/blog/2.jpg" alt="" />
                        </div>
                        <div className="box">
                            <div className="cont">
                                    <span className="date"><i className="fas fa-calendar-alt mr-10 main-color"></i> 6 , Aug
                                        2022</span>
                                <h5><a href="blog-details.html">Dealing with spring allergy symptoms.</a>
                                </h5>
                            </div>
                            <div className="info d-flex align-items-center">
                                <div>
                                    <span><i className="fas fa-comments fz-12 mr-5"></i> 2 Comments</span>
                                </div>
                                <div className="ml-auto">
                                    <a href="blog-details.html">Read
                                        More <svg className="ml-5" width="18" height="18"
                                                  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                                                fill="currentColor"></path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item">
                        <div className="img">
                            <img src="assets/imgs/blog/3.jpg" alt="" />
                        </div>
                        <div className="box">
                            <div className="cont">
                                    <span className="date"><i className="fas fa-calendar-alt mr-10 main-color"></i> 6 , Aug
                                        2022</span>
                                <h5><a href="blog-details.html">Best wireframe tools for web designers.</a>
                                </h5>
                            </div>
                            <div className="info d-flex align-items-center">
                                <div>
                                    <span><i className="fas fa-comments fz-12 mr-5"></i> 2 Comments</span>
                                </div>
                                <div className="ml-auto">
                                    <a href="blog-details.html">Read
                                        More <svg className="ml-5" width="18" height="18"
                                                  viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                                                fill="currentColor"></path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="container-fluid home">
            <ContactButton />
            <main className="container">
                <Introduction />
                <NavBar />
                <section className="in-box">
                    <div className="sec-box services section-padding bord-thin-bottom" data-scroll-index="1">
                        <div className="sec-head mb-80">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h6 className="sub-title opacity-7 mb-15">My Services</h6>
                                    <h3>Turn Ideas <span className="main-color">Into Reality</span></h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/*<div className="col-md-6">*/}
                            {/*    <div className="item mb-40">*/}
                            {/*        <span className="icon-img-70 mb-30 opacity-7">*/}
                            {/*            <img src="assets/imgs/serv-img/1.png" alt="" />*/}
                            {/*        </span>*/}
                            {/*        <h6 className="text-u ls1 mb-15">UI / UX Design</h6>*/}
                            {/*        <p>There are many variations of passages of available but to the majority have*/}
                            {/*            suffered but*/}
                            {/*            the into majority.</p>*/}
                            {/*        <div className="bord-color"></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-md-6">
                                <div className="item mb-40">
                                    <span className="icon-img-70 mb-30 opacity-7">
                                        <img src="assets/imgs/serv-img/2.png" alt="" />
                                    </span>
                                    <h6 className="text-u ls1 mb-15">Web Development</h6>
                                    <p>Build <span className="main-color">highly scalable</span> systems to serve enable
                                        global reach and shape the future of the internet.</p>
                                    <div className="bord-color"></div>
                                </div>
                            </div>
                            {/*<div className="col-md-6">*/}
                            {/*    <div className="item sm-mb40">*/}
                            {/*        <span className="icon-img-70 mb-30 opacity-7">*/}
                            {/*            <img src="assets/imgs/serv-img/3.png" alt="" />*/}
                            {/*        </span>*/}
                            {/*        <h6 className="text-u ls1 mb-15">SEO / Marketing</h6>*/}
                            {/*        <p>There are many variations of passages of available but to the majority have*/}
                            {/*            suffered but*/}
                            {/*            the into majority.</p>*/}
                            {/*        <div className="bord-color"></div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="col-md-6">
                                <div className="item">
                                    <span className="icon-img-70 mb-30 opacity-7">
                                        <img src="assets/imgs/serv-img/4.png" alt="" />
                                    </span>
                                    <h6 className="text-u ls1 mb-15">Technology Solution</h6>
                                    <p>Let's rewrite the rules of the tech game together. Embrace the extraordinary, and
                                        watch <span className="main-color">your business</span> soar.</p>
                                    <div className="bord-color"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-box skills section-padding bord-thin-bottom" data-scroll-index="2">
                        <div className="row">
                            <div className="col-lg-4 valign">
                                <div className="sec-head md-mb80">
                                    <h6 className="sub-title opacity-7 mb-15">My Skills</h6>
                                    <h3><span className="main-color">Awards</span> & Recognitions</h3>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="item mb-30">
                                            <div className="d-flex align-items-center mb-30">
                                                <div className="mr-30">
                                                    <div className="img icon-img-40">
                                                        <img src="assets/imgs/resume/s1.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="fz-18">UI / UX Design</h6>
                                                </div>
                                            </div>
                                            <div className="skill-progress">
                                                <span className="progres" data-value="95%"></span>
                                            </div>
                                            <span className="value">95%</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item mb-30">
                                            <div className="d-flex align-items-center mb-30">
                                                <div className="mr-30">
                                                    <div className="img icon-img-40">
                                                        <img src="assets/imgs/resume/s2.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="fz-18">Web Development</h6>
                                                </div>
                                            </div>
                                            <div className="skill-progress">
                                                <span className="progres" data-value="90%"></span>
                                            </div>
                                            <span className="value">90%</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item sm-mb30">
                                            <div className="d-flex align-items-center mb-30">
                                                <div className="mr-30">
                                                    <div className="img icon-img-40">
                                                        <img src="assets/imgs/resume/s3.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="fz-18">Graphic Design</h6>
                                                </div>
                                            </div>
                                            <div className="skill-progress">
                                                <span className="progres" data-value="85%"></span>
                                            </div>
                                            <span className="value">85%</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="d-flex align-items-center mb-30">
                                                <div className="mr-30">
                                                    <div className="img icon-img-40">
                                                        <img src="assets/imgs/resume/s4.png" alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="fz-18">WordPress</h6>
                                                </div>
                                            </div>
                                            <div className="skill-progress">
                                                <span className="progres" data-value="78%"></span>
                                            </div>
                                            <span className="value">78%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="awards mt-100">*/}
                        {/*    <div className="row md-marg">*/}
                        {/*        <div className="col-lg-4">*/}
                        {/*            <div className="award-item sub-bg md-mb30">*/}
                        {/*                <div className="d-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <span>01</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-auto">*/}
                        {/*                        <span>2019</span>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="img icon-img-100 mt-80 mb-30">*/}
                        {/*                    <img src="assets/imgs/awards/1.png" alt="" />*/}
                        {/*                </div>*/}
                        {/*                <h6>02x Designer Award</h6>*/}
                        {/*                <span className="sub-title main-color mt-10">Nominee</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-4">*/}
                        {/*            <div className="award-item sub-bg md-mb30">*/}
                        {/*                <div className="d-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <span>01</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-auto">*/}
                        {/*                        <span>2021</span>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="img icon-img-100 mt-80 mb-30">*/}
                        {/*                    <img src="assets/imgs/awards/2.png" alt="" />*/}
                        {/*                </div>*/}
                        {/*                <h6>02x Designer Award</h6>*/}
                        {/*                <span className="sub-title main-color mt-10">Winner</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-4">*/}
                        {/*            <div className="award-item sub-bg">*/}
                        {/*                <div className="d-flex">*/}
                        {/*                    <div>*/}
                        {/*                        <span>01</span>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="ml-auto">*/}
                        {/*                        <span>2022</span>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div className="img icon-img-100 mt-80 mb-30">*/}
                        {/*                    <img src="assets/imgs/awards/3.png" alt="" />*/}
                        {/*                </div>*/}
                        {/*                <h6>02x Designer Award</h6>*/}
                        {/*                <span className="sub-title main-color mt-10">Ruuners Up</span>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="sec-box portfolio section-padding" data-scroll-index="3">
                        <div className="sec-head mb-30">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h6 className="sub-title opacity-7 mb-15">My Portfolio</h6>
                                    <h3>Look at my work & <br /> give
                                        us <span className="main-color">your feedback</span></h3>
                                </div>
                                <div className="col-lg-6 valign">
                                    <div className="go-more full-width d-flex justify-content-end">
                                        <a href="works.html" className="d-flex">
                                    <span>View All Works <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34.2 32.3" xmlSpace="preserve" style={{strokeWidth: 2}}>
                                        <line x1="0" y1="16" x2="33" y2="16"></line>
                                        <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                                        <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                                    </svg></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gallery">
                            <div className="row">
                                <div className="col-lg-6 items">
                                    <div className="item mt-50">
                                        <div className="img">
                                            <a href="project-details.html">
                                                <img src="assets/imgs/works/1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="cont mt-30 d-flex align-items-center">
                                            <div>
                                                <span className="tag">Branding</span>
                                                <h6 className="line-height-1"><a href="project-details.html">GeekFolio
                                                    Portfolio</a>
                                                </h6>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="arrow">
                                                    <a href="project-details.html">
                                                        <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg"
                                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                             viewBox="0 0 34.2 32.3" xmlSpace="preserve"
                                                             style={{strokeWidth: 2}}>
                                                            <line x1="0" y1="16" x2="33" y2="16"></line>
                                                            <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                                                            <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 items">
                                    <div className="item mt-50">
                                        <div className="img">
                                            <a href="project-details.html">
                                                <img src="assets/imgs/works/2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="cont mt-30 d-flex align-items-center">
                                            <div>
                                                <span className="tag">Branding</span>
                                                <h6 className="line-height-1"><a href="project-details.html">Luxury
                                                    Modern
                                                    Website</a>
                                                </h6>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="arrow">
                                                    <a href="project-details.html">
                                                        <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg"
                                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                             viewBox="0 0 34.2 32.3" xmlSpace="preserve"
                                                             style={{strokeWidth: 2}}>
                                                            <line x1="0" y1="16" x2="33" y2="16"></line>
                                                            <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                                                            <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 items">
                                    <div className="item mt-50">
                                        <div className="img">
                                            <a href="project-details.html">
                                                <img src="assets/imgs/works/3.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="cont mt-30 d-flex align-items-center">
                                            <div>
                                                <span className="tag">Branding</span>
                                                <h6 className="line-height-1"><a href="project-details.html">Partiner
                                                    BPO</a></h6>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="arrow">
                                                    <a href="project-details.html">
                                                        <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg"
                                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                             viewBox="0 0 34.2 32.3" xmlSpace="preserve"
                                                             style={{strokeWidth: 2}}>
                                                            <line x1="0" y1="16" x2="33" y2="16"></line>
                                                            <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                                                            <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 items">
                                    <div className="item mt-50">
                                        <div className="img">
                                            <a href="project-details.html">
                                                <img src="assets/imgs/works/4.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="cont mt-30 d-flex align-items-center">
                                            <div>
                                                <span className="tag">Branding</span>
                                                <h6 className="line-height-1"><a href="project-details.html">From our
                                                    gallery</a>
                                                </h6>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="arrow">
                                                    <a href="project-details.html">
                                                        <svg className="arrow-right" xmlns="http://www.w3.org/2000/svg"
                                                             xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                             viewBox="0 0 34.2 32.3" xmlSpace="preserve"
                                                             style={{strokeWidth: 2}}>
                                                            <line x1="0" y1="16" x2="33" y2="16"></line>
                                                            <line x1="17.3" y1="0.7" x2="33.2" y2="16.5"></line>
                                                            <line x1="17.3" y1="31.6" x2="33.5" y2="15.4"></line>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-box testimonials section-padding">
                        <div className="pad-left">
                            <div className="sec-head mb-80">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <h6 className="sub-title opacity-7 mb-15">Testimonials</h6>
                                        <h3>Trusted by <span className="main-color">Hundered Clients</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="testim-swiper" data-carousel="swiper" data-item="1" data-space="30"
                                         data-speed="1000">
                                        <div id="content-carousel-container-unq-testim" className="swiper-container"
                                             data-swiper="container">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="item d-flex">
                                                        <div>
                                                            <div className="icon-img-60 mr-60">
                                                                <img src="assets/imgs/svg-assets/quote.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="cont mb-30">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="rate-stars fz-12">
                                                                <span className="rate main-color">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </span>
                                                                        <span className="fz-12 opacity-7 ml-10">(71 Reviews)</span>
                                                                    </div>
                                                                </div>
                                                                <p className="fz-20 mt-15">We have purchased well into
                                                                    the
                                                                    thousands
                                                                    of items, but this is without doubt one of the best
                                                                    we’ve
                                                                    have
                                                                    been
                                                                    lucky enough to work on, the attention to detail
                                                                    apparent
                                                                    throughout, and the delivery is impressively
                                                                    intuitive.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <div className="img">
                                                                        <img src="assets/imgs/testim/1.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="ml-30">
                                                                    <div className="info">
                                                                        <h6 className="main-color">Leonard Heiser</h6>
                                                                        <span className="fz-13 mt-10 opacity-8">Envato
                                                                    customer</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item d-flex">
                                                        <div>
                                                            <div className="icon-img-60 mr-60">
                                                                <img src="assets/imgs/svg-assets/quote.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="cont mb-30">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="rate-stars fz-12">
                                                                <span className="rate main-color">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </span>
                                                                        <span className="fz-12 opacity-7 ml-10">(71 Reviews)</span>
                                                                    </div>
                                                                </div>
                                                                <p className="fz-20 mt-15">We have purchased well into
                                                                    the
                                                                    thousands
                                                                    of items, but this is without doubt one of the best
                                                                    we’ve
                                                                    have
                                                                    been
                                                                    lucky enough to work on, the attention to detail
                                                                    apparent
                                                                    throughout, and the delivery is impressively
                                                                    intuitive.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <div className="img">
                                                                        <img src="assets/imgs/testim/2.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="ml-30">
                                                                    <div className="info">
                                                                        <h6 className="main-color">Leonard Heiser</h6>
                                                                        <span className="fz-13 mt-10 opacity-8">Envato
                                                                    customer</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="item d-flex">
                                                        <div>
                                                            <div className="icon-img-60 mr-60">
                                                                <img src="assets/imgs/svg-assets/quote.png" alt="" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="cont mb-30">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="rate-stars fz-12">
                                                                <span className="rate main-color">
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                    <i className="fas fa-star"></i>
                                                                </span>
                                                                        <span className="fz-12 opacity-7 ml-10">(71 Reviews)</span>
                                                                    </div>
                                                                </div>
                                                                <p className="fz-20 mt-15">We have purchased well into
                                                                    the
                                                                    thousands
                                                                    of items, but this is without doubt one of the best
                                                                    we’ve
                                                                    have
                                                                    been
                                                                    lucky enough to work on, the attention to detail
                                                                    apparent
                                                                    throughout, and the delivery is impressively
                                                                    intuitive.</p>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <div className="img">
                                                                        <img src="assets/imgs/testim/3.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="ml-30">
                                                                    <div className="info">
                                                                        <h6 className="main-color">Leonard Heiser</h6>
                                                                        <span className="fz-13 mt-10 opacity-8">Envato
                                                                    customer</span>
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
                                <div className="col-lg-3 d-flex align-items-end justify-content-end">
                                    <div className="swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto">
                                        <div className="swiper-button-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true">
                                    <span className="left">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                        </div>
                                        <div className="swiper-button-next ml-50" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false">
                                    <span className="right">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="icon-qoute">
                            <i className="fas fa-quote-left"></i>
                        </span>
                    </div>
                    <Price />
                    <Contact />
                    <Blog />
                </section>
            </main>
        </div>
    );
};

export default Home;