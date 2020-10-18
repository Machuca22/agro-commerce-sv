import React, { Component } from 'react'
class Home extends Component {
    render() {
        return (
            <div className="row ">
                <div className="medium-12 columns">

                    <header>

                        <div id="header">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="header-logo">
                                            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                                                <img src="./img/logo.png" className="githubIcon" alt="" />
                                            </a>

                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="header-search">
                                            <form>
                                                <select class="input-select">
                                                    <option value="0">Categoria</option>
                                                    <option value="1">Category 01</option>
                                                    <option value="1">Category 02</option>
                                                </select>
                                                <input class="input" placeholder="Ingresa una palabra" />
                                                <button class="search-btn">Buscar</button>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix">
                                        <div class="header-ctn">


                                            <div class="dropdown">
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                                                    <i class="fa fa-shopping-cart"></i>
                                                    <span>Carrito</span>
                                                    <div class="qty">3</div>
                                                </a>
                                                <div class="cart-dropdown">
                                                    <div class="cart-list">
                                                        <div class="product-widget">
                                                            <div class="product-img">
                                                                <img src="./img/product01.png" alt="" />
                                                            </div>
                                                            <div class="product-body">
                                                                <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                                <h4 class="product-price"><span class="qty">1x</span>$15.00</h4>
                                                            </div>
                                                            <button class="delete"><i class="fa fa-close"></i></button>
                                                        </div>

                                                        <div class="product-widget">
                                                            <div class="product-img">
                                                                <img src="./img/product02.png" alt="" />
                                                            </div>
                                                            <div class="product-body">
                                                                <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                                <h4 class="product-price"><span class="qty">3x</span>$15.00</h4>
                                                            </div>
                                                            <button class="delete"><i class="fa fa-close"></i></button>
                                                        </div>
                                                    </div>
                                                    <div class="cart-summary">
                                                        <small>3 Item(s) selected</small>
                                                        <h5>SUBTOTAL: $2940.00</h5>
                                                    </div>
                                                    <div class="cart-btns">
                                                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >View Cart</a>
                                                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Checkout <i class="fa fa-arrow-circle-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                                                    <i class="fa fa-user"></i>
                                                    <span>Ingresar</span>

                                                </a>
                                            </div>
                                            <div class="menu-toggle">
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                                                    <i class="fa fa-bars"></i>
                                                    <span>Menu</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>



                    <nav id="navigation">
                        <div class="container">
                            <div id="responsive-nav">
                                <ul class="main-nav nav navbar-nav">
                                    <li class="active"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Inicio</a></li>
                                    <li ><a className="App-link" href="/productos" target="_blank" rel="noopener noreferrer" >Productos</a></li>
                                    <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Veterinarios</a></li>
                                    <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Consulta</a></li>
                                    <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Contactos</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-xs-6">
                                    <div class="shop">
                                        <div class="shop-img">
                                            <img src="./img/shop01.png" alt="" />
                                        </div>
                                        <div class="shop-body">
                                            <h3>Concentrado<br />Lechero 22</h3>
                                            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" class="cta-btn">Super precio<i class="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-xs-6">
                                    <div class="shop">
                                        <div class="shop-img">
                                            <img src="./img/shop03.png" alt="" />
                                        </div>
                                        <div class="shop-body">
                                            <h3>Croquetas de sabores <br />Felix</h3>
                                            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" class="cta-btn">Super precio <i class="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-xs-6">
                                    <div class="shop">
                                        <div class="shop-img">
                                            <img src="./img/shop02.png" alt="" />
                                        </div>
                                        <div class="shop-body">
                                            <h3>Pedigri <br />Campeon</h3>
                                            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" class="cta-btn">Shop now <i class="fa fa-arrow-circle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="section-title">
                                        <h3 class="title">Nuevos Productos</h3>
                                        <div class="section-nav">
                                            <ul class="section-tab-nav tab-nav">
                                                <li class="active"><a data-toggle="tab" href="#tab1">Perros</a></li>
                                                <li><a data-toggle="tab" href="#tab1">Gatos</a></li>
                                                <li><a data-toggle="tab" href="#tab1">Vacas</a></li>
                                                <li><a data-toggle="tab" href="#tab1">Cerdos</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="products-tabs">
                                            <div id="tab1" class="tab-pane active">
                                                <div class="products-slick" data-nav="#slick-nav-1">
                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product01.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="sale">-30%</span>
                                                                <span class="new">NEW</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Concentrado Alianza </a></h3>
                                                            <h4 class="product-price">$20.00 <del class="product-old-price">$22.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product02.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="new">NEW</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Bomba Manual</a></h3>
                                                            <h4 class="product-price">$20.00 <del class="product-old-price">$25.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-o"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product03.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="sale">-30%</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Lechero 15</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product04.png" alt="" />
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Tazon de croquetas</a></h3>
                                                            <h4 class="product-price">$8.00 <del class="product-old-price">$9.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product05.png" alt="" />
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="slick-nav-1" class="products-slick-nav"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="hot-deal" class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hot-deal">
                                        <ul class="hot-deal-countdown">
                                            <li>
                                                <div>
                                                    <h3>31</h3>
                                                    <span>Dias</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h3>8</h3>
                                                    <span>Hours</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h3>59</h3>
                                                    <span>Mins</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <h3>60</h3>
                                                    <span>Secs</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <h2 class="text-uppercase">Promocion del mes</h2>
                                        <p>Cemilla forticada,UREA, Y FERTI MAIZ 50% DE DESCUENTO</p>
                                        <a class="primary-btn cta-btn" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="container">
                            <div class="row">

                                <div class="col-md-12">
                                    <div class="section-title">
                                        <h3 class="title">PRODUCTOS MAS VENDIDOS</h3>

                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="products-tabs">
                                            <div id="tab2" class="tab-pane fade in active"  >
                                                <div class="products-slick" data-nav="#slick-nav-2">
                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product06.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="sale">-30%</span>
                                                                <span class="new">NEW</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product07.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="new">NEW</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-o"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product08.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="sale">-30%</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product09.png" alt="" />
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="slick-nav-2" class="products-slick-nav"></div>
                                            </div>

                                            <div id="tab2" class="tab-pane fade in active" style={{ marginBottom: '-1%;' }}>

                                                <div class="products-slick" data-nav="#slick-nav-2">
                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product06.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="sale">-30%</span>
                                                                <span class="new">NEW</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product07.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="new">NEW</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star-o"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product08.png" alt="" />
                                                            <div class="product-label">
                                                                <span class="sale">-30%</span>
                                                            </div>
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>

                                                    <div class="product">
                                                        <div class="product-img">
                                                            <img src="./img/product09.png" alt="" />
                                                        </div>
                                                        <div class="product-body">
                                                            <p class="product-category">Category</p>
                                                            <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                            <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del>
                                                            </h4>
                                                            <div class="product-rating">
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                                <i class="fa fa-star"></i>
                                                            </div>
                                                            <div class="product-btns">
                                                                <button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span
                                                                    class="tooltipp">add to wishlist</span></button>
                                                                <button class="add-to-compare"><i class="fa fa-exchange"></i><span
                                                                    class="tooltipp">add to compare</span></button>
                                                                <button class="quick-view"><i class="fa fa-eye"></i><span
                                                                    class="tooltipp">quick view</span></button>
                                                            </div>
                                                        </div>
                                                        <div class="add-to-cart">
                                                            <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> Agregar
                                            al carrito</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="slick-nav-2" class="products-slick-nav"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="hot-deal2" class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="hot-deal">

                                        <h2 class="text-uppercase" style={{ padding: '7%' }}>RECUERDA SIEMPRE</h2>
                                        <p>LLEVAR UN CONTROL MEDICO DE TUS MASCOTAS</p>
                                        <a class="primary-btn cta-btn" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Agendar cita medica</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-xs-6">
                                    <div class="section-title">
                                        <h4 class="title">PRODUCTOS MAS VENDIDOS</h4>
                                        <div class="section-nav">
                                            <div id="slick-nav-3" class="products-slick-nav"></div>
                                        </div>
                                    </div>

                                    <div class="products-widget-slick" data-nav="#slick-nav-3">
                                        <div>
                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product07.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product08.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product09.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product01.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product02.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product03.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-xs-6">
                                    <div class="section-title">
                                        <h4 class="title">PRODUCTOS MAS VENDIDOS</h4>
                                        <div class="section-nav">
                                            <div id="slick-nav-4" class="products-slick-nav"></div>
                                        </div>
                                    </div>

                                    <div class="products-widget-slick" data-nav="#slick-nav-4">
                                        <div>
                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product04.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product05.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product06.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product07.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product08.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product09.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="clearfix visible-sm visible-xs"></div>

                                <div class="col-md-4 col-xs-6">
                                    <div class="section-title">
                                        <h4 class="title">PRODUCTOS MAS VENDIDOS</h4>
                                        <div class="section-nav">
                                            <div id="slick-nav-5" class="products-slick-nav"></div>
                                        </div>
                                    </div>

                                    <div class="products-widget-slick" data-nav="#slick-nav-5">
                                        <div>
                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product01.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product02.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product03.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product04.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product05.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>

                                            <div class="product-widget">
                                                <div class="product-img">
                                                    <img src="./img/product06.png" alt="" />
                                                </div>
                                                <div class="product-body">
                                                    <p class="product-category">Category</p>
                                                    <h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
                                                    <h4 class="product-price">$15.00 <del class="product-old-price">$20.00</del></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div id="newsletter" class="section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="newsletter">
                                        <p>Nos puedes ubicar en la ciudad de <strong>Guazapa</strong> <i class="fa fa-map" aria-hidden="true"></i></p>

                                        
                                                    <img  id="map" src="./img/map.jpg" alt="" style={{width: '90%;'}} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer id="footer">
                        <div class="section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-3 col-xs-6">
                                        <div class="footer">
                                            <h3 class="footer-title">Sobre Nosotros</h3>
                                            <p>Somo la primera tienda en linea en ventas de productos agropecuarios y veterianios,
                            con las mejores marcas y productos del mercado.</p>
                                            <ul class="footer-links">
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-map-marker"></i>Calle central de Guazapa #2 </a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-phone"></i> 2236-2589</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-envelope-o"></i>agroeco@gmail.com</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-xs-6">
                                        <div class="footer">
                                            <h3 class="footer-title">Categorias</h3>
                                            <ul class="footer-links">
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Ganado vacuno</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Porcinos</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Caninos</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Felinos</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Aves de granja</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="clearfix visible-xs"></div>

                                    <div class="col-md-3 col-xs-6">
                                        <div class="footer">
                                            <h3 class="footer-title">Information</h3>
                                            <ul class="footer-links">
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Metodos de pago</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Agroservicio mas cercano</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Productos a bajo costo</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Promociones</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Horarios de atencion : </a></li>
                                                <ul><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Lunes a sabado de 8:00am a 6:00pm </a></ul>
                                                <ul><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Domingo de 8:00am a 1:00pm </a></ul>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="col-md-3 col-xs-6">
                                        <div class="footer">
                                            <h3 class="footer-title">Servicios</h3>
                                            <ul class="footer-links">
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Mi cuenta</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Producto agricolas</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Productos veterianios</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Visitas Tecnicas</a></li>
                                                <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Consultas con Veterinarios</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="bottom-footer" class="section">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12 text-center">
                                        <ul class="footer-payments">
                                            <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-cc-visa"></i></a></li>
                                            <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-credit-card"></i></a></li>
                                            <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-cc-paypal"></i></a></li>
                                            <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-cc-mastercard"></i></a></li>
                                            <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-cc-discover"></i></a></li>
                                            <li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-cc-amex"></i></a></li>
                                        </ul>
                                        <ul class="footer-payments">
                                            <li>
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-pinterest"></i></a>
                                            </li>
                                        </ul>
                                        <span class="copyright">
                                            Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script> Derechos reservados| Proyecto UDB
                        / DPS
                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>


                </div>
            </div>
        );
    }
}
export default Home;