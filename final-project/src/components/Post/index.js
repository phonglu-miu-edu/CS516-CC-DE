import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "services/PostService";

const Post = () => {
    const [post, setPost] = useState({
        curr: null,
        prev: null,
        next: null
    });
    const { id } = useParams();
    const postState = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostById(id));
    }, [dispatch, id])

    useEffect(() => {
        if (postState && postState.post) {
            setPost(postState.post);
        }
    }, [postState]);

    const NavBar = () => (
        <div className="nav-top pt-30 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 valign" />
                    <div className="col-md-8">
                        <div className="navbar">
                            <div className="row justify-content-end rest">
                                <div className="col-lg-8 rest">
                                    <ul className="navbar-nav main-bg d-flex justify-content-end">
                                        <li className="nav-item">
                                            <Link to="/"><span>Home</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/#services"><span>Services</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/#skills"><span>Skills</span></Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/#works"><span>Experiences</span></Link>
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
                        </div>
                    </div>
                </div>
                <div className="nav-butn">
                    <span className="pe-7s-menu"></span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <NavBar />
            <section className="sec-box main-post section-padding">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="caption text-center">
                            {/*<div className="gat">*/}
                            {/*    <a href="#0"><span>Web Design</span></a>*/}
                            {/*    <a href="#0"><span>Envato</span></a>*/}
                            {/*</div>*/}
                            <h1 className="fz-55 mt-30">{post.curr && post.curr.title}</h1>
                            <p className="sub-title mt-15">{post.curr && post.curr.date}</p>
                        </div>
                        <div className="main-img mb-80 mt-40">
                            <img src={post.curr && post.curr.thumbnail} alt={post.curr && post.curr.title} className="radius-5" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="cont">
                            <div className="text mb-20">
                                <div className="d-flex align-items-center mb-20">
                                    <span className="fz-60 fw-500 main-color line-height-1 mr-10">A</span>
                                    <p>new report said earlier this week that Apple is working on a brand new
                                        laptop. A trusted Apple insider with a proven track record confirmed
                                        that Apple is working on the larger MacBook Air.</p>
                                </div>
                                <p>new report said earlier this week that Apple is working on a brand
                                    new laptop.
                                    Apple plans to release a 15-inch MacBook Air in 2023, a first for
                                    the Air
                                    series. A trusted Apple insider with a proven track record confirmed
                                    that Apple
                                    is working on the larger MacBook Air.</p>
                            </div>
                            <div className="text">
                                <p>However, Apple might not include it in the Air series when it
                                    launches it. As for
                                    the notebook’s release date, the 15-inch MacBook isn’t coming soon.
                                    It’ll get a
                                    late 2023 release at best, according to the new claims.</p>
                            </div>
                            <div className="title mt-30">
                                <h5 className="fw-500">What sizes do MacBook Airs come in?</h5>
                            </div>
                            <div className="text mt-20">
                                <p>Apple currently sells only one MacBook Air size. The laptop comes in
                                    a 13-inch
                                    version that matches the pre-2021 13-inch MacBook Pro size.
                                    Previously, Apple
                                    sold an 11-inch MacBook Air, but the company discontinued that model
                                    in 2017.
                                </p>
                            </div>
                            <div className="post-qoute mt-50">
                                <h6 className="line-height-28 fz-20">
                                <span className="l-block">Increase your site traffic and gain new customers
                                    with a beautiful
                                    and
                                    functional blog.</span>
                                    <span className="sub-title main-color mt-20 mb-0"> - Ui-ThemeZ
                                    Code</span>
                                </h6>
                            </div>
                            <div className="mb-50 mt-50">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="iner-img sm-mb30">
                                            <img src="assets/imgs/blog/b1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="iner-img">
                                            <img src="assets/imgs/blog/b2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="title mb-10">
                                <h5 className="fw-500">Apple currently sells only one MacBook Air size.</h5>
                            </div>
                            <div className="text mb-20">
                                <p>A new report said earlier this week that Apple is working on a brand new
                                    laptop.
                                    Apple plans to release a 15-inch MacBook Air in 2023, a first for the
                                    Air
                                    series. A trusted Apple insider with a proven track record confirmed
                                    that Apple
                                    is working on the larger MacBook Air.</p>
                            </div>
                            <div className="unorder-list mb-30">
                                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                                <ul className="rest">
                                    <li>Yet this above sewed flirted opened ouch</li>
                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                    <li>Abominable this abidin far successfully then like piquan</li>
                                </ul>
                            </div>
                            <div className="order-list mb-30">
                                <h6 className="mb-10">Ordered & Unordered Lists.</h6>
                                <ul className="rest">
                                    <li><span>01 -</span> Yet this above sewed flirted opened ouch</li>
                                    <li><span>02 -</span> Goldfinch realistic sporadic ingenuous</li>
                                    <li><span>03 -</span> Abominable this abidin far successfully then like
                                        piquan
                                    </li>
                                </ul>
                            </div>
                            <div className="text">
                                <p>However, Apple might not include it in the Air series when it launches
                                    it. As for
                                    the notebook’s release date, the 15-inch MacBook isn’t coming soon.
                                    It’ll get a
                                    late 2023 release at best, according to the new claims.</p>
                            </div>

                            <div className="info-area flex mt-20 pb-20 pt-20 bord-thin-top bord-thin-bottom">
                                {/*<div>*/}
                                {/*    <div className="tags flex">*/}
                                {/*        <div className="valign">*/}
                                {/*            <span>Tags :</span>*/}
                                {/*        </div>*/}
                                {/*        <div>*/}
                                {/*            <a href="#">Tech</a>*/}
                                {/*            <a href="#">Gavi</a>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className="ml-auto">
                                    <div className="share-icon flex">
                                        <div className="valign">
                                            <span>Share :</span>
                                        </div>
                                        <div>
                                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="next-prv-post flex mt-50">
                                {post.prev && (
                                    <div className="thumb-post text-left bg-img" style={{background: "url('" + post.prev.thumbnail + "'"}}>
                                        <Link to={'/post/' + post.prev.id}>
                                            <span className="fz-12 text-u ls1 main-color mb-15"><i className="pe-7s-angle-left"></i>Prev Post</span>
                                            <h6 className="fw-500 fz-16">{post.prev.title}</h6>
                                        </Link>
                                    </div>
                                    )}
                                {post.next && (
                                    <div className="thumb-post ml-auto text-right bg-img" style={{background: "url('" + post.next.thumbnail + "'"}}>
                                        <Link to={'/post/' + post.next.id}>
                                            <span className="fz-12 text-u ls1 main-color mb-15">Next Post <i className="pe-7s-angle-right"></i></span>
                                            <h6 className="fw-500 fz-16">{post.next.title}</h6>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Post;