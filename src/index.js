import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const beers = [
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
    temp1: '',
    temp2: '',
    temp3: '',
    temp4: '',
    temp5: '',
    temp6: '',
  };

  componentDidMount() {
    axios
      .post(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
        {
          id: 1,
        },
      )
      .then(res => {
        const temp1 = res.data.data.temperature;
        this.setState({ temp1 });
      });

    axios
      .post(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
        {
          id: 2,
        },
      )
      .then(res => {
        const temp2 = res.data.data.temperature;
        this.setState({ temp2 });
      });

    axios
      .post(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
        {
          id: 3,
        },
      )
      .then(res => {
        const temp3 = res.data.data.temperature;
        this.setState({ temp3 });
      });

    axios
      .post(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
        {
          id: 4,
        },
      )
      .then(res => {
        const temp4 = res.data.data.temperature;
        this.setState({ temp4 });
      });

    axios
      .post(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
        {
          id: 5,
        },
      )
      .then(res => {
        const temp5 = res.data.data.temperature;
        this.setState({ temp5 });
      });

    axios
      .post(
        `https://us-central1-noderite-crawler.cloudfunctions.net/beer-temp-monitor-backend`,
        {
          id: 6,
        },
      )
      .then(res => {
        const temp6 = res.data.data.temperature;
        this.setState({ temp6 });
      });
  }

  render() {
    const { temp1, temp2, temp3, temp4, temp5, temp6 } = this.state;
    return (
      <div>
        <h1>Beer Temperature Monitoring</h1>
        <div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Beer Type</th>
                <th scope="col">Min Temp</th>
                <th scope="col">Max Temp</th>
                <th scope="col">Current Temp</th>
              </tr>
            </thead>
            {beers.map((beer, index) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{beer.id}</th>
                    <td>{beer.type}</td>
                    <td>{beer.min}</td>
                    <td>{beer.max}</td>
                    {/* <td>{temp1}</td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
