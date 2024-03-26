import React, { useState } from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'

const MenuWrapper = ({ categoryList }) => {
  const [active, setActive] = useState(null)
  return (
    <div className='container mx-auto mb-16'>
        <div className='flex flex-col items-center w-full'>
            <Title className="text-[40px]">Our Menu</Title>
            <div className='mt-10'>
                <button
                  className={`category-filter-button ${
                    active === null && "active"
                  }`}
                  onClick={() => setActive(null)}
                >All</button>
                {categoryList &&
                  categoryList.map((category, index) => (
                    <button
                      className={`category-filter-button ${
                        index === active && "active"
                      }`}
                      key={category._id}
                      onClick={() => setActive(index)}
                    >{category.title}</button>
                  ))}
                
            </div>
        </div>
        
        <div className='mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>
  )
}

export default MenuWrapper