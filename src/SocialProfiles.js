import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles'

const SocialProfile = props => {
    const { link, image } = props.SocialProfile;

    return (
        <spam>
            <a href={link}>
                <img style={{ width: 35, height: 35, margin: 10 }} src={image}></img>
            </a>
        </spam>
    )
}

//Isso aqui é como seria se eu definisse um class component;
//Isso aqui é um stateless functional component
const SocialProfiles = () => {
    return (
        <div>
            <h2>Minhas mídias sociais</h2>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    // esta se chama função de callback
                    return (
                        <SocialProfile key={SOCIAL_PROFILE.id} SocialProfile={SOCIAL_PROFILE} />
                    )
                })
            }
        </div>
    )
}

export default SocialProfiles;