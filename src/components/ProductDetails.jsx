import { useState } from "react"
import { Link,useParams,useNavigate } from "react-router-dom"
import { Card,Row,Col,Image,ListGroup,Button, Form,  } from "react-bootstrap"
import {useContext} from 'react'
import ProductContext from '../context/ProductContext'

const ProductDetails = () => {
    const params=useParams();
    let id=req.params.id;
    const [qty,setQty]=useState(1);
  
    const {product} =useContext(ProductContext)

    const reqdProduct = product.filter(checkProduct);

    function checkProduct(product) {
    return product.id === id;
    }

    //match to get the id from params
    
  
    return (
      <>
        <Link className="btn btn-light my-3" to="/">Go Back</Link>
          <>
          <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
  
  
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
  
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
  
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
  
  
              {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              // onChange={(e) => setQty(e.target.value)}
                              
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
  
  
              <ListGroup.Item>
                <Button onClick={addToCartHandler} className="btn-block" type="button" disabled={product.countInStock===0}>Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        </Row>
  
        <Row>
          <Col md={6}>
            <h2>Reviews</h2>
            {product.reviews.length === 0 && <Message >No Reviews</Message>}
            <ListGroup variant='flush'>
              {product.reviews.map(review=>(
                <ListGroup.Item key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating value={review.rating}/>
                  <p>{review.createdAt.substring(0,10)}</p>
                  <p>{review.comment}</p>
                </ListGroup.Item>
              ))}   
              <ListGroup.Item>
                <h2>Write a customer review</h2>
                {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                {userInfo ?(
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="rating">
                      <Form.Label>Rating</Form.Label>
                      <Form.Control as="select" value={rating} onChange={(e)=>setRating(e.target.value)}>
                        <option value=''>Select ...</option>
                        <option value='1'>1 - Poor</option>
                        <option value='2'>2 - Fair</option>
                        <option value='3'>3 - Good</option>
                        <option value='4'>4 - Very Good</option>
                        <option value='5'>5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="comment">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control as='textarea' row='3' value={comment} onChange={(e)=>setComment(e.target.value)}>
                      </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>Submit</Button>
                  </Form>
                ): <Message >Please <Link to='/login'>Sign In</Link> to write a review</Message>}
              </ListGroup.Item>                   
            </ListGroup>
          </Col>
        </Row>
        </>
        }
        
  
      </>
    )
}

export default ProductDetails