import React from 'react'
import './Home.css'
import first from '../pages/Homeimage/1/first.jpg'
import second from '../pages/Homeimage/1/second.jpg'
import third from '../pages/Homeimage/1/third.jpg'
import four from '../pages/Homeimage/1/four.jpg'
import five from '../pages/Homeimage/1/five.jpg'
import six from '../pages/Homeimage/1/six.jpg'
import sale from '../pages/Homeimage/2/sale.jpg'
import winter from '../pages/Homeimage/2/winter.jpg'
import women from '../pages/Homeimage/2/women.jpg'
import men from '../pages/Homeimage/2/men.jpg'
import kids from '../pages/Homeimage/2/kids.jpg'
import fir from '../pages/Homeimage/2/fir.jpg'
import sec from '../pages/Homeimage/2/sec.jpg'
import pic1 from '../pages/Homeimage/3/pic1.jpg'
import pic2 from '../pages/Homeimage/3/pic2.jpg'
import pic3 from '../pages/Homeimage/4/pic3.webp'
import pic4 from '../pages/Homeimage/4/pic4.png'
import pic5 from '../pages/Homeimage/4/pic5.jpg'
import pic6 from '../pages/Homeimage/4/pic6.jpg'
import pic7 from '../pages/Homeimage/4/pic7.jpg'
import pic8 from '../pages/Homeimage/5/pic8.jpg'
import pic9 from '../pages/Homeimage/5/pic9.jpg'
import pic10 from '../pages/Homeimage/5/pic10.jpeg'
import pic11 from '../pages/Homeimage/5/pic11.avif'
import pic12 from '../pages/Homeimage/5/pic12.jpg'
import pic13 from '../pages/Homeimage/5/pic13.jpg'
import pic14 from '../pages/Homeimage/6/pic14.jpg'
import pic15 from '../pages/Homeimage/6/pic15.jpg'
import pic16 from '../pages/Homeimage/6/pic16.jpg'
import pic17 from '../pages/Homeimage/6/pic17.jpg'
import pic18 from '../pages/Homeimage/6/pic18.jpeg'
import pic19 from '../pages/Homeimage/7/pic19.jpeg'
import pic20 from '../pages/Homeimage/7/pic20.jpeg'
import pic21 from '../pages/Homeimage/7/pic21.jpeg'
import pic22 from '../pages/Homeimage/7/pic22.jpeg'
import pic23 from '../pages/Homeimage/8/pic23.webp'
import pic24 from '../pages/Homeimage/8/pic24.png'
import pic25 from '../pages/Homeimage/8/pic25.jpg'
import pic26 from '../pages/Homeimage/8/pic26.jpg'
import pic27 from '../pages/Homeimage/8/pic27.jpg'
import v1 from '../pages/Homeimage/video/v1.mp4'
import pic28 from '../pages/Homeimage/9/pic28.jpeg'
import pic29 from '../pages/Homeimage/9/pic29.jpg'
import pic30 from '../pages/Homeimage/9/pic30.jpg'
import pic31 from '../pages/Homeimage/9/pic31.jpg'
import pic32 from '../pages/Homeimage/9/pic32.webp'
import pic33 from '../pages/Homeimage/9/pic33.png'








