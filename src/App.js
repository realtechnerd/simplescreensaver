import React from 'react';
import './App.css';
import Time from "./components/Time.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer.jsx"

class App extends React.Component {
  render() {
    return(
      <div>
        <Time />
        <Footer />
      </div>
    )
  }
}

export default App;
