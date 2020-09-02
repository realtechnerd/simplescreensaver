import React from 'react';
import "./style.css";

class Time extends React.Component {
    constructor() {
        super();
        let newDate = new Date();
        let monthNames = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
        const month = monthNames[newDate.getUTCMonth()];
        const day = newDate.getDate();
        const year = newDate.getFullYear();
        let dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const dayWeek = dayNames[newDate.getDay()];
        const date = `${dayWeek}, ${month} ${day}, ${year}`;
        this.state = {
          date: date,
          time: "time"
        };
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      
    componentDidMount() {
        const timeUpdate = this.interval = setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 50);
    }
    componentWillUnmount() {
        clearInterval(this.timeUpdate);
      }

    render() { 
        return (
            <div className="timebody container">
                <div className="card time">
                    <div className="card-body">
                    <h1 className="timetext">{this.state.time}</h1>
                    <h1>{this.state.date}.</h1>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Time;