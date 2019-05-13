import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class OffB extends Component {

    off = () => {
        this.url = 'http://172.28.219.189/api/Lht3HgITYDN-96UYm5mkJ4CEjKj20d3siYidcSq-'
        Axios.put(this.url + '/lights/3/state', {
          "on" : false
        });
    }

    render() {
        return(
            <Button onClick={this.off}>TURN IT OFF</Button>
        )
    }
}

export default OffB