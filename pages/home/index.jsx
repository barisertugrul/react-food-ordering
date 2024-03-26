import React from 'react'
import Carousel from '../../components/Carousel'
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper'
import About from '../../components/About'
import Reservation from '../../components/Reservation'
import Testimonials from '../../components/testimonial/Testimonials'

const Index = ({ categoryList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={ categoryList } />
      <About />
      <Reservation />
      <Testimonials />
    </React.Fragment>
  )
}

export default Index
