import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles'

class SocialProfile extends Component {
    render() {
        console.log('this.props', this.props)

        // object destructure
        const {id, link, image} = this.props.project

        return (
            <spam>
                <a href={link}>
                    <img style={{ width: 35, height: 35, margin: 10 }} src={image}></img>
                </a>
            </spam>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
            <div>
                <h2>Social Profiles</h2>
                {
                    SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                        // esta se chama função de callback
                        return (
                            <SocialProfile key={SOCIAL_PROFILE.id} project={SOCIAL_PROFILE} />
                        )
                    })
                }
            </div>
        )
    }
}

export default SocialProfiles;