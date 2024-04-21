import { Component } from "react";

import ProductsSection from "../ProductsSection";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";

import './index.css'


class FilterProducts extends Component{
    render(){
        return(
            <div>
                <div className="products-head">
                    <div className="productr-head-2">
                        <h3>3425ITEMS</h3>
                        <p className="hide-filter"> <MdOutlineKeyboardArrowLeft/>  HIDE FILTER</p>
                    </div>
                    <p>RECOMENDED <IoChevronDownSharp/> </p>
                </div>
                <hr/>
                <div>
                    <nav className="nav-bar">
                        <input
                        type="checkbox"
                        id="CUSTOMIZBLE"
                        />
                        <label>CUSTOMIZBLE</label>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3 className="fil-head">IDEAL FOR</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">OCCASION</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">WORK</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">FABRIC</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">SEGMENT</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">SUITABLE FOR</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">RAW MATERIALS </h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                        <div className="filter-item">
                            <div>
                                <h3  className="fil-head">PATTERN</h3>
                                <p className="fill-all">ALL</p>
                            </div>
                            <div>
                                <IoChevronDownSharp/>
                            </div>
                        </div>
                        <hr/>
                    </nav>
                    <div className="products">
                        <ProductsSection/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterProducts