import React from 'react';
import './App.css';
import { Greetings } from './Greetings';
import { Employee } from './Employee';
import { EmployeeWithStyle } from './EmployeeWithStyle';
import { MultiplyTable } from './MultiplyTable'
import { PropsDemo } from './PropsDemo';
import Main from './Student';
import { PropsValidation } from './PropsValidation';
import { TableOnClick } from './TableOnClick'
import { ComponentLifeCycle } from './ComponentLifeCycle'
import { SubjectForm } from './SubjectForm'
import { MovieDetails } from './MovieDetails'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Assignments() {
  return (
    <Router>
      <div style={{ width: '100%' }}>
        <div style={{ float: 'left', width: '30%' }}>
          <ul>
            <li>
              <Link to="/assign1">Assign No.1 - Greetings Message</Link>
            </li>
            <li>
              <Link to="/assign2">Assign No.2 - Employee Table</Link>
            </li>
            <li>
              <Link to="/assign3">Assign No.3 - Employee Table with style</Link>
            </li>
            <li>
              <Link to="/assign4">Assign No.4 - Multiplication Table</Link>
            </li>
            <li>
              <Link to="/assign5">Assign No.5 - State demo</Link>
            </li>
            <li>
              <Link to="/assign6">Assign No.6 - Props demo</Link>
            </li>
            <li>
              <Link to="/assign7">Assign No.7 - Props validation</Link>
            </li>
            <li>
              <Link to="/assign8">Assign No.8 - Table on Click</Link>
            </li>
            <li>
              <Link to="/assign9">Assign No.9 - Component Life Cycle</Link>
            </li>
            <li>
              <Link to="/assign10">Assign No.10 - Form and Events</Link>
            </li>
            <li>
              <Link to="/assign11">Assign No.11 - Movie Details</Link>
            </li>
          </ul>
        </div>

        <div style={{
          border: '2px solid green',
          height: '500px',
          position: 'absolute',
          left: '30%',
          margin: '-3px',
          top: '0'
        }} />

        <div style={{ float: 'right', width: '60%' }}>
          <Route path="/assign1" component={assign1} />
          <Route path="/assign2" component={assign2} />
          <Route path="/assign3" component={assign3} />
          <Route path="/assign4" component={assign4} />
          <Route path="/assign5" component={assign5} />
          <Route path="/assign6" component={assign6} />
          <Route path="/assign7" component={assign7} />
          <Route path="/assign8" component={assign8} />
          <Route path="/assign9" component={assign9} />
          <Route path="/assign10" component={assign10} />
          <Route path="/assign11" component={assign11} />
        </div>
      </div>
    </Router>
  );
}

function assign1() {
  return (
    <Greetings />
  );
}

function assign2() {
  return (
    <Employee />
  );
}

function assign3() {
  return (
    <EmployeeWithStyle />
  );
}

function assign4() {
  return (
    <MultiplyTable />
  );
}

function assign5() {
  return (
    <Main />
  );
}

function assign6() {
  return (
    <PropsDemo companyName="Wipro" companyLocation="Bangalore" />
  );
}

function assign7() {
  return (
    <PropsValidation name={10} city={["London","New York"]} age={15} />
  );
}

function assign8() {
  return (
    <TableOnClick />
  );
}

function assign9() {
  return (
    <ComponentLifeCycle />
  );
}

function assign10() {
  return (
    <SubjectForm />
  );
}

function assign11() {
  return (
    <MovieDetails />
  );
}

export default Assignments;
