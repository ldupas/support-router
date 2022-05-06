import React from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // je peux passer autant d'actions que je veux
        // avant la redirection
        // ex : exemple : traitement des infos du formulaire
        navigate("/espace-administration")
    }

    return (
        <div>
            <h2>Mon formulaire login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" id="email" name="email" placeholder="mail@mail.com" />
                <input type="password" id="password" name="password" placeholder="mypassword" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form