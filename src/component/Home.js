import React from "react";
import homeImg from "../images/home.jpg";
import Product from "./Product";
import storeItems from "../data/storeItems.json";
import "./Home.css";
import { Row, Col } from "react-bootstrap";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={homeImg} alt="home-img" />
        <div className="home-row">
          <Row xl={3} md={2} sm={1} >
            {storeItems.map((item) => (
              <Col key={item.id}>
                <Product {...item} />
              </Col>
            ))} 
           
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home;
