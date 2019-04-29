import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class OnB extends Component {

    on = () => {
        this.url = 'https://172.28.219.225/api/NA4t9hTylAS7RWzmw4VYXrbSb2VnPpDIA4ctvrWe'
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