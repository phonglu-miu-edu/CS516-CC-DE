import { getAllPosts } from "services/PostService";
import ArrowRight from "components/ArrowRight";
import ArrowSwipe from "components/ArrowSwipe";
import ArrowTopRight from "components/ArrowTopRight";
import ContactButton from "components/ContactButton";
import Introduction from "components/Introduction";
import './index.scss';
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
    const postState = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    const skills = [{
        logo: 'assets/imgs/resume/csharp.png',
        name: 'C#',
        progress: '95%'
    }, {
        logo: 'assets/imgs/resume/aws.png',
        name: 'AWS',
        progress: '80%'
    }, {
        logo: 'assets/imgs/resume/microservice.png',
        name: 'Microservice',
        progress: '90%'
    }, {
        logo: 'assets/imgs/resume/react.png',
        name: 'React',
        progress: '90%'
    }, {
        logo: 'assets/imgs/resume/angular.png',
        name: 'Angular',
        progress: '85%'
    }, {
        logo: 'assets/imgs/resume/sqlserver.png',
        name: 'SQL Server',
        progress: '90%'
    }, {
        logo: 'assets/imgs/resume/mysql.png',
        name: 'MySQL',
        progress: '95%'
    }, {
        logo: 'assets/imgs/resume/postgre.png',
        name: 'PostgreSQL',
        progress: '80%'
    }, {
        logo: 'assets/imgs/resume/htmlcss.png',
        name: 'HTML & CSS',
        progress: '80%'
    }];

    const works = [{
        image: 'assets/imgs/works/topenland.png',
        name: 'Topenland',
        link: 'https://topenland.com'
    }, {
        image: 'assets/imgs/works/vinhms.png',
        name: 'VinHMS',
        link: 'https://www.vinhms.com'
    }, {
        image: 'assets/imgs/works/s3co.png',
        name: 'Simple Solutions',
        link: 'https://www.s3co.vn'
    }, {
        image: 'assets/imgs/works/netpower.png',
        name: 'Netpower',
        link: 'https://www.netpower.vn'
    }, {
        image: 'assets/imgs/works/aaohcmut.png',
        name: 'AAO - University of Technology',
        link: 'http://aao.hcmut.edu.vn/'
    }];

    const testimonials = [{
        image: 'assets/imgs/testim/hoatran.png',
        text: 'Phong has great passion for programming and is very hard-working during the project. His expertise in the field of web technologies and microservices has helped us a lot. He is also a very nice guy to work with and I highly recommend him to any development project.',
        author: 'Mr. Hoa Tran',
        role: 'Head of Software Development | Technical Manager | Proptech | Digital Platform | Cloud Development'
    }, {
        image: 'assets/imgs/testim/hoangnguyen.png',
        text: 'Phong was the leader of our development team, not only because of his experiences with back-end and front-end technologies but because of his commitment to high quality product release and his willingness to share knowledge with the team. Phong’s work was always reliable, but his biggest contribution was his ability to consistently improve the quality of everyone working with him, not just himself.',
        author: 'Mr. Hoang Nguyen',
        role: 'Leader | Founder | Entrepreneur'
    }, {
        image: 'assets/imgs/testim/minhnguyen.png',
        text: 'I had known Phong for a long time before we joined for the first project related to online branding of Masters Association at University of Bolton (MAUB). The project includes website, integrated communication channels of MAUB and variety of designing works which require the project manager to have a wide range of skills to fulfill the tasks. After project completion, Phong also followed with us to maintain and support MAUB system for a whole year time although the service fee did not cover such work. He proved himself to be a responsible and trusted partner for IT & technology solution service which I strongly recommend to any of his future clients.',
        author: 'Mr. Minh Nguyen',
        role: 'Educator, Marketer | Chief of Knowledge at Wisdom Agency, CSO at Kim Ngan Group'
    }];

    const sliderRef = useRef(null);

    const onSliderPrevClick = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const onSliderNextClick = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    const RenderedSkills = () => skills.map(s => (
        <div className="col-md-6" key={s.logo}>
            <div className="item mb-30">
                <div className="d-flex align-items-center mb-30">
                    <div className="mr-30">
                        <div className="img icon-img-40">
                            <img src={s.logo} alt={s.name} />
                        </div>
                    </div>
                    <div>
                        <h6 className="fz-18">{s.name}</h6>
                    </div>
                </div>
                {/*<div className="skill-progress">*/}
                {/*    <span className="progres" data-value={s.progress}></span>*/}
                {/*</div>*/}
                {/*<span className="value">{s.progress}</span>*/}
            </div>
        </div>
    ));

    const RenderedWorks = () => works.map(s => (
        <div className="col-lg-6 items" key={s.image}>
            <div className="item mt-50">
                <div className="img">
                    <a href={s.link} target="_blank">
                        <img src={s.image} alt={s.name} />
                    </a>
                </div>
                <div className="cont mt-30 d-flex align-items-center">
                    <div>
                        <span className="tag">Branding</span>
                        <h6 className="line-height-1">
                            <a href={s.link} target="_blank">{s.name}</a>
                        </h6>
                    </div>
                    <div className="ml-auto">
                        <div className="arrow">
                            <a href={s.link} target="_blank">
                                <ArrowTopRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    const RenderedTestimonials = () => {
        return (
            <Swiper
                ref={sliderRef}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                {testimonials.map(s => (
                    <SwiperSlide key={s.image}>
                        <div className="item d-flex">
                            <div>
                                <div className="icon-img-60 mr-60">
                                    <img src="/assets/imgs/svg-assets/quote.png" alt={s.author} />
                                </div>
                            </div>
                            <div>
                                <div className="cont mb-30">
                                    {/*<div className="d-flex align-items-center">*/}
                                    {/*    <div className="rate-stars fz-12">*/}
                                    {/*        <span className="rate main-color">*/}
                                    {/*            <i className="fas fa-star"></i>*/}
                                    {/*            <i className="fas fa-star"></i>*/}
                                    {/*            <i className="fas fa-star"></i>*/}
                                    {/*            <i className="fas fa-star"></i>*/}
                                    {/*            <i className="fas fa-star"></i>*/}
                                    {/*        </span>*/}
                                    {/*        <span className="fz-12 opacity-7 ml-10">(71 Reviews)</span>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <p className="fz-20 mt-15">{s.text}</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div>
                                        <div className="img">
                                            <img src={s.image} alt={s.author} />
                                        </div>
                                    </div>
                                    <div className="ml-30">
                                        <div className="info">
                                            <h6 className="main-color">{s.author}</h6>
                                            <span className="fz-13 mt-10 opacity-8">{s.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    };

    const NavBar = () => (
        <nav className="navbar">
            <div className="row justify-content-end rest">
                <div className="col-lg-8 rest">
                    <ul className="navbar-nav main-bg d-flex justify-content-end">
                        <li className="nav-item">
                            <a href="#" data-scroll-nav="0"><span>Home</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to="/#services"><span>Services</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#skills"><span>Skills</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#works"><span>Portfolio</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/#blog"><span>Blog</span></Link>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <Link to="/#price"><span>Price</span></Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link to="/#contact"><span>Contact</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    const Services = () => (
        <div className="sec-box services section-padding bord-thin-bottom" data-scroll-index="1">
            <a id="services" />
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
    );

    const Skills = () => (
        <div className="sec-box skills section-padding bord-thin-bottom" data-scroll-index="2">
            <a id="skills" />
            <div className="row">
                <div className="col-lg-4">
                    <div className="sec-head md-mb80">
                        <h6 className="sub-title opacity-7 mb-15">My Skills</h6>
                        <h3><span className="main-color">Awards</span> & Recognitions</h3>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <RenderedSkills />
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
    );

    const Works = () => (
        <div className="sec-box portfolio section-padding" data-scroll-index="3">
            <a id="works" />
            <div className="sec-head mb-30">
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="sub-title opacity-7 mb-15">My Portfolio</h6>
                        <h3>Look at my work & <br /> give me <span className="main-color">your feedback</span></h3>
                    </div>
                    {/*<div className="col-lg-6 valign">*/}
                    {/*    <div className="go-more full-width d-flex justify-content-end">*/}
                    {/*        <a href="works.html" className="d-flex">*/}
                    {/*            <span>View All Works <ArrowTopRight /></span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="gallery">
                <div className="row">
                    <RenderedWorks />
                </div>
            </div>
        </div>
    );

    const Testimonials = () => (
        <div className="sec-box testimonials section-padding">
            <a id="testimonials" />
            <div className="pad-left">
                <div className="sec-head mb-80">
                    <div className="row">
                        <div className="col-lg-7">
                            <h6 className="sub-title opacity-7 mb-15">Testimonials</h6>
                            <h3>Trusted by <span className="main-color">Supervisors</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <RenderedTestimonials />
                    </div>
                    <div className="col-12 d-flex align-items-end justify-content-end">
                        <div className="swiper-controls testim-controls arrow-out d-flex mr-20 ml-auto">
                            <div onClick={onSliderPrevClick} className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide" aria-disabled="true">
                                <span className="left">
                                    <ArrowSwipe />
                                </span>
                            </div>
                            <div onClick={onSliderNextClick} className="swiper-button-next ml-50" tabIndex="0" role="button" aria-label="Next slide" aria-disabled="false">
                                <span className="right">
                                    <ArrowSwipe />
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
    );

    const Blog = () => (
        <div className="sec-box blog section-padding bord-thin-top" data-scroll-index="6">
            <a id="blog" />
            <div className="sec-head mb-80">
                <div className="row">
                    <div className="col-lg-6">
                        <h6 className="sub-title opacity-7 mb-15">My Blog</h6>
                        <h3>Latest News & <span className="main-color">Blog</span></h3>
                    </div>
                    <div className="col-lg-6 valign">
                        <div className="go-more full-width d-flex justify-content-end">
                            <Link to="/blog#" className="d-flex">
                                <span>View All Posts<ArrowTopRight /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {postState.posts.map(p => (
                    <div className="col-lg-4">
                        <div className="item md-mb30">
                            <div className="img">
                                <img src={p.thumbnail} alt={p.title} />
                            </div>
                            <div className="box">
                                <div className="cont">
                                    <span className="date"><i className="fas fa-calendar-alt mr-10 main-color"></i>{p.date}</span>
                                    <h5><Link to={"/blog/" + p.id}>{p.title}</Link></h5>
                                </div>
                                <div className="info d-flex align-items-center">
                                    <div className="ml-auto">
                                        <Link to={"/blog/" + p.id}>Read More <ArrowRight /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const Price = () => (
        <div className="sec-box price section-padding" data-scroll-index="4">
            <a id="price" />
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
            <a id="contact" />
            <div className="row">
                <div className="col-lg-5">
                    <div className="sec-head md-mb80">
                        <h6 className="sub-title mb-15 opacity-7">Get In Touch</h6>
                        <h2 className="fz-50">Let's make your brand brilliant!</h2>
                        <p className="fz-15 mt-10">If you would like to work with me or just want to get in
                            touch, I'd love to hear from you!</p>
                        <div className="phone fz-30 fw-600 mt-30 main-color">+1 641 819 2482</div>
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
                                <div className="col-lg-4">
                                    <div className="form-group mb-30">
                                        <input id="form_name" type="text" name="name" placeholder="Name"
                                               required="required" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group mb-30">
                                        <input id="form_email" type="email" name="email" placeholder="Email"
                                               required="required" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group mb-30">
                                        <input id="form_phone" type="tel" name="phone" placeholder="xxx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
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

    return (
        <div className="container-fluid home">
            <ContactButton />
            <main className="container">
                <Introduction />
                <NavBar />
                <section className="in-box">
                    <Services />
                    <Skills />
                    <Works />
                    <Testimonials />
                    <Blog />
                    {/*<Price />*/}
                    <Contact />
                </section>
            </main>
        </div>
    );
};

export default Home;