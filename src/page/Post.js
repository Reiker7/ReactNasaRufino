import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Overlay from "../common/Overlay";

const Post = ({ id, onDelete, ...post }) => {
  return (
    <>
      <Col>
        <Card
          className="text-center"
          border="light"
          style={{ width: "12rem", margin: "4% 8%" }}
        >
          <Card.Header>
            <Overlay pID={id} {...post} />
            {" - "}
            <Link to={`${id}`}>Edit</Link>{" "}
          </Card.Header>
          <Card.Body className="text-center">
            <Button onClick={onDelete} variant="outline-primary">
              Borrar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Post;
