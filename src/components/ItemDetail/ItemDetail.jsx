import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';



const ItemDetail=(props)=>{

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="imagen del producto" />
      <Card.Body>
        <Card.Title>nombre</Card.Title>
        <Card.Text>
            Caracteristicas
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>tipo</ListGroup.Item>
        <ListGroup.Item>colores</ListGroup.Item>
        <ListGroup.Item>precios</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary" onClick={props.onClickFunction}  >Agregar Carrito</Button>
      </Card.Body>
    </Card>
  );
    
}
export default ItemDetail;
