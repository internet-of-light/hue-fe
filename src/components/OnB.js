import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class OnB extends Component {

    on = () => {
        this.url = '172.28.219.225/api/1028d66426293e821ecfd9ef1a0731df'
        Axios.put(this.url + '/lights/1/state', {
          on : true
        });
    }

    render() {
        return(
            <Button onClick={this.on}>TURN IT ON</Button>
        )
    }
}

export default OnB