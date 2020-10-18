import React, { Component } from 'react'
class productos extends Component {
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
                                    <li ><a className="App-link" href="./pages/Home" target="_blank" rel="noopener noreferrer" >Inicio</a></li>
                                    <li class="active"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Productos</a></li>
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
					<div id="aside" class="col-md-3">
						<div class="aside">
							<h3 class="aside-title">Categorias</h3>
							<div class="checkbox-filter">

								<div class="input-checkbox">
									<input type="checkbox" id="category-1"/>
									<label for="category-1">
										<span></span>
										Ganado vacuno
										<small>(120)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-2"/>
									<label for="category-2">
										<span></span>
										Porcinos
										<small>(740)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-3"/>
									<label for="category-3">
										<span></span>
										Caninos
										<small>(1450)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-4"/>
									<label for="category-4">
										<span></span>
										Felinos
										<small>(578)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-5"/>
									<label for="category-5">
										<span></span>
										Aves de granja
										<small>(120)</small>
									</label>
								</div>

								<div class="input-checkbox">
									<input type="checkbox" id="category-6"/>
									<label for="category-6">
										<span></span>
										Pesticidas
										<small>(740)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="category-6"/>
									<label for="category-6">
										<span></span>
										Insecticidas
										<small>(740)</small>
									</label>
								</div>
							</div>
						</div>

						<div class="aside">
							<h3 class="aside-title">Precio</h3>
							<div class="price-filter">
								<div id="price-slider"></div>
								<div class="input-number price-min">
									<input id="price-min" type="number"/>
									<span class="qty-up">+</span>
									<span class="qty-down">-</span>
								</div>
								<span>-</span>
								<div class="input-number price-max">
									<input id="price-max" type="number"/>
									<span class="qty-up">+</span>
									<span class="qty-down">-</span>
								</div>
							</div>
						</div>

						<div class="aside">
							<h3 class="aside-title">Marca</h3>
							<div class="checkbox-filter">
								<div class="input-checkbox">
									<input type="checkbox" id="brand-1"/>
									<label for="brand-1">
										<span></span>
										Aliansa
										<small>(578)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-2"/>
									<label for="brand-2">
										<span></span>
										MUR
										<small>(125)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-3"/>
									<label for="brand-3">
										<span></span>
										BAYER
										<small>(755)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-4"/>
									<label for="brand-4">
										<span></span>
										DOGGYE
										<small>(578)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-5"/>
									<label for="brand-5">
										<span></span>
										PURINA
										<small>(125)</small>
									</label>
								</div>
								<div class="input-checkbox">
									<input type="checkbox" id="brand-6"/>
									<label for="brand-6">
										<span></span>
										DISAGRO
										<small>(755)</small>
									</label>
								</div>
							</div>
						</div>

						<div class="aside">
							<h3 class="aside-title">Top selling</h3>
							<div class="product-widget">
								<div class="product-img">
									<img src="./img/product01.png" alt=""/>
								</div>
								<div class="product-body">
									<p class="product-category">Category</p>
									<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
									<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
								</div>
							</div>

							<div class="product-widget">
								<div class="product-img">
									<img src="./img/product02.png" alt=""/>
								</div>
								<div class="product-body">
									<p class="product-category">Category</p>
									<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
									<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
								</div>
							</div>

							<div class="product-widget">
								<div class="product-img">
									<img src="./img/product03.png" alt=""/>
								</div>
								<div class="product-body">
									<p class="product-category">Category</p>
									<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
									<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
								</div>
							</div>
						</div>
					</div>

					<div id="store" class="col-md-9">
						<div class="store-filter clearfix">
							<div class="store-sort">
								<label>
									Sort By:
									<select class="input-select">
										<option value="0">Popular</option>
										<option value="1">Position</option>
									</select>
								</label>

								<label>
									Show:
									<select class="input-select">
										<option value="0">20</option>
										<option value="1">50</option>
									</select>
								</label>
							</div>
							<ul class="store-grid">
								<li class="active"><i class="fa fa-th"></i></li>
								<li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"  ><i class="fa fa-th-list"></i></a></li>
							</ul>
						</div>


						<div class="row">
							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product01.png" alt=""/>
										<div class="product-label">
											<span class="sale">-30%</span>
											<span class="new">NEW</span>
										</div>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product02.png" alt=""/>
										<div class="product-label">
											<span class="new">NEW</span>
										</div>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="clearfix visible-sm visible-xs"></div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product03.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="clearfix visible-lg visible-md"></div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product04.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="clearfix visible-sm visible-xs"></div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product05.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product06.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="clearfix visible-lg visible-md visible-sm visible-xs"></div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product07.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product08.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>

							<div class="clearfix visible-sm visible-xs"></div>

							<div class="col-md-4 col-xs-6">
								<div class="product">
									<div class="product-img">
										<img src="./img/product09.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Nombre del producto</a></h3>
										<h4 class="product-price">$15.00 <del class="product-old-price">$17.00</del></h4>
										<div class="product-rating">
										</div>
										<div class="product-btns">
											<button class="add-to-wishlist"><i class="fa fa-heart-o"></i><span class="tooltipp">add to wishlist</span></button>
											<button class="add-to-compare"><i class="fa fa-exchange"></i><span class="tooltipp">add to compare</span></button>
											<button class="quick-view"><i class="fa fa-eye"></i><span class="tooltipp">quick view</span></button>
										</div>
									</div>
									<div class="add-to-cart">
										<button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
							</div>
						</div>

						<div class="store-filter clearfix">
							<span class="store-qty">Showing 20-100 products</span>
							<ul class="store-pagination">
								<li class="active">1</li>
								<li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >2</a></li>
								<li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >3</a></li>
								<li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >4</a></li>
								<li><a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" ><i class="fa fa-angle-right"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

<div id="hot-deal3" class="section">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hot-deal">
					
					<h2 style={{paddingTop:'10%'}} >REALIZAMOS ENVIOS A TODO EL PAIS 
					</h2>
					<p style={{paddingBottom:'5%'}}>Pide tus productos desde la comodidad de tu casa </p>
					<a class="primary-btn cta-btn" className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Consultar tarifa</a>
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
export default productos;