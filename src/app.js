import React from 'react';
import ReactDOM from 'react-dom';
import { Table } from './components/table';

export class App extends React.Component {
  reloadPage() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <h1>Beer Temperature Monitoring</h1>
        <button
          className="btn btn-outline-dark btn-lg btn-block"
          onClick={() => this.reloadPage()}
        >
          Click here for live temperature updates
        </button>
        <Table />
      </div>
    );
  }
}