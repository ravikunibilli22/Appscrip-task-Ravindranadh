import { Component } from "react";
import { FiSearch } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import './index.css'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="top-head">
                    <div className="logo-container">
                        <img src="https://i.postimg.cc/BQdvWWFP/Logo.png" alt="logo" className="logo" />
                    </div>
                    <div className="logo-head">
                        <h1 className="logo-heading">LOGO</h1>
                    </div>
                    <div className="logo-icons-container">
                        <FiSearch className="icon"/>
                        <GrFavorite className="icon"/>
                        <TbShoppingBagPlus  className="icon"/>
                        <CiUser className="icon"/>
                        <p className="icon-a">ENG <IoIosArrowDown className="icon"/> </p>
                    </div>
                </div>
                <div className="logos-headings">
                    <h3 className="h3">SHOP</h3>
                    <h3 className="h3">SKILLS</h3>
                    <h3 className="h3">STORIES</h3>
                    <h3 className="h3">ABOUT</h3>
                    <h3 className="h3">CONTACT US</h3>
                </div>
                <hr />
            </div>
        )
    }
}

export default  Header