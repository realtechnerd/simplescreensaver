import React from 'react';
import SettingsBackground from "./SettingsBackground.jsx";
import "./style.css";

class Settings extends React.Component {
    render() { 
        return ( 
            <div className="settings">
                    <SettingsBackground />
            </div>
         );
    }
}
 
export default Settings;