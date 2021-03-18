import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './NavBar';
import Container from "react-bootstrap/Container"
import NewsTabs from './newsTabs/NewsTabs';

ReactDOM.render(
  <React.StrictMode>
     <Container>
          <NavBar/>
          <NewsTabs/>
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
