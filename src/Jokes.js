import React, {Component } from 'react';

class Joke extends Component {
    state = { joke: {} };

    componentWillMount() {
        //Retorna uma Promisse
        fetch("https://official-jok-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(json => this.setState({joke: json}))
        .catch(error => alert(error.message))
    }

    render() {
        const { setup, punchline } = this.state.joke;
        
        return (<div>
            <h2>Read the Joke</h2>
            <p>{setup}<em>{punchline}</em></p>
        </div>)
    }
}

export default Joke