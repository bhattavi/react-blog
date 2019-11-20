import React from 'react'
import blogsData from '../blogsData'




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
                {console.log(this.state.blogs[id].name)}
                <h4>{this.state.blogs[id].name}</h4>
                <img src={this.state.blogs[id].img} alt=""/>
                <p>{this.state.blogs[id].description}</p>
            </div>) :

            (<div className="center">Loading post......</div>)


        return (

            <div>
                {blog}
            </div>

        )
    }


}

export default Blog