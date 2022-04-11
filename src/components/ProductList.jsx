import React from 'react'
import {Row,Col} from "react-bootstrap"
import Product from '../components/Product'
import {useContext} from 'react'
import ProductContext from '../context/ProductContext'

const ProductList = () => {

    const {product} =useContext(ProductContext)
 
  return (
    <Row>
            {product.map((prod) => (
              <Col key={prod.id} sm={12} md={6} lg={4} xl={3}>
                <Product key={prod.id} prod={prod} />
              </Col>
            ))}
            
    </Row>
  )
}

export default ProductList