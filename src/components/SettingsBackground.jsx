import React from 'react';
import "./style.css";

class SettingsBackground extends React.Component {
    constructor() {
        super();
        this.state = {
            bgURL: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    render() { 
        return ( 
            <div className="form-group">
                <label>Background Image</label>
                <div className="row">
                    <div className="col">
                        <input type="text" name="bgURL" value={this.state.bgURL} onChange={this.handleChange} placeholder="Background Image Url.." className="form-control" id="bgInput"/>
                    </div>
                </div>
                <br/>
                <img className="imagePreview" src={this.state.bgURL} width="100%" alt="An Image YOU picked."/>
            </div>
         );
    }
}
 
export default SettingsBackground;