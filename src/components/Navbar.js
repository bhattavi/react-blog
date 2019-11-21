import React from 'react'
import { Link } from 'react-router-dom'


const apiid = '6fe58b52cc1c4977b8444ad5ec3b90af'
class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            news: [],
            loading: true
        }
    }


   async componentDidMount() {
        this.getNews();
        this.interval = setInterval(() => {
          this.getNews();
        }, 5000);
      }
    
      async getNews() {
        this.setState({
            loading: true})
        
        const random = Math.floor(Math.random() * 20)
        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiid}`)
                    .then(response => response.json()).then(data => {

                        console.log(data)
                        console.log(data.articles && data.articles.length, random)
                        if(this.state.news !== undefined){
                        this.setState({
                            loading: false,
                            news: data.articles[random] &&  data.articles[random].title
                            
    

                        })}else{
                            this.setState({
                                loading: true
                            })
                        }

                    })
      }
    
     componentWillUnmount() {
       clearInterval(this.interval);
     }

   

    render() {


        return (

            <nav>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {this.state.loading ? <h4>Loading....</h4> : <h4>{this.state.news}</h4>}
                        

                    </ul>
                </div>
            </nav>


        )
    }


}

export default Navbar