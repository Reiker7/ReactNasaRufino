import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const PostN = ({ _id, orbit_class, onDelete }) => {
  return (
    <>
      <Col>
        <Card className="text-center" border="light" style={{ width: "18rem" }}>
          <Card.Header>
            {_id}
            <br />
            <Link to={`${_id}`}>{orbit_class}</Link>{" "}
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

export default PostN;
