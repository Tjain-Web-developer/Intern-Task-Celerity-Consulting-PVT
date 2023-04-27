import React from 'react'
import css from './Booking.module.css';
import { Link } from 'react-router-dom';

const Booking = () => {
  return (
    <div>
        <div className={`${css.trackLine} d-flex justify-content-center my-5 mt-3`}>
            <div>
            <div className={`${css.trackLineParent} d-flex align-items-center`}>
                <div className={`${css.serial} d-flex flex-column align-items-center`}>
                    <div className={`${css.serialCircle} rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold`}>1</div>
                    {/* <div className={`${css.serialText}`}>Search</div> */}
                </div>
                <div className={`${css.serialLine}`}></div>
                <div className={`${css.serial} d-flex flex-column align-items-center`}>
                    <div className={`${css.serialCircle} rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold`}>2</div>
                    {/* <div className={`${css.serialText}`}>Recommended Services</div> */}
                </div>
                <div className={`${css.serialLine}`}></div>
                <div className={`${css.serial} d-flex flex-column align-items-center`}>
                    <div className={`${css.serialCircle} rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold`}>3</div>
                    {/* <div className={`${css.serialText}`}>Results</div> */}
                </div>
                <div className={`${css.serialLine}`}></div>
                <div className={`${css.serial} d-flex flex-column align-items-center`}>
                    <div className={`${css.serialCircle} rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold`}>4</div>
                    {/* <div className={`${css.serialText}`}>Booking</div> */}
                </div>
            </div>
            <div className="onlyText d-flex justify-content-between">
                <div className={`${css.serialText}`}>Search</div>
                <div className={`${css.serialText}`}>Recommended Services</div>
                <div className={`${css.serialText}`}>Results</div>
                <div className={`${css.serialText}`}>Booking</div>
            </div>
            </div>
        </div>

        <div className={`${css.cards} d-flex mx-5 flex-wrap`}>
            <div className={`${css.bookingSummary}`}>
                <div class="card border-0 shadow text-bg-none mb-3">
                    <div class="card-body">
                        <h6 class="card-title mb-3">Booking Summary</h6>
                        <div className={`${css.bookIllus} d-flex `}>
                            <div className={`${css.iconWithText} d-flex flex-column align-items-center`}>
                                <i class="ri-government-line"></i>
                                <h6 className='text-center'>Delhi,<br></br>110003 India</h6>
                            </div>
                            <div className={`${css.lineWithIcon} flex-grow-1`}>
                                <div className="lineIcon text-center d-flex flex-column">
                                    <p style={{fontSize: '.7rem'}} className='m-0'>Express</p>
                                    <i style={{fontSize: '1.3rem'}} class="ri-flight-takeoff-line"></i>
                                </div>
                                <div className={`${css.lineDiv}`}></div>
                            </div>
                            <div className={`${css.iconWithText} d-flex flex-column align-items-center`}>
                                <i class="ri-government-line"></i>
                                <h6 className='text-center'>Shanghai,<br></br>200080 China</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middleCard d-flex gap-2">
                    <div class="card border-0 shadow text-bg-none mb-3">
                        <div class="card-body">
                            <p class="card-title m-0 text-nowrap">Total Weight/Volume</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <img className='mt-3' style={{width: '3.5vw'}} src="https://static.thenounproject.com/png/3075872-200.png" alt="" />
                            </div>
                            <h6 className='m-0 text-center'>112Kg</h6>
                        </div>
                    </div>
                    <div class="card border-0 shadow text-bg-none mb-3 flex-grow-1">
                        <div class="card-body">
                            <p class="card-title m-0">Load</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <img style={{width: '4.5vw'}} src="https://static.thenounproject.com/png/308140-200.png" alt="" />
                            </div>
                            <p className='m-0 text-center fw-semibold'>Pallets</p>
                            <p className='m-0 text-center'>230 x 140 x 120 CM</p>
                        </div>
                    </div>
                </div>
                <div className="bottomCard d-flex gap-2">
                    <div class="card border-0 shadow text-bg-none mb-3 w-50">
                        <div class="card-body">
                            <p class="card-title m-0 text-nowrap">Seller: Primetime Worldwide</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <img className='mt-3' style={{width: '12vw'}} src="https://img.freepik.com/premium-photo/aerial-top-view-cargo-ship-with-contrail-ocean-sea-ship-carrying-container-running-export-from-container-international-port-custom-ocean-concept-freight-shipping-by-ship-service_33850-681.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 shadow text-bg-none mb-3 w-50">
                        <div class="card-body">
                            <p class="card-title m-0">Insurance: Xcover.com</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <img className='mt-4' style={{width: '12vw'}} src="https://www.xcover.com/r-199640/static/media/logo.bb326494.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${css.priceDetails}`}>
                <div class="card border-0 shadow text-bg-none mb-3 ">
                    <div class="card-body">
                        <div className='d-flex gap-3'>
                            <h6 class="card-title mb-3">Price Details 
                            </h6>
                            <div className={`${css.pillSection} rounded-pill text-nowrap`}>
                                <i className='ri-star-fill'></i>
                                known shipper
                            </div>
                        </div>
                        <div className={`d-flex ${css.lineTxtWrapper} justify-content-between`}>
                            <p className='m-0'>Seller's Quote</p>
                            <p className='m-0'>$ 36.25</p>
                        </div>
                        <hr />
                        <div className={`d-flex ${css.lineTxtWrapper} justify-content-between`}>
                            <div>
                                <p className='m-0'>Duties & Taxes</p>
                                <p className='m-0 mt-1'>Insurance<br/>based on Items cost</p>
                            </div>
                            <div className='text-end'>
                                <p className='m-0'>Not Included</p>
                                <p className='m-0 mt-1'>$ 323.40</p>
                            </div>
                        </div>
                        <hr />
                        <div className={`${css.lineTxtWrapper}`}>
                            <p className='m-0'>Add a <Link>Promo Code</Link></p>
                        </div>
                        <div className={`d-flex ${css.lineTxtWrapper} justify-content-between`}>
                            <p className='m-0'>Platform fee</p>
                            <p className='m-0 mt-1'>$ 119.48</p>
                        </div>
                        <hr />
                        <div className={`d-flex ${css.lineTxtWrapper} justify-content-between`}>
                            <h4 className='m-0'>Total</h4>
                            <h4 className='m-0 mt-1'>$ 4102.13</h4>
                        </div>
                        <div className={`btn btn-primary p-0 py-1 px-2 my-4 mx-auto ${css.loginBtn} w-100`}>Checkout</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Booking