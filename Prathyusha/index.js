import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
import createRowData from './components/createRowData'
import * as serviceWorker from './serviceWorker';
// import Example from './components/AdvFilters123'
// import ReOrdering from './components/reorder';
 import AdvFilters123copy from './components/AdvFilters123 copy';
// import RowSelection from './components/RowSelection';
// import Example from './components/AdvFilters123';
import Grouping from './components/Grouping'
import RowSelection from './components/RowSelection';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement = document.getElementById("root");
   ReactDOM.render(<AdvFilters123copy rows={createRowData(30000)} />, rootElement);
//  ReactDOM.render(<Grouping initialRows={createRowData(20000)} />, rootElement);
// ReactDOM.render(<RowSelection rows={createRowData(20000)} />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
