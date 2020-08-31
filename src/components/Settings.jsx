import React from 'react';
import SettingsBackground from "./SettingsBackground.jsx";
import "./style.css";

class Settings extends React.Component {
    render() { 
        return ( 
            <div className="settings">
                <form>
                    <SettingsBackground />
                    <button className='lgbprimary scale bsm'>Save Changes</button>
                </form>
            </div>
         );
    }
}
 
export default Settings;