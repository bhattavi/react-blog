import React from 'react'
import blogsData from '../blogsData'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../App.css';

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
          <div className="card mb-3">
            <img className="card-img-top img-thumbnail" src={blog.img} alt="Card image cap" />
            <div className="card-body">
              <Link to={'/' + blog.id}>
                <span className="card title">{blog.name}</span>
              </Link>
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      )
    })) : (<div className="center">No Blogs yet</div>)

    return (
      <div className="container">
        <div className="parent">
          <div className="left">
            {blogList}
          </div>
          <div className="right">
            {<Navbar />}
          </div>
        </div>


      </div>
    )

  }


}

export default Home