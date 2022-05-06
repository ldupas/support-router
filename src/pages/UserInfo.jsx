import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const UserInfo = () => {
    let location = useLocation();
    console.log(location.state.name)

    return (
        <div>
            <h2>Bienvenue {location.state.user.name}</h2>
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    )
}

export default UserInfo