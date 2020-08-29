import React from 'react';
import data from "../../package.json";

class Footer extends React.Component {
    render() { 
        return ( 
                <p className="fixed-bottom footer">Version: {data.version} (according to package.json lol)</p>
         );
    }
}
 
export default Footer;