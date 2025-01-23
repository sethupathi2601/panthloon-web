import React from 'react'
import './Women.css'
import pic1 from './Men/1/pic1.jpg'
import pic2 from './Men/1/pic2.jpg'
import pic3 from './Men/1/pic3.jpg'
import pic4 from './Men/1/pic4.jpg'
import pic5 from './Men/1/pic5.jpg'
import pic6 from './Men/2/pic6.jpg'
import pic7 from './Men/2/pic7.avif'
import pic8 from './Men/2/pic8.jpg'
import pic9 from './Men/2/pic9.jpg'
import pic10 from './Men/2/pic10.webp'
import pic11 from './Men/3/pic11.jpg'
import pic12 from './Men/3/pic12.jpg'
import pic13 from './Men/3/pic13.jpg'
import pic14 from './Men/3/pic14.jpg'
import pic15 from './Men/3/pic15.jpg'
import pic16 from './Men/3/pic16.jpg'
import pic17 from './Men/4/pic17.jpg'
import pic18 from './Men/4/pic18.jpg'
import pic19 from './Men/4/pic19.jpg'
import pic20 from './Men/4/pic20.jpeg'
import pic21 from './Men/5/pic21.jpeg'
import pic22 from './Men/6/pic22.jpg'
import pic23 from './Men/6/pic23.jpg'
import pic24 from './Men/6/pic24.webp'
import pic25 from './Men/6/pic25.jpg'
import pic26 from './Men/7/pic26.jpg'
import pic27 from './Men/7/pic27.avif'
import pic28 from './Men/7/pic28.avif'
import pic29 from './Men/7/pic29.jpg'
import pic30 from './Men/7/pic30.jpg'
import pic31 from './Men/7/pic31.jpg'
import pic32 from './Men/7/pic32.png'









