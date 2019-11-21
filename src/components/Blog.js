import React from 'react'
import blogsData from '../blogsData'
import Navbar from './Navbar'
import '../App.css';

class Blog extends React.Component {
    constructor() {
        super()

        this.state = {
            blogs: blogsData
        }

    }


    render() {

        const id = this.props.match.params.blog
        const blog = this.state.blogs ? (

            <div className="post">
                <h4>{this.state.blogs[id].name}</h4>
                <img className="img-fluid" src={this.state.blogs[id].img} alt="" />
                <p>{this.state.blogs[id].description}</p>
            </div>) :

            (<div className="center">Loading post......</div>)

        return (
            <div className="container">
                <div className="parent">
                    <div className="left">
                        {blog}
                    </div>
                    <div className="right">
                        {<Navbar />}
                    </div>
                </div>
            </div>
        )
    }


}

export default Blog