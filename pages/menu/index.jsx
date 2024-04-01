import axios from 'axios'
import MenuWrapper from '../../components/product/MenuWrapper'

const Index = ({ categoryList, productList }) => {
  return (
    <div className='pt-10'>
        <MenuWrapper categoryList={categoryList} productList={productList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const categories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
  const products = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  
  return {
    props: {
      categoryList: categories.data ? categories.data : [],
      productList: products.data ? products.data : [],
    }
  }
}

export default Index