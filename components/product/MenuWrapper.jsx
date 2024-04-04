import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(null)
  const [filteredProduct, setFilteredProduct] = useState([])
  const [productLimit, setProductLimit] = useState(3)

  useEffect(() => {
    if(active === null){
      setFilteredProduct(productList)
    }else{
      setFilteredProduct(productList.filter(
        (product) => product.category._id === categoryList[active]._id
      ))
    }
    
  }, [categoryList, productList, active])
  


  return (
    <div className='container mx-auto mb-16'>
        <div className='flex flex-col items-center w-full'>
            <Title className="text-[40px]">Our Menu</Title>
            <div className='mt-10'>
                <button
                  className={`category-filter-button ${
                    active === null && "active"
                  }`}
                  onClick={() => {
                    setActive(null)
                    setProductLimit(3)
                  }}
                >All</button>
                {categoryList &&
                  categoryList.map((category, index) => (
                    <button
                      className={`category-filter-button ${
                        index === active && "active"
                      }`}
                      key={category._id}
                      onClick={() => {
                        setActive(index)
                        setProductLimit(3)
                      }}
                    >{category.title}</button>
                  ))}
                
            </div>
        </div>
        
        <div className='mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            {filteredProduct.length > 0 &&
              filteredProduct
                .slice(0, productLimit)
                .map((product) => <MenuItem key={product._id} product={product} />)
            }
        </div>
        <div className='flex items-center justify-center w-full mt-8'>
          <button className="btn-primary" onClick = {() => setProductLimit(productLimit + 3)}>View More</button>
        </div>
    </div>
  )
}

export default MenuWrapper