import React, { Component } from 'react';

const TITLES = [
    "JavaScript",
    "React",
    "Python",
    "..."
]

class Title extends Component {
    state = { titleIndex: 0, fadeIn: false }

    componentDidMount() {
        console.log("Title component foi montado");
        this.timeout = setTimeout(() => {this.setState( {fadeIn: true})}, 2000);

        this.animateTitles();
    }

    componentWillUnmount() {
        console.log("Title componte será desmontado")
        clearTimeout(this.timeout);
        clearInterval(this.titleInterval);
    }

    // Helper Métode
    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            
            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => {this.setState({fadeIn: false})}, 2000);
        }, 4000)
    }

    render() {
        const {titleIndex, fadeIn } = this.state;
        const title = TITLES[this.state.titleIndex];

        return (
            // <p>Eu sei programar em {title}</p>
        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>Eu sei programar em {title}</p>
        )
    }
}

export default Title