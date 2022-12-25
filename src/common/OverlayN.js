import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function OverlayN({ pID, ...post }) {
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
                  discovery_date: {post.discovery_date}
                  <br />
                  h_mag: {post.h_mag}
                  <br />
                  moid_au: {post.moid_au}
                  <br />
                  period_yr: {post.period_yr}
                  <br />
                  i_deg: {post.i_deg}
                  <br />
                  pha: {post.pha}
                  <br />
                  orbit_class: {post.orbit_class}
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

export default OverlayN;
