import React from 'react'
import Carousel from '../../components/Carousel'
import Campaigns from '../../components/Campaigns'
import MenuWrapper from '../../components/product/MenuWrapper'
import About from '../../components/About'
import Reservation from '../../components/Reservation'
import Testimonials from '../../components/testimonial/Testimonials'
import axios from 'axios'

const Index = ({ categoryList, productList }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categoryList={ categoryList } productList={productList} />
      <About />
      <Reservation />
      <Testimonials />
    </React.Fragment>
  )
}

export default Index
