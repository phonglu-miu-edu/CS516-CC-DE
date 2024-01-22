import Home from 'components/Home';
import Blog from 'components/Blog';
import PageNotFound from 'components/PageNotFound';
import Post from "components/Post";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

function AppRouter() {
    return (
        <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/index.html" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRouter;
