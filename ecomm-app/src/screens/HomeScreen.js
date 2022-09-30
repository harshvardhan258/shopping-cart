import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
//import products from "../products";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
  /*how to fetch data using redux*/
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  /*how to fetch data at component level*/
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
