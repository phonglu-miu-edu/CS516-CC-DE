import './index.scss';
import ArrowRight from "components/ArrowRight";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPosts } from "services/PostService";

const Blog = () => {
    const [firstPost, setFirstPost] = useState({});
    const postState = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    useEffect(() => {
        if (postState && postState.posts && postState.posts.length > 0) {
            setFirstPost(postState.posts[0]);
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
                                            <Link to="/#works"><span>Portfolio</span></Link>
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

    const Main = () => (
        <section className="sec-box blog-main section-padding">
            <div className="sec-head text-center mb-80">
                <h6 className="sub-title opacity-7 mb-15">My Blogs</h6>
                <h3><span className="main-color">Articles</span> & Resources</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="item">
                        <div className="img">
                            <img src={firstPost.thumbnail} alt={firstPost.title} />
                        </div>
                        <div className="box">
                            <div className="cont text-center">
                                <span className="date"><i className="fas fa-calendar-alt mr-10 main-color"></i> {firstPost.date}</span>
                                <h4><Link to={"/post/" + firstPost.id}>{firstPost.title}</Link></h4>
                                <div className="row justify-content-center mt-15">
                                    <div className="col-lg-8">
                                        <p>{firstPost.summary}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info d-flex align-items-center">
                                <div className="ml-auto">
                                    <Link to={"/post/" + firstPost.id}>Read More <ArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const List = () => (
        <section className="sec-box blog section-padding pt-0">
            <div className="row">
                <div className="col-12">
                    <div className="sec-head bord-thin-bottom pb-20 mb-80">
                        <h4 className="sub-title fz-28">All Posts</h4>
                    </div>
                </div>
            </div>
            <div className="row md-marg">
                {postState.posts.slice(1).map(p => (
                    <div className="col-lg-4" key={p.id}>
                        <div className="item md-mb30 mb-30">
                            <div className="img">
                                <img src={p.thumbnail} alt={p.title} />
                            </div>
                            <div className="box">
                                <div className="cont">
                                    <span className="date"><i className="fas fa-calendar-alt mr-10 main-color"></i>{p.date}</span>
                                    <h5><Link to={"/post/" + p.id}>{p.title}</Link></h5>
                                </div>
                                <div className="info d-flex align-items-center">
                                    <div className="ml-auto">
                                        <Link to={"/post/" + p.id}>Read More <ArrowRight /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <>
            <NavBar />
            <Main />
            <List />
        </>
    );
};

export default Blog;