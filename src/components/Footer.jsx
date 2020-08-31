import React from 'react';
import data from "../../package.json";
import SettingsModal from "./SettingsModal.jsx"

class Footer extends React.Component {
    render() { 
        return ( 
            <div className="fixed-bottom footer">
                <nav className="nav footernav">
                  <a className="nav-link package-json">Version {data.version}</a>
                  <SettingsModal />
                </nav>
            </div>
         );
    }
}
 
export default Footer;