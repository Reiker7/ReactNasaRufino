import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function Overlay({ pID, ...post }) {
  return (
    <>
      {["top"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover>
              <Popover.Body>
                <strong>
                  name: {post.name}
                  <br />
                  fall: {post.fall}
                  <br />
                  mass: {post.mass}
                  <br />
                  recclass: {post.recclass}
                  <br />
                  reclat: {post.reclat}
                  <br />
                  reclong: {post.reclong}
                  <br />
                  year: {post.year}
                </strong>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary">{pID}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default Overlay;
