import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import OverlayN from "../common/OverlayN";

const PostN = ({ _id, onDelete, ...post }) => {
  return (
    <>
      <Col>
        <Card
          className="text-center"
          border="light"
          style={{ width: "12rem", margin: "4% 8%" }}
        >
          <Card.Header>
            <OverlayN pID={post.designation} {...post} />
            <Link
              to={`${post.designation.replace(/\(/, "").replace(/\)/, "")}`}
            >
              Edit
            </Link>{" "}
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
