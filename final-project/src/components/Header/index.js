import './index.scss';
import React from "react";

const Header = () => {
    return (
        <div className="nav-top pt-30 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 valign" />
                    <div className="col-md-4 valign">
                        <div className="social text-center full-width">
                            {/*<a href="https://www.behance.net/phongtailu"><i className="fab fa-behance"></i></a>*/}
                            <a href="https://twitter.com/lutaiphong"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/phongtailu"><i className="fab fa-linkedin-in"></i></a>
                            {/*<a href="https://dribbble.com/phonglu"><i className="fab fa-dribbble"></i></a>*/}
                        </div>
                    </div>
                    <div className="col-md-4 valign">
                        <div className="full-width info">
                            <div className="d-flex justify-content-end">
                                <a href="mailto:phong.lu@proton.me">
                                    <span className="sub-title fz-12">phong.lu@proton.me</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-butn">
                    <span className="pe-7s-menu"></span>
                </div>
            </div>
        </div>
    );
};

export default Header;