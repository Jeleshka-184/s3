import styles from "./HeaderComponent.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeaderComponent = () => {
  return (
    <>
      <div>
        <Row className={`${styles.header} justify-content-center`}>
          <Col className="col-2 text-center"><a href="#" className={styles.link}>Blog</a></Col>
          <Col className="col-2 text-center"><a href="#" className={styles.link}>Press</a></Col>
        </Row>
      </div>
    </>
  );
};

export default HeaderComponent;
