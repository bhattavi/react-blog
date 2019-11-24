import React from 'react'
import blogsData from '../blogsData'
import Navbar from './Navbar'
import '../App.css';
import Header from './Header';


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
            <div className="container">
                <div className="">
                    <h1 className="card-title">{this.state.blogs[id].name}</h1>
                    <img className="card-img-top img-thumbnail" src={this.state.blogs[id].blogListImg} />
                    <div className="card-body">
                        <h5>Author: {this.state.blogs[id].author}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Date Posted: {this.state.blogs[id].date}</h6>
                        <p className="card-body">{this.state.blogs[id].description}</p>
                    </div>
                </div>
            </div>) :

            (<div className="center">Loading post......</div>)

        return (
            <div>{<Header />}
            <div className="container" style={{marginTop: "80px"}}>
                <div className="parent">
                    <div className="left">
                        {blog}
                    </div>
                    <div className="right">
                        {<Navbar />}
                    </div>
                </div>
            </div>
           
            </div>
        )
    }


}

export default Blog