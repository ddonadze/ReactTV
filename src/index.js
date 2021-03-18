import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import MtavariNews from './MtavariNews';
import Container from "react-bootstrap/Container"

ReactDOM.render(
  <React.StrictMode>
     <Container>
          <NavBar/>
          <MtavariNews/>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
