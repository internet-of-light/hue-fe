import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class TestB extends Component {

    t = () => {
        this.url = 'https://172.28.219.225/api/NA4t9hTylAS7RWzmw4VYXrbSb2VnPpDIA4ctvrWe/lights'
        Axios.get(this.url)
        .then(function (response) {
            // handle success
            alert(response);
          })
          .catch(function (error) {
            // handle error
            alert(error);
          })
    }

    render() {
        return (
            <Button onClick={this.t}>TEST</Button>
        )
    }
}

export default TestB