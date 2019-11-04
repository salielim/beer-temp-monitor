import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Beer Temperature Monitoring</h1>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Beer Type</th>
              <th scope="col">Min Temp</th>
              <th scope="col">Max Temp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pilsner</td>
              <td>4</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>IPA</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Lager</td>
              <td>4</td>
              <td>7</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Stout</td>
              <td>6</td>
              <td>8</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Wheat beer</td>
              <td>3</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Pale Ale</td>
              <td>4</td>
              <td>6</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
