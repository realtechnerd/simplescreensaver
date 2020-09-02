import React from 'react';
import SettingsBackground from "./SettingsBackground.jsx";
import "./style.css";

class Settings extends React.Component {
    render() { 
        return ( 
            <div className="settings">
                    <SettingsBackground />
                    <button className='lgbmegatron scale lb1'>Save Changes</button>
            </div>
         );
    }
}
 
export default Settings;