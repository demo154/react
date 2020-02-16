import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createRowData from "./Components/createRowData";
import App from './App';
import * as serviceWorker from './serviceWorker';
import AdvFilters1 from './Components/AdvFilters1';
// import Example from './Components/GroupingDrg';
//import Example from './Components/fExample';
import FilterSort from './Components/FilterSort';
// import GroupingDrg from './Components/GroupingDrg1';
import Sorting from './Components/Sorting';
// import DataViewerReactGrid from './Components/Sorting';
// import rows from './Components/Sorting';
import rows from './Components/Grid';
// import Reordering from './Components/Reordering';
import Grid from "./Components/Grid"

// ReactDOM.render(<App />, document.getElementById('root'));

// const rootElement = document.getElementById("root");
// ReactDOM.render(<GroupingDrg rows={createRowData(50)} />, rootElement);


const rootElement = document.getElementById("root");
ReactDOM.render(<AdvFilters1 initialRows={createRowData(50000)} />, rootElement);

// console.log("DataLoading Start Time :" , new Date())
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Grid  initialRows={rows}   />, rootElement);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<DataViewerReactGrid rows={createRowData(50)} />, rootElement);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<FilterSort initialRows={createRowData(50)} />, rootElement);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Reordering rows={createRowData(50)} />, rootElement);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Sorting  initialRows= {rows} />, rootElement);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Example abcd={abcd} />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/* Tutorial at https://youtu.be/MAD2HnUFjgg */

// import React from "react";
// import ReactDOM from "react-dom";
// import Accordion from "./Components/Accordion";

// // import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <Accordion
//         title="What is your return policy?"
//         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       />
//       <Accordion
//         title="How do I track my order?"
//         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//       />
//       <Accordion
//         title="Can I purchase items again?"
//         content="
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         </br>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         </br>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         "
//       />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


