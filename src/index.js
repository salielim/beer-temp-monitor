import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let beers = [
  {
    id: '1',
    type: 'Pilsner',
    min: '4',
    max: '6',
  },
  {
    id: '2',
    type: 'IPA',
    min: '5',
    max: '6',
  },
  {
    id: '3',
    type: 'Lager',
    min: '4',
    max: '7',
  },
  {
    id: '4',
    type: 'Stout',
    min: '6',
    max: '8',
  },
  {
    id: '5',
    type: 'Wheat beer',
    min: '3',
    max: '5',
  },
  {
    id: '6',
    type: 'Pale Ale',
    min: '4',
    max: '6',
  },
];

class App extends React.Component {
  state = {
    temp: [],
  };

  reloadPage() {
    window.location.reload();
  }

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
      <div>
        <h1>Beer Temperature Monitoring</h1>
        <button
          className="btn btn-outline-dark btn-lg btn-block"
          onClick={() => this.reloadPage()}
        >
          Click here for live temperature updates
        </button>
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
