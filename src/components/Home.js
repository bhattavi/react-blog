import React from 'react'
import blogsData from '../blogsData'
import {Link} from 'react-router-dom'

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
        <div className="post card" key={blog.id}>
          <div className="card-content">
            <Link to={'/' + blog.id}>
            <span className="card title">{blog.name}</span>
            </Link>
            <p>{blog.description}</p>
          </div>
        </div>
      )
    })) : (<div className="center">No Blogs yet</div>)

    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {blogList}
      </div>
    )

  }


}

export default Home