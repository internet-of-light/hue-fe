import React, { Component } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button'

class TestB extends Component {

    t = () => {
        this.url = 'http://172.28.219.189/api/Lht3HgITYDN-96UYm5mkJ4CEjKj20d3siYidcSq-/lights'
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