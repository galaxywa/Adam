import React from 'react'

function Main() {
  return ( <>
    <nav className="navbar">
    <div className="nav-logo">
        <a href="index.html">
        <img src="logo.svg" alt="logo" className="logo-link">
    </a>
    </div>

    <!-- desktop -->
    <div className="nav-links">
        <ul className="nav-list">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#tours" className="nav-link">Tours</a></li>
        </ul>
    </div>
    <div className="nav-icon">
        <ul className="nav-icons-list">
            <li>
                <a href="http://www.facebook.com" className="nav-icon">
                    <i className="fa-brands fa-facebook"></i>
                </a>   
            </li>

            <li>
                <a href="http://www.twitter.com" className="nav-icon">
                    <i className="fa-brands fa-twitter"></i>
                </a>   
            </li>

            <li>
                <a href="https://www.whatsapp.com/" className="nav-icon">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>   
            </li>  
        </ul>
    </div>

    <!-- mobile hamburger -->
    <div className="nav-mobile">
        <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fa-solid fa-bars"></i>
        </button>
    </div>
</nav>

<section className="hero" id="home">
    <div className="about-im">
        <!-- <img src="imgs.png" className="about-photo" alt="awesome landscape"> -->
    </div>
    </div>
    <div className="hero-banner">
        <h1>continue exploring</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <a href="#tours" className="btn hero-btn">explore tours</a>
    </div>
</section> 

<section className="section" id="about">
    <div className="section-title"> 
        <h2>about <span>us</span></h2>
    </div>
    <div className="section-center about-center">
        <div className="about-img">
            <img src="imgs.png" className="about-photo" alt="awesome landscape">
        </div>
    <article className="about-info">
        <h3>explore the difference</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, error officia odit recusandae doloremque in voluptatibus quo? Aspernatur, ipsa sunt?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vero placeat laborum voluptatibus accusantium voluptatum, numquam libero aspernatur laboriosam nesciunt.</p>
        <a href="#" className="btn">read more</a>
    </article>
</div>
</section>

<section className="section" id="services">
    <div className="section-title">
        <h2>our <span>service</span></h2>
    </div>
    <div className="section-center services-center">
        <article className="service">
            <span className="service-icon"><i className="fa-solid fa-wallet"></i></span>
        <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita tenetur quae neque voluptatibus nobis maxime mollitia? Quo, amet. Voluptates, rerum!</p>
        </div>
        </article>
        <article className="service">
            <span className="service-icon"><i className="fa-solid fa-wallet"></i></span>
        <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita tenetur quae neque voluptatibus nobis maxime mollitia? Quo, amet. Voluptates, rerum!</p>
        </div>
        </article>
        <article className="service">
            <span className="service-icon"><i className="fa-solid fa-wallet"></i></span>
        <div className="service-info">
            <h4 className="service-title">saving money</h4>
            <p className="service-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita tenetur quae neque voluptatibus nobis maxime mollitia? Quo, amet. Voluptates, rerum!</p>
        </div>
        </article>
    </div>
</section>

<section className="section" id="tours">
    <div className="section-title">
        <h2>featured <span>tours</span></h2>
    </div>
    <div className="section-center featured-center">
        <article className="tour-card">
            <div className="tour-img-container">
                <img src="./imgs.png" alt="" className="tour-img">
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quod qui voluptate placeat recusandae quos veniam cumque ut asperiores vitae amet sit culpa ea maiores vel, eveniet odio, ipsum hic.</p>
                <div className="tour-footer">
                    <ul className="tour-footer-info">
                        <li><i className="fa-solid fa-map">China</i></li>
                        <li>6 days</li>
                        <li>form $2100</li>
                    </ul>
                </div>
            </div>
        </article>
    </div>
</section>
</>
  )
}

export default Main