const Men = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide w-100" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={pic1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={pic2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={pic3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={pic4} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={pic5} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="container hot">
                <div class="row hot1">
                    <div class="col-lg-2">
                        <img src={pic6} alt="" />
                        <h4>Live Now</h4>
                    </div>
                    <div class="col-lg-2">
                        <img src={pic7} alt="" />
                        <h4>Winter Wear</h4>
                    </div>
                    <div class="col-lg-2">
                        <img src={pic8} alt="" />
                        <h4>Tops</h4>
                    </div>
                    <div class="col-lg-2">
                        <img src={pic9} alt="" />
                        <h4>Bottoms</h4>
                    </div>
                    <div class="col-lg-2">
                        <img src={pic10} alt="" />
                        <h4>Dress</h4>
                    </div>
                </div>
            </div>

            {/* next */}

            <div class="container">
                <div class="uou">
                    <h2>Styles Recommended for You</h2>
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner you">
                            <div class="carousel-item active">
                                <div class="d-flex gap-4">
                                    <div class="card" >
                                        <img src={pic11} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Rangmanch</h5>
                                            <p class="card-text">Turquoise Embroidered Below Waist Festive</p>
                                            <h6>₹991 <s>₹1999</s> <span>38% off</span></h6>
                                        </div>
                                    </div>
                                    <div class="card" >
                                        <img src={pic12} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Rangmanch</h5>
                                            <p class="card-text">Pink Embroidered Below Waist Festive</p>
                                            <h6>₹991 <s>₹1999</s> <span>38% off</span></h6>
                                        </div>
                                    </div>
                                    <div class="card" >
                                        <img src={pic13} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">dreamz</h5>
                                            <p class="card-text">Silver Solid Party Women Regular</p>
                                            <h6>₹ 2499  </h6>
                                            {/* {<!--<s>₹1999</s> <span>38% off</span></h6>-->} */}
                                        </div>
                                    </div>
                                    <div class="card" >
                                        <img src={pic14} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">annabelle</h5>
                                            <p class="card-text">Navy Solid Below Waist Sle...</p>
                                            <h6>₹991 <s>₹1999</s> <span>38% off</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex">
                                    <div class="card">
                                        <img src={pic12} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Rangmanch</h5>
                                            <p class="card-text">Pink Embroidered Below Waist Festive</p>
                                            <h6>₹991 <s>₹1999</s> <span>38% off</span></h6>
                                        </div>
                                    </div>
                                    <div class="card" >
                                        <img src={pic13} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">dreamz</h5>
                                            <p class="card-text">Silver Solid Party Women Regular</p>
                                            <h6>₹ 2499 </h6>
                                            {/* {<!--<s>₹1999</s> <span>38% off</span></h6>-->} */}
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={pic14} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">annabelle</h5>
                                            <p class="card-text">Navy Solid Below Waist Sle...</p>
                                            <h6>₹991 <s>₹1999</s> <span>38% off</span></h6>
                                        </div>
                                    </div>
                                    <div class="card" >
                                        <img src={pic15} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Bare denim</h5>
                                            <p class="card-text">Dark Olive Solid winterwear spr...</p>
                                            <h6>₹2015 <s>₹3599</s> <span>44% off</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex">
                                    <div class="card" >
                                        <img src={pic13} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">dreamz</h5>
                                            <p class="card-text">Silver Solid Party Women Regular</p>
                                            <h6>₹ 2499 </h6>
                                            {/* <!--<s>₹1999</s> <span>38% off</span></h6>--> */}
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={pic14} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">annabelle</h5>
                                            <p class="card-text">Navy Solid Below Waist Sle...</p>
                                            <h6>₹991 <s>₹1999</s> <span>38% off</span></h6>
                                        </div>
                                    </div>
                                    <div class="card" >
                                        <img src={pic15} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Bare denim</h5>
                                            <p class="card-text">Dark Olive Solid winterwear spr...</p>
                                            <h6>₹2015 <s>₹3599</s> <span>44% off</span></h6>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <img src={pic16} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Wine Printed All - Over Festivel...</p>
                                            <h6>₹2012 <s>₹3299</s> <span>39% off</span></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev btn-dark" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden h11">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="container occa">
                <h4>Shop by Occasion</h4>
                <div class="row occa1">
                    <div class="col-3">
                        <img src={pic17} alt="" />
                        <p>Sleep Bills</p>
                    </div>
                    <div class="col-3">
                        <img src={pic18} alt="" />
                        <p>Emboridered Fusion</p>
                    </div>
                    <div class="col-3">
                        <img src={pic19} alt="" />
                        <p>Mosaic  mirrage</p>
                    </div>
                    <div class="col-3">
                        <img src={pic20} alt="" />
                        <p>Trendy Towsours</p>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="container chill">
                <img src={pic21} alt="" />
            </div>
            {/* next */}
            <div class="container swet">
                <div class="row ">
                    <div class="col-3">
                        <div class="card" >
                            <img src={pic22} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">sweaters</h5>
                                <p><a href="#" >Shop Now!</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" >
                            <img src={pic23} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">sweatshirts</h5>
                                <p><a href="#" >Shop Now!</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" >
                            <img src={pic24} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">jackets</h5>
                                <p><a href="#" >Shop Now!</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="card" >
                            <img src={pic25} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">accessories</h5>
                                <p><a href="#" >Shop Now!</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="container ">
                <div class="uou">
                    <div id="carouselExampleFade" class="carousel slide carousel-fade">
                        <div class="carousel-inner you2 imag-container">
                            <div class="carousel-item active d-flex  ">
                                <div class="col-lg-3">
                                    <div class="card " >
                                        <img src={pic26} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Medium Blue Printed blow wist...</p>
                                            <h6>₹797 <s>₹1049</s> <span>24% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="card ">
                                        <img src={pic27} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Pink Blue Printed blow wist...</p>
                                            <h6>₹991<s>₹1549</s> <span>38% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="card" >
                                        <img src={pic28} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">akkriti</h5>
                                            <p class="card-text">edium Blue Printed blow wist...</p>
                                            <h6>₹797 <s>₹1049</s> <span>33% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3">
                                    <div class="card" >
                                        <img src={pic29} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Green Blue Printed blow wist...</p>
                                            <h6>₹ 3499 </h6>
                                            {/* <!--<s>₹1049</s> <span>44% off</span></h6>--> */}
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item d-flex">
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic27} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Pink Blue Printed blow wist...</p>
                                            <h6>₹991<s>₹1549</s> <span>38% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic28} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">akkriti</h5>
                                            <p class="card-text">edium Blue Printed blow wist...</p>
                                            <h6>₹797 <s>₹1049</s> <span>33% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic29} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Green Blue Printed blow wist...</p>
                                            <h6>₹ 3499 </h6>
                                            {/* <!--<s>₹1049</s> <span>44% off</span></h6>--> */}
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic30} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">latin quarters</h5>
                                            <p class="card-text">Light Green Solid Casual...</p>
                                            <h6>₹4199 <s>₹5999</s> <span>30% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item d-flex ">
                                <div class="col-lg-3">
                                    <div class="card">
                                        <img src={pic28} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">akkriti</h5>
                                            <p class="card-text">edium Blue Printed blow wist...</p>
                                            <h6>₹797 <s>₹1049</s> <span>33% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic29} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">rangmanch</h5>
                                            <p class="card-text">Green Blue Printed blow wist...</p>
                                            <h6>₹ 3499 </h6>
                                            {/* <!--<s>₹1049</s> <span>44% off</span></h6>--> */}
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic30} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">latin quarters</h5>
                                            <p class="card-text">Light Green Solid Casual...</p>
                                            <h6>₹4199 <s>₹5999</s> <span>30% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="card" >
                                        <img src={pic31} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">latin quarters</h5>
                                            <p class="card-text">Light Blue Solid Casual...</p>
                                            <h6>₹4059 <s>₹5799</s> <span>30% off</span></h6>
                                            <div class="overlay-text">
                                                <a href="#">
                                                    <i class="bi bi-heart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                                        </svg>
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon " aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="floaat">
                <span>

                    <img src={pic32} alt="" />

                </span>
            </div>
        </div>
    )
}

export default Men