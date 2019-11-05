import React from 'react';
import { beers } from '../data/beers';
import axios from 'axios';

export class Table extends React.Component {
  state = {
    temp: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
      )
      .then(res => {
        let temp = res.data.data;
        this.setState({ temp });
      });
  }

  render() {
    const { temp } = this.state;
    let liveBeers = beers.map((item, i) => Object.assign({}, item, temp[i]));

    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Beer Type</th>
            <th scope="col">Min Temp</th>
            <th scope="col">Max Temp</th>
            <th scope="col">Current Temp</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {liveBeers.map((beer, index) => {
            return (
              <tr>
                <td scope="row" key={index}>
                  {beer.id}
                </td>
                <td>{beer.type}</td>
                <td>{beer.min}</td>
                <td>{beer.max}</td>
                <td>{beer.temperature}</td>
                <td>
                  {beer.temperature < beer.min || beer.temperature > beer.max
                    ? 'Warning!'
                    : 'Ok'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
