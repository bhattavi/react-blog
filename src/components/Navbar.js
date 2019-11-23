import React from 'react'
import { Link } from 'react-router-dom'


const API_KEY = process.env.REACT_APP_API_KEY;

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            news1: [],
            news2: [],
            news3: [],
            news4: [],
            news5: [],
            news6: [],
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
            loading: true
        })


        const arr = [];
        while (arr.length < 8) {
            const r = Math.floor(Math.random() * 20);
            if (arr.indexOf(r) === -1) arr.push(r);
        }

        await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            .then(response => response.json()).then(data => {



                if (this.state.news1 !== undefined) {
                    this.setState({
                        loading: false,
                        news1: data.articles[arr[1]] && data.articles[arr[1]].title,
                        news2: data.articles[arr[2]] && data.articles[arr[2]].title,
                        news3: data.articles[arr[3]] && data.articles[arr[3]].title,
                        news4: data.articles[arr[4]] && data.articles[arr[4]].title,
                        news5: data.articles[arr[5]] && data.articles[arr[5]].title,
                        news6: data.articles[arr[6]] && data.articles[arr[6]].title,

                    })
                } else {
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
                <div className="border border-primary" >
                    <ul className="list-group border border-primary"
                        style={
                            { width: "250px"}
                        } >
                        <li className="list-group-item btn btn-secondary" > < Link to="/" > < h3 > Home </h3></Link > </li> <li className="list-group-item" > <h4 style={
                            { textAlign: "center" }
                        } >
                            <span className="text-primary" > G </span>
                            <span className="text-danger" > o </span>
                            <span className="text-warning" > o </span>
                            <span className="text-primary" > g </span>
                            <span className="text-success" > l </span>
                            <span className="text-danger" > e </span>
                            <span className="text-dark" > News </span>

                        </h4></li > {
                            this.state.loading ? < h4 className="list-group-item" style={{ textAlign: "center" }}> Loading.... </h4> :
                                <ul className="list-group-item" >
                                    <li className="list-group-item text-primary" > < h6 > {this.state.news1} </h6></li >
                                    <li className="list-group-item text-danger" > < h6 > {this.state.news2} </h6></li >
                                    <li className="list-group-item text-warning" > < h6 > {this.state.news3} </h6></li >
                                    <li className="list-group-item text-primary" > < h6 > {this.state.news4} </h6></li >
                                    <li className="list-group-item text-success" > < h6 > {this.state.news5} </h6></li >
                                    <li className="list-group-item text-danger" > < h6 > {this.state.news6} </h6></li >
                                </ul>

                        }


                    </ul>
                </div >
            </nav>



        )
    }


}

export default Navbar