import React, { useMemo } from "react";

const Introduction = () => {
    const yearOfExperience = useMemo(() => {
        return new Date().getFullYear() - 2008;
    }, []);

    return (
        <section className="intro-profile md-mb50">
            <div className="row rest">
                <div className="col-lg-4 box-img main-bg">
                    <div className="cont valign">
                        <div className="full-width">
                            <div className="img">
                                <img src="assets/imgs/header/profile.jpg" alt="" />
                                <span className="icon">
                                    <img src="assets/imgs/header/icon1.png" alt="" />
                                </span>
                                <span className="icon">
                                    <img src="assets/imgs/header/icon2.png" alt="" />
                                </span>
                                <span className="icon">
                                    <img src="assets/imgs/header/icon4.png" alt="" />
                                </span>
                            </div>
                            <div className="info text-center mt-30">
                                <h5>Phong Lu</h5>
                                <p className="fz-13 text-u">Available For Freelance</p>
                            </div>
                            <div className="social text-center mt-20">
                                {/*<a href="https://www.behance.net/phongtailu"><i className="fab fa-behance"></i></a>*/}
                                <a href="https://twitter.com/lutaiphong"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/phongtailu"><i className="fab fa-linkedin-in"></i></a>
                                {/*<a href="https://dribbble.com/phonglu"><i className="fab fa-dribbble"></i></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 content main-bg">
                    <h1>I’m <span className="main-color">Phong Lu</span>,<br />
                        Senior Full-Stack Developer and <span className="bord">Technical Architect<i /></span></h1>
                    <div className="status mt-80">
                        <div className="d-flex align-items-center">
                            <div className="mr-40">
                                <div className="d-flex align-items-center">
                                    <h2>{yearOfExperience}</h2>
                                    <p>Years <br /> of Experance</p>
                                </div>
                            </div>
                            {/*<div className="mr-40">*/}
                            {/*    <div className="d-flex align-items-center">*/}
                            {/*        <h2>6k</h2>*/}
                            {/*        <p>Clients <br /> Worldwide</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div>
                                <div className="butn-presv">
                                    <a href="/assets/docs/Phong.Lu-Resume.docx" className="butn butn-md butn-bord radius-5 skew">
                                        <span>Download C.V</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;