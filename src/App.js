import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import Title from "./Title";
import Joke from './Jokes';
import Header from './Header'

import profile from './assets/profile.png'

class App extends Component {

    // constructor() {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio : !this.state.displayBio})
    }

    render() {
        return (
            <div>
                <Header />
                <img src={profile} className='profile'/>

                <h1>Meu Portifolio!!!</h1>
                <p>Ola, meu nome e Rui Ignacio Jr.</p>
                <Title />
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
                <hr></hr>
                <Projects />
                <hr></hr>
                <Joke />
                <br />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;