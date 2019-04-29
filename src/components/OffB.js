import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class OffB extends Component {

    off = () => {
        this.url = 'https://172.28.219.225/api/NA4t9hTylAS7RWzmw4VYXrbSb2VnPpDIA4ctvrWe'
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