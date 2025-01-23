import React from 'react'
import './Navbar.css'
import logo1 from '../images/logo1.png'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <><div>
            <div class="row car">
                <div class="col-lg-1">
                    <Link to='/'><a href="home.html" ><img src={logo1} alt="sethu" /></a></Link>
                </div>
                <div class="col-lg-1 row1 row1-1">
                    <Link to='/women'><a href="women.html"> WOMEN</a></Link>
                </div>
                <div class="col-lg-1 row1">
                    <Link to='/men'><a href="men.html"> MEN</a></Link>
                </div>
                <div class="col-lg-1 row1">
                    <a href="#">KIDS</a>
                </div>
                <div class="col-lg-1 row1">
                    <a href="#"> HOME</a>
                </div>
                <div class="col-lg-1 row1">
                    <a href="#"> BRANDS</a>
                </div>
                <div class="col-lg-1 row1">
                    <a href="#"> SALE ON LIVE</a>
                </div>
                <div class="col-lg-1">
                    <div class="d-flex sea">
                        <i class="bi bi-search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></i><input type="text" placeholder="search" />
                    </div>
                    <div class="with">

                    </div>
                </div>
                <div class="d-flex col-lg-1 hea">
                    <div>
                        <i class="bi bi-heart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </i>
                    </div>
                    <div>
                        <i class="bi bi-person">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                        </i>
                    </div>
                    <div>
                        <i class="bi bi-cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                            </svg>
                        </i>
                    </div>
                </div>
                <div class="col-lg-2 fash">
                    <img src={logo} alt="" />
                </div>

            </div>

        </div><br /></>


    )
}

export default Navbar
