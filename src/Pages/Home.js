import React from 'react'
import css from './Home.module.css'
const Home = () => {
  return (
    <div>
        <div className={`text-center mt-4 mb-5`}>
            <h3>Hassle-Free Shipping Solutions</h3>
            <p className='fw-semibold'>Compare, book and manage your freight across the world's top logistics providers, all on one platform.</p>
        </div>

        <div className={`card border-0 rounded-3 mx-5 ${css.detailsForm} shadow`}>
            <div className={`card-body d-flex align-items-center justify-content-between ${css.optionsScroller}`}>
                <div className={`${css.formOption} d-flex align-items-center gap-2 text-muted text-nowrap`}>
                    <i className="ri-map-pin-line"></i>
                    <p className='mb-1'>Origin, Port, City</p>
                </div>
                <div className={`${css.formOption} d-flex align-items-center gap-2 text-muted text-nowrap`}>
                    <i className="ri-map-pin-line"></i>
                    <p className='mb-1'>Destination, Port, City</p>
                </div>
                <div className={`${css.formOption} d-flex align-items-center gap-2 text-muted text-nowrap border-start border-2 ps-2`}>
                    <i className="ri-calendar-2-line"></i>
                    <p className='mb-1'>13 April 2023</p>
                </div>
                <div className={`${css.formOption} d-flex align-items-center gap-2 text-muted text-nowrap border-start border-2 ps-2`}>
                    <i className="ri-ship-2-line"></i>
                    <p className='mb-1'>Load</p>
                </div>
                <div className={`btn btn-primary btn-sm ${css.arrowBtn}`}>
                  <i className={`ri-arrow-right-line`}></i>
                </div>
            </div>
        </div>

        <div className='mt-5'>
            <h4 className='text-center'>Services</h4>
            <div className={`d-flex mx-3 mt-3 justify-content-between ${css.servicesParent} flex-wrap`}>
            <div className={`card text-bg-none border-0 shadow mb-3 ${css.cardBox}`}>
              <div className="card-header bg-white d-flex align-items-center gap-4">
                <i class="ri-ship-line text-primary"></i>
                <p className='m-0 fw-semibold'>Freight Services</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${css.cardText}`}>Open new Opportunites to grow your business. Enter new markets and discover new contitnents, We are with you, door-to-door.</p>
              </div>
            </div>
            <div className={`card text-bg-none border-0 shadow mb-3 ${css.cardBox}`}>
              <div className="card-header bg-white d-flex align-items-center gap-4">
                <i class="ri-briefcase-line text-danger"></i>
                <p className='m-0 fw-semibold'>Business Services</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${css.cardText}`}>We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.</p>
              </div>
            </div>
            <div className={`card text-bg-none border-0 shadow mb-3 ${css.cardBox}`}>
              <div className="card-header bg-white d-flex align-items-center gap-4">
                <i class="ri-global-line text-danger"></i>
                <p className='m-0 fw-semibold'>Shipping & Logistics</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${css.cardText}`}>Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.</p>
              </div>
            </div>
            <div className={`card text-bg-none border-0 shadow mb-3 ${css.cardBox}`}>
              <div className="card-header bg-white d-flex align-items-center gap-4">
                <i class="ri-24-hours-line text-primary"></i>
                <p className='m-0 fw-semibold'>24/7 Support</p>
              </div>
              <div className="card-body">
                <p className={`card-text ${css.cardText}`}>Receive support from our experts all over the world at every stage of the process, 24/7.</p>
              </div>
            </div>
            </div>
        </div>    
    </div>
  )
}

export default Home