import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


function FeedCard(props) {
      return (
        <Col sm={4}>
          <Card style={{ width: "100%", marginBottom: "20px" }}>
            <Card.Img variant="top" src={props.image}/>
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.description}
              </Card.Text>
              <Link to={"/profile/" + props.breed.id}>Profile</Link>
            </Card.Body>
          </Card>
        </Col>
      );   
}


export default FeedCard;
  