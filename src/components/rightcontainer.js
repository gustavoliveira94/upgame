/* eslint-disable import/no-dynamic-require */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import ContainerRight from '../styles/main/containerright';
import Profile from '../styles/profile';
import Avatar from '../styles/profile/avatar';
import Text from '../styles/profile/text';

const RightContainer = () => {
    const [profile, setProfile] = useState([]);

    const getProfile = async () => {
        const prof = await axios.get(
            'https://api.github.com/users/gustavoliveira94'
        );

        setProfile(prof.data);
    };

    useEffect(() => {
        getProfile();
    }, []);

    console.log(profile && profile.avatar_url);

    return (
        <ContainerRight>
            <Profile>
                <Avatar src={`${profile && profile.avatar_url}`} />
                <Text>Name: {profile.name}</Text>
                <Text>Bio: {profile.bio}</Text>
                <Text>Followers: {profile.followers}</Text>
                <Text>Following: {profile.following}</Text>
                <Text>Location: {profile.location}</Text>
                <Text>
                    <a href={profile.url}>Profile</a>
                </Text>
            </Profile>
        </ContainerRight>
    );
};

export default RightContainer;
