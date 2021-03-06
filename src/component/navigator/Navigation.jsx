import React, {Component} from 'react';
import Logo from "../../css/img/logo.PNG";

class Navigation extends Component {
    render() {
        return (
            <div>
                <header className="header-section">
                    <div className="header-top">
                        <div className="container">
                            <div className="ht-left">
                                <div className="mail-service">
                                    <i className=" fa fa-envelope"></i>
                                    fashion@gmai.com
                                </div>
                                <div className="phone-service">
                                    <i className=" fa fa-phone"></i>
                                    +94 777885111
                                </div>
                            </div>
                            <div className="ht-right">
                                <a href="/login" className="login-panel"><i className="fa fa-user"></i>Login</a>

                                <div className="top-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="ti-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <img src={Logo} width="200" height="75" />


                    <div className="nav-item">
                        <div className="container">
                            <div className="nav-depart">
                                <div className="depart-btn">
                                    <i className="ti-menu"></i>
                                    <span>All departments</span>
                                    <ul className="depart-hover">
                                        <li className="active"><a href="#">Women’s Clothing</a></li>
                                        <li><a href="#">Men’s Clothing</a></li>
                                        <li><a href="#">Accessories/Shoes</a></li>

                                    </ul>
                                </div>
                            </div>
                            <nav className="nav-menu mobile-menu">
                                <ul>
                                    <li className="active"><a href="./index.html">Home</a></li>
                                    <li><a href="./shop.html">Shop</a></li>
                                    <li><a href="#">Collection</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Men's</a></li>
                                            <li><a href="#">Women's</a></li>
                                            <li><a href="#">Accessories/Shoes</a></li>
                                        </ul>
                                    </li>

                                    <li><a href="../../compound/Contactus">Contact</a></li>
                                    <li><a href="#">More</a>
                                        <ul className="dropdown">
                                            <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                            <li><a href="./check-out.html">Checkout</a></li>

                                            <li><a href="./register.html">Register</a></li>
                                            <li><a href="./login.html">Login</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div id="mobile-menu-wrap"></div>
                        </div>
                    </div>





                </header>


            </div>
        );
    }
}

export default Navigation;
