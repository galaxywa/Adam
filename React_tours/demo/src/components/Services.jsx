import React from 'react'
import Title from './Title'

function Services() {
  return (
    <>
    {/* <!-- Services --> */}
    <section className='section' id='services'>
    <Title main_title='our' sub_title='service' />
        <div className='section-title'>
            <h2>our <span>services</span></h2>
        </div>
            <div className='section-center services-center'>
                {/* <!-- first icon --> */}
                <article className='service'>
                    <span className='service-icon'>
                        <i className='fa-solid fa-wallet'></i>
                    </span>
                    <div className='service-info'>
                        <h4 className='service-title'>
                            saving money
                        </h4>
                        <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi minima at deleniti tempore sint, quasi aut dicta porro doloribus sapiente.</p>
                    </div>
                </article>
                {/* <!-- second icon --> */}
                <article className='service'>
                    <span className='service-icon'>
                        <i className='fa-solid fa-robot'></i>
                    </span>
                    <div className='service-info'>
                        <h4 className='service-title'>
                            robot info
                        </h4>
                        <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi minima at deleniti tempore sint, quasi aut dicta porro doloribus sapiente.</p>
                    </div>
                </article>
                {/* <!-- third icon --> */}
                <article className='service'>
                    <span className='service-icon'>
                        <i className='fa-solid fa-person-rifle'></i>
                    </span>
                    <div className='service-info'>
                        <h4 className='service-title'>
                        fight
                        </h4>
                        <p className='service-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi minima at deleniti tempore sint, quasi aut dicta porro doloribus sapiente.</p>
                    </div>
                </article>
            </div>
        </section>
        </>
  )
}

export default Services