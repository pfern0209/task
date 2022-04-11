import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const Product = ({prod}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${prod.id}`}>
        <Card.Img src={prod.image} variant="top"/>
      </Link>
      <Card.Body>
          <Link to={`/product/${prod.id}`}>
          <Card.Title as="div"><strong>{prod.name}</strong></Card.Title>
          </Link>    
        <Card.Text as="h3">
          {prod.brand}
        </Card.Text>
        <Card.Text as="h6">
          ${prod.price}
        </Card.Text>
      </Card.Body>
    </Card>
    
  )
}

export default Product
