import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getJuegoEspecificoById } from "../api/ConectaAPI";

const CardDetailController = () => {

    const { id } = useParams();

    const [juego, setJuego] = useState([]);

    useEffect(() => {
        async function getJuego() {
            const juego = await getJuegoEspecificoById(id);
            setJuego(juego);
        }
        getJuego();
        document.title = `${juego.name} - Conecta`; 
    }, [id]);

    return (
        <div className="wrapper">
            {juego &&
                <div>
                    <h1>{juego.name}</h1>
                    <img src={juego.background_image} alt={juego.name} />
                    <p>{juego.description_raw}</p>
                </div>
            }
        </div>
    );
}

export default CardDetailController;