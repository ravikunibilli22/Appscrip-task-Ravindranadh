import { Component } from "react";
import Header from '../Header'
import FilterProducts from "../FilterProducts";
import Footer from '../Footer'

import './index.css'

class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="header-container">
                    <Header/>
                </div>
                <hr/>
                <div className="main-head-container">
                    <div className="main-head">
                        <h1 className="main-h1">DISCOVER OUR PRODUCTS</h1> 
                    </div>
                    <div className="main-content">
                        <p className="main-p">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                    </div>
                </div>
                <hr/>
                <div className="products-container">
                    <FilterProducts/>
                </div>
                <div className="footer-container">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Home