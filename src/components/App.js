import React from 'react';
import propTypes from 'prop-types';

const pushState = (obj, url) => window.history.pushState(obj, '', url);
const onPopState = (handler) => {
  window.onpopstate = handler;
};
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="App">Welcome to React</div>;
  }
}
export default App;
