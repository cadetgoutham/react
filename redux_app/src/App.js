import React from 'react';
import './App.css';
import Header from './Components/Header';
import Addlist from './Components/Addlist';
import {Row, Col} from 'react-bootstrap'
import ShowList from './Components/ShowList';

function App() {
  return (
    <div className=''>
    <h1 style={{textAlign:'center'}}>React Redux Example</h1>
    <Header />
    <Row className='justify-content-md-center'>
      <Col lg="6">
        <Addlist />
        <ShowList />
       </Col>
    </Row> 
    </div>
  );
}

export default App;