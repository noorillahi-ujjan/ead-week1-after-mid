import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Products} from "../const/AllProducts";

function HeroSection() {
    return (
       <div className={"container row"}>
           {
               Products.map(product=> {
                   return <div className="col-md-6 col-sm-12 col-lg-3">
                       <Card style={{ width: '18rem' }}>
                           <Card.Img variant="top" src={`${product.image}`} />
                           <Card.Body>
                               <Card.Title>{product.productName}</Card.Title>
                               <Card.Text>
                                   {product.description}
                               </Card.Text>
                               <a href={product.linkToProduct}> <Button variant="primary">Buy Now</Button></a>
                           </Card.Body>
                       </Card>
                   </div>
               })
           }
       </div>
    );
}

export default HeroSection;
