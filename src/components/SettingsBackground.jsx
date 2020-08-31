import React from 'react';
import "./style.css";

class SettingsBackground extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="form-group">
                <label>Background</label>
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder="Background Image Url.." className="form-control" id="bgInput"/>
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Background Color (Accepts color codes)" className="form-control" id="bgInput"/>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SettingsBackground;