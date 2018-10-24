import React, { Component } from 'react';
import axios from 'axios';

export default class FriendList extends Component {
    constructor() {
        super();
        this.state = {
            friends: [],
        };
    }

    componentDidMount() {
        axios
            .get('https://localhost:5000/friends')
            .then(response => {
                this.setState(() => ({ friends: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }

    render() {
        return (
            <div>
                FriendList!
            </div>
        );
    }
} 