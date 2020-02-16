import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App'
// import Example from './components/FilteringInt';
import Example from './components/SortingMultipleDate';
// import createRowData from './components/createRowData'
// import UserDetails from './components/UserDetails';



ReactDOM.render(<Example />, document.getElementById('root'));

//  ReactDOM.render(<App />, document.getElementById('root'));
 
// const rootElement = document.getElementById("root");
//  ReactDOM.render(<Example initialRows={createRowData(10000)} />, rootElement);


serviceWorker.unregister();
