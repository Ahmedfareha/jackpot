import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Charts from "./Components/Charts"
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Guidelines from './Components/Guidelines';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/charts" component={Charts}></Route>
      <Route path="/guidelines" component={Guidelines}></Route>
    </div>
  </Router>
)

{/* <React.StrictMode>
    <App />
  </React.StrictMode> */}

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
