import React from 'react';
import './index.css';
import Header from './Components/Header';
import Addlist from './Components/Addlist';
import { Container, Row, Col } from 'react-bootstrap';
import ShowList from './Components/ShowList';

function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg="8" md="10">
          <Header />
          <Addlist />
          <ShowList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;