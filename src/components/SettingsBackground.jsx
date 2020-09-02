import React from 'react';
import "./style.css";

class SettingsBackground extends React.Component {
    constructor() {
        super();
        this.state = {
            bgURL: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeBGImage = this.changeBGImage.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    }
    changeBGImage() {
        document.body.style.background = `url(${this.state.bgURL})`;
    }
    render() { 
        return ( 
            <div className="form-group">
                <label>Background Image</label>
                <div className="row">
                    <div className="col">
                        <input 
                            type="text" 
                            name="bgURL" 
                            value={this.state.bgURL} 
                            onChange={this.handleChange} 
                            placeholder="Background Image Url.." 
                            className="form-control" 
                            id="bgInput"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <br/>
                    <img className="imagePreview" src={this.state.bgURL} width="100%" alt="An Image YOU picked."/>
                    <br/>
                    <br/>
                    <button className='lgbmegatron scale lb1' onClick={this.changeBGImage}>Save Changes</button>
            </div>
         );
    }
}
 
export default SettingsBackground;