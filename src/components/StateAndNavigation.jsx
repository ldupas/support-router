import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StateAndNavigation = () => {
    const [user, setUser] = useState({
        name: "louis",
        age: 32
    })

    let navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/mes-informations-personnelles", {state: {user}})
    }

    return (
        <div>
            <h2>Envoi d'infos et navigation</h2>
            <button onClick={handleNavigation}>Zouuuuuu</button>
        </div>
    )
}

export default StateAndNavigation