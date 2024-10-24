import React from 'react'
import RecentBlog from '../Components/RecentBlog/RecentBlog'
import AllBlogPosts from '../Components/AllBlogPosts/AllBlogPosts'
import Footer from '../Components/Footer/Footer'

function Home() {
    
    return (
    <>
    <div className='mx-5 my-6 md:my-7 lg:my-8 lg:mx-28 h-10'>
        <p className='dark:text-light text-myDark border-y-2 text-center font-bold text-5xl md:text-11xl xl:text-12xl 2xl:text-14xl'>THE BLOG</p>
        <RecentBlog/>
        <AllBlogPosts/>
        <Footer/>
    </div>
    </>
    )
}

export default Home

