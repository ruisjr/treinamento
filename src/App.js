import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'

import profile from './assets/profile.png'

class App extends Component {

    // constructor() {
    state = { counter: 0, displayBio: false };

    // Arrow Functions
    addCounter = () => {
        this.setState({ counter: this.state.counter + 1});
        console.log('this', this);
    }
    
    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio})
    }

    render() {
        return (
            <div>
                <img src={profile} className='profile'/>

                <h1>Meu Portifolio!!!</h1>
                <p>Ola, meu nome e Rui Ignacio Jr.</p>
                <hr />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Eu sou Analista de Sistemas na Linx S.A.</p>
                            <p>Esse e o meu primeiro app de exemplo para o treinamento de React</p>
                            <p>Alem de programar, eu tambem gosto de ouvir musica.</p>
                            <button onClick={this.toggleDisplayBio}>Ver menos</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Ver mais</button>
                        </div>
                    )
                }
                <p>{this.state.counter}</p>
                <button onClick={this.addCounter}>addCounter</button>
                <hr></hr>
                <Projects />
                <hr></hr>
                <SocialProfiles />
            </div>
        )
    }
}

export default App;