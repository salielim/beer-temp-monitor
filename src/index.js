import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pilsner</td>
              <td>4</td>
              <td>6</td>
              <td>{temp1}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>IPA</td>
              <td>5</td>
              <td>6</td>
              <td>{temp2}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Lager</td>
              <td>4</td>
              <td>7</td>
              <td>{temp3}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Stout</td>
              <td>6</td>
              <td>8</td>
              <td>{temp4}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Wheat beer</td>
              <td>3</td>
              <td>5</td>
              <td>{temp5}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Pale Ale</td>
              <td>4</td>
              <td>6</td>
              <td>{temp6}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
