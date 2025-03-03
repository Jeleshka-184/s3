import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FooterComponent.module.css";
import FooterlistComponent from "./FooterListComponent";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterAddressComponent from "./FooterAddressComponent";

function FooterComponent() {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <Row>
          <Col>
            <FooterlistComponent
              items={[
                "Open Spaces",
                "GIR",
                "Letterfolk",
                "Yield",
                "Poketo",
                "Equal Parts",
              ]}
            />
          </Col>
          <Col>
            <FooterlistComponent items={["Careers", "Press"]} />
          </Col>
          <Col>
            <FooterlistComponent items={["Instagram", "Tweeter"]} />
          </Col>
          <Col>
            <FooterAddressComponent />
          </Col>
        </Row>
        <p className={`${styles.copyrightFooter}`}>
          © {new Date().getFullYear()} Pattern Brands
        </p>
      </footer>
    </>
  );
}

export default FooterComponent;
