import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class OnB extends Component {

    on = () => {
        this.url = 'http://172.28.219.189/api/Lht3HgITYDN-96UYm5mkJ4CEjKj20d3siYidcSq-'
        Axios.put(this.url + '/lights/3/state', {
          "on" : true
        });
    }

    render() {
        return(
            <div>
            <Button onClick={this.on}>TURN IT ON</Button>
            </div>
        )
    }
}

export default OnB