const Home = () => {
    return (
        <div>
            {/* slide */}
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={first} class=" d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={second} class=" d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={third} class=" d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={four} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={five} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={six} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            {/* next */}
            <div class="container">
                <div class="row car1">
                    <div class="col">
                        <a href="#">
                            <img src={sale} alt="" />
                            <p>LIVE NOW</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <img src={winter} alt="" />
                            <p>WINTER EDIT</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <img src={women} alt="" />
                            <p>WOEMEN</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <img src={men} alt="" />
                            <p>MEN</p>
                        </a>
                    </div>
                    <div class="col">
                        <a href="#">
                            <img src={kids} alt="" />
                            <p>KIDS</p>
                        </a>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="row car2">
                <div div class="col-6 " >
                    <div class="image-container">
                        <img src={fir} alt="" />
                        <div class="mask text-light d-flex justify-content-center flex-column text-center sha"  >
                            <div class="shadow-lg p-3 mb-5 bg-white rounded overlay-text">
                                <h4>Edgy Layers</h4>
                                <p>Warm up in style with the colorblocked jackets</p>
                                <h4>SHOP NOW</h4>
                            </div>
                        </div>
                    </div>
                </div >
                <div class="col-6 ">
                    <div class="imag-container">
                        <img src={sec} alt="" />
                        <div class="mask text-light d-flex justify-content-center flex-column text-center sha"  >
                            <div class="shadow-lg p-3 mb-5 bg-white rounded overlay-tex">
                                <h4>Edgy Layers</h4>
                                <p>Warm up in style with the colorblocked jackets</p>
                                <h4>SHOP NOW</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div class="row car2">
                <div class="col-6  ">
                    <div class="image-container">
                        <img src={pic1} alt="" />
                        <div class="mask text-light d-flex justify-content-center flex-column text-center sha"  >
                            <div class="shadow-lg p-3 mb-5 bg-white rounded overlay-text">
                                <h4>Edgy Layers</h4>
                                <p>Warm up in style with the colorblocked jackets</p>
                                <h4>SHOP NOW</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6  ">
                    <div class="imag-container">
                        <img src={pic2} alt="" />
                        <div class="mask text-light d-flex justify-content-center flex-column text-center sha"  >
                            <div class="shadow-lg p-3 mb-5 bg-white rounded overlay-tex">
                                <h4>Edgy Layers</h4>
                                <p>Warm up in style with the colorblocked jackets</p>
                                <h4>SHOP NOW</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="line1">
                <div class="line">

                </div>
            </div>
            {/* next */}
            <div class="just">
                <h2>JUST IN</h2>
                <div class="all">
                    <ul>
                        <li><button type="submit"><input type="radio" name="all" value="all" />All</button></li>
                        <li><button type="menu"><input type="radio" name="all" value="all" />Men</button></li>
                        <li><button type="button"><input type="radio" name="all" value="all" />Women</button></li>
                        <li><button type="button"><input type="radio" name="all" value="all" />Boys</button></li>
                        <li><button type="button"><input type="radio" name="all" value="all" />Girls</button></li>
                        <li><button type="button"><input type="radio" name="all" value="all" />Home Decor</button></li>
                        <li><button type="button"><input type="radio" name="all" value="all" />Unisex</button></li>
                        <li><button type="button"><input type="radio" name="all" value="all" />Baby</button></li>
                    </ul>
                </div>
            </div>

            <div class="container-xxl ainer ">
                <div class="shadow-lg p-3 mb-5 bg-white rounded shad">
                    <div class="row  " >
                        <div class="col-lg-2 lan">
                            <h2>
                                Just in <br />
                                <h1>2275</h1>
                                <h4>NEW STYLE JUST LANDED</h4>
                                <button>Shop Now <i class="bi bi-caret-right-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg></i></button>
                            </h2>
                        </div>
                        <div class="col-lg-2 lan1">
                            <img src={pic3} alt="" />
                            <h4>VH SHORT</h4>
                            <p>
                                Navy Striped Casual Half...
                                <h3>₹ 2,299</h3>
                            </p>
                        </div>
                        <div class="col-lg-2 lan1">
                            <img src={pic4} alt="" />
                            <h4>VH SHORT</h4>
                            <p>
                                Navy Striped Casual Half...
                                <h3>₹ 2,299</h3>
                            </p>
                        </div>
                        <div class="col-lg-2 lan1">
                            <img src={pic5} alt="" />
                            <h4>VH SHORT</h4>
                            <p>
                                Navy Striped Casual Half...
                                <h3>₹ 2,299</h3>
                            </p>
                        </div>
                        <div class="col-lg-2 lan1">
                            <img src={pic6} alt="" />
                            <h4>VH SHORT</h4>
                            <p>
                                Navy Striped Casual Half...
                                <h3>₹ 2,299</h3>
                            </p>
                        </div>
                        <div class="col-lg-2 lan1">
                            <img src={pic7} alt="" />
                            <h4>VH SHORT</h4>
                            <p>
                                Navy Striped Casual Half...
                                <h3>₹ 2,299</h3>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="some">
                <div class="some1 ">
                    <div class="some2">
                        <h1>Style Finder.</h1>
                        <p>Looking for something specific? Let’s get you there</p>
                    </div>
                    <div class="some3">
                        <h4>shop for</h4>
                    </div>
                    <div class="some4">
                        <ol>
                            <li><button type="button">Women</button></li>
                            <li><button type="button">Men</button></li>
                            <li><button type="button">Kids</button></li>
                            <li><button type="button">Home</button></li>
                        </ol>
                    </div>
                    <div class="some5">
                        <h4>Occasion</h4>
                    </div>
                    <div class="some6">
                        <div class="some6-1">
                            <img src={pic8} alt="" />
                            <h6>PARTY</h6>
                        </div>
                        <div>
                            <img src={pic9} alt="" />
                            <h6>WORK WEAR</h6>
                        </div>
                        <div>
                            <img src={pic10} alt="" />
                            <h6>FESTVEL</h6>
                        </div>
                        <div>
                            <img src={pic11} alt="" />
                            <h6>LOUUNGWEAR</h6>
                        </div>
                        <div>
                            <img src={pic12} alt="" />
                            <h6>ATHLEISURE</h6>
                        </div>
                        <div>
                            <img src={pic13} alt="" />
                            <h6>WINTER</h6>
                        </div>
                    </div>
                    <div> <h4>Show Me</h4></div>
                    <div class=" some7">
                        <button>Most Popular <i class="bi bi-chevron-right old"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg></i></button>
                        <button>Latest  <i class="bi bi-chevron-right old"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg></i></button>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="day">
                <div class="day1">
                    <h3>Deals Of The Day</h3>
                </div>
                <div class="row day2">
                    <div class="col-lg-2 ">
                        <div class="card">
                            <img src={pic14} class="card-img-top" alt="..." />
                            <p>31% Off</p>
                            <h1>BIBA</h1>
                            <h6>Black Printed casual wom...</h6>
                            <h3>₹ 2,759 <span><s>₹3,499</s></span></h3>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class=" card card1" >
                            <img src={pic15} class="card-img-top" alt="..." />
                            <p>31% Off</p>
                            <h1>BIBA</h1>
                            <h6>Pink Print Calf Lenght C...</h6>
                            <h3>₹ 2,759 <span><s>₹3,499</s></span></h3>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="card card2" >
                            <img src={pic16} class="card-img-top" alt="..." />
                            <p>31% Off</p>
                            <h1>GLOBAL DESI</h1>
                            <h6>Medium Blue Embroidered...</h6>
                            <h3>₹ 2,759 <span><s>₹3,499</s></span></h3>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="card card3">
                            <img src={pic17} class=" card-img-top" alt="..." />
                            <p>31% Off</p>
                            <h1>GLOBAL DESI</h1>
                            <h6>Maroon Printed casual se...</h6>
                            <h3>₹ 2,759 <span><s>₹3,499</s></span></h3>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="card card4" >
                            <img src={pic18} class=" card-img-top" alt="..." />
                            <p>31% Off</p>
                            <h1>GLOBAL DESI</h1>
                            <h6>Medium Grey Print cott...</h6>
                            <h3>₹ 2,759 <span><s>₹3,499</s></span></h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="style">
                <div class="d-flex ">
                    <div class="col-lg-4 style1">

                    </div>
                    <div class="col-lg-4 style2">
                        <h1>Treanding Styles</h1>
                    </div>
                    <div class="col-lg-4 style3">

                    </div>
                </div>
                <div class="row kurtas">
                    <div class="col-lg-3 ">
                        <div class="card" /*style="width: 16rem; "*/ >
                            <img src={pic19} class="card-img-top" alt="..." />
                        </div>
                        <a href="#">
                            <p><i class="bi bi-caret-right-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg></i> Printed-Perfect Kurtas.</p>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" /*style="width: 16rem;"*/>
                            <img src={pic20} class="card-img-top" alt="..." />
                        </div>
                        <a href="#">
                            <p><i class="bi bi-caret-right-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg></i> Early Elegance.</p>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" /* style = "width: 16rem;"*/>
                            <img src={pic21} class="card-img-top" alt="..." />
                        </div>
                        <a href="#">
                            <p><i class="bi bi-caret-right-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg></i> Character Chic</p>
                        </a>
                    </div>
                    <div class="col-lg-3">
                        <div class="card" /*style="width: 16rem;"*/>
                            <img src={pic22} class="card-img-top" alt="..." />
                        </div>
                        <a href="#">
                            <p><i class="bi bi-caret-right-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg></i> Classic Appeal</p>
                        </a>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="Lock">
                <h3>Shop The Lock</h3>
                <div class="row column-gap-5 lock">
                    <div class="col-lg-2 Lock1">
                        <div class="card" /*style="width: 14rem;"*/>
                            <img src={pic23} class="card-img-top " alt="..." />
                            <div class="buutt">
                                <a href="#">
                                    <i class="bi bi-bag-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                                    </svg></i> Shop All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 Lock2">
                        <div class="card" /*style="width: 16rem;"*/>
                            <img src={pic24} class="card-img-top " alt="..." />
                            <div class="buutt">
                                <a href="#">
                                    <i class="bi bi-bag-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                                    </svg></i> Shop All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 Lock3">
                        <div class="card" /*style="width: 16rem;"*/>
                            <img src={pic25} class="card-img-top" alt="..." />
                            <div class="buutt">
                                <a href="#">
                                    <i class="bi bi-bag-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                                    </svg></i> Shop All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 Lock4">
                        <div class="card" /*style="width: 16rem;"*/>
                            <img src={pic26} class="card-img-top" alt="..." />
                            <div class="buutt">
                                <a href="#">
                                    <i class="bi bi-bag-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                                    </svg></i> Shop All
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 Lock5">
                        <div class="card" /*style="width: 14rem;"*/>
                            <img src={pic27} class="card-img-top  " alt="..." />
                            <div class="buutt">
                                <a href="#">
                                    <i class="bi bi-bag-fill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                                    </svg></i> Shop All
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* next */}
            <div class="deo">
                <video src={v1} controls width="1400px" height="800px"></video>
            </div>
            {/* next */}
            <div class="love">
                <h3>Brands You Love</h3>
                <div id="carouselExampleFade" class="carousel slide carousel-fade love2">
                    <div class="carousel-inner love1">
                        <div class="carousel-item active d-flex column-gap-4">
                            <div class="mf">
                                <div class="card" /*style="width: 18rem; margin-left: 150px; "*/>
                                    <img src={pic28} class="card-img-top love3" alt="..." />
                                </div>
                            </div>
                            <div class="card" /*style="width: 18rem;"*/>
                                <img src={pic29} class="card-img-top" alt="..." />
                            </div>
                            <div class="card" /*style="width: 18rem;"*/>
                                <img src={pic30} class="card-img-top" alt="..." />
                            </div>
                            <div class="card" /*style="width: 18rem; margin-right: 170px;"*/>
                                <img src={pic31} class="card-img-top love4" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-item  d-flex column-gap-4">
                            <div class="mf">
                                <div class="card" /*style="width: 18rem; margin-left: 150px; "*/>
                                    <img src={pic29} class="card-img-top love3" alt="..." />
                                </div>
                            </div>
                            <div class="card" /*style="width: 18rem;"*/>
                                <img src={pic30} class="card-img-top" alt="..." />
                            </div>
                            <div class="card" /*style="width: 18rem;"*/>
                                <img src={pic31} class="card-img-top" alt="..." />
                            </div>
                            <div class="card" /*style="width: 18rem; margin-right: 170px;"*/>
                                <img src={pic32} class="card-img-top love4" alt="..." />
                            </div>
                        </div>
                        <div class="carousel-item d-flex column-gap-5">
                            <div class="mf">
                                <div class="card" /*style="width: 18rem; margin-left: 150px;"*/>
                                    <img src={pic30} class="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div class="card" /*style="width: 18rem;"*/>
                                <img src={pic31} class="card-img-top" alt="..." />
                            </div>
                            <div class="card" /*style="width: 18rem;"*/>
                                <img src={pic32} class="card-img-top" alt="..." />
                            </div>
                            <div class="card" /*style="width: 18rem; margin-right: 170px;"*/>
                                <img src={pic33} class="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div >
            </div >
        </div >
    )
}

export default Home
