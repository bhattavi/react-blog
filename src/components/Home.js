import React from 'react'
import blogsData from '../blogsData'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../App.css';
import Header from './Header'
import Jumbotron from './Jumbotron';
import Footer from './Footer'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      blogs: blogsData
    }

  }

  render() {
    const { blogs } = this.state
    const blogList = blogs.length ? (blogs.map(blog => {
      return (

        <div className="container" key={blog.id}>

          <img className="card-img-top img-thumbnail" src={blog.blogListImg} alt="blog imagegit " />
          <div className="card-body">
            <Link className="myLinks" to={'/' + blog.id}>
              <span className="card-title text-dark"><h2>{blog.name}</h2></span>
            </Link>
            <h5>Author: {blog.author}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Date Posted: {blog.date}</h6>
            <p className="card-title">{blog.summary}</p>
          </div>
        </div>

      )
    })) : (<div className="center">No Blogs yet</div>)

    return (
      <div>
        {<Header />}
        {<Jumbotron />}
        <div className="container">
          <div className="parent">
            <div className="left">
              {blogList}
            </div>
            <div className="right">
              {<Navbar />}
            </div>
          </div>
          {<Footer />}
        </div>

      </div>
    )

  }


}

export default